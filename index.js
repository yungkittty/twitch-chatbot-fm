const _ = require("lodash");
const express = require("express");
const fs = require("fs");
const path = require("path");
const tmi = require("tmi.js");

const tcfPlayers = {};

const tcfServer = express();

tcfServer.use((tcfRequest, tcfResponse, tcfNext) => {
  tcfResponse.append("Access-Control-Allow-Origin", ["*"]);
  tcfResponse.append("Access-Control-Allow-Methods", "GET,DELETE");
  tcfNext();
});

const {
  // eslint-disable-line
  tcfRouteGetPlayers,
  tcfRouteDeletePlayers
} = require("./packages/tcf-api");

tcfServer.get(
  "/api/players",
  // eslint-disable-line
  (tcfRequest, tcfReponse) =>
    tcfRouteGetPlayers(
      // eslint-disable-line
      tcfRequest,
      tcfReponse,
      tcfPlayers
    )
);

tcfServer.delete(
  "/api/players/:id",
  // eslint-disable-line
  (tcfRequest, tcfReponse) =>
    tcfRouteDeletePlayers(
      // eslint-disable-line
      tcfRequest,
      tcfReponse,
      tcfPlayers
    )
);

if (process.env.NODE_ENV !== "development") {
  const TCF_CLIENT_PATH = path.normalize("/packages/tcf-client/build");

  tcfServer.use(express.static(path.join(__dirname, TCF_CLIENT_PATH)));

  tcfServer.get("*", (tcfRequest, tcfResponse) =>
    tcfResponse.sendFile(path.join(__dirname, TCF_CLIENT_PATH, "index.html"))
  );
}

const {
  // eslint-disable-line
  TCF_CLIENT_BOT_USERNAME,
  TCF_CLIENT_BOT_TOKEN,
  TCF_CLIENT_BOT_CHANNEL
} = JSON.parse(
  fs.readFileSync(
    // eslint-disable-line
    path.join(__dirname, "tcf-configs.json"),
    { encoding: "utf-8" }
  )
);

const tcfClientBot = new tmi.client({
  identity: {
    username: TCF_CLIENT_BOT_USERNAME,
    password: TCF_CLIENT_BOT_TOKEN
  },
  channels: [TCF_CLIENT_BOT_CHANNEL]
});

const {
  // eslint-disable-line
  tcfCmdVote
} = require("./packages/tcf-client-bot");

tcfClientBot.on("message", (
  // eslint-disable-line
  tcfTarget,
  tcfContext,
  tcfMessage,
  tcfSelf
) => {
  if (tcfSelf) return;
  const [tcfCmd, ...tcfCmdArgs] = _.split(_.trim(tcfMessage), " ");
  switch (tcfCmd) {
    case "!tcf-vote":
      return tcfCmdVote(
        // eslint-disable-line
        tcfClientBot,
        tcfPlayers,
        tcfTarget,
        tcfCmdArgs
      );
    default:
      return;
  }
});

tcfClientBot.connect();

tcfServer.listen(4000);
