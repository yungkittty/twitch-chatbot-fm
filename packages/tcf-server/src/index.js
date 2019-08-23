const _ = require("lodash");
const express = require("express");
const tmi = require("tmi.js");

require("dotenv").config();

const tcfPlayers = {};

const tcfServer = express();

tcfServer.use((tcfRequest, tcfReponse, tcfNext) => {
  tcfReponse.append("Access-Control-Allow-Origin", ["*"]);
  tcfReponse.append("Access-Control-Allow-Methods", "GET, DELETE");
  tcfNext();
});

const tcfGetPlayers = require("./routes/tcf-get-players");
const tcfDeletePlayer = require("./routes/tcf-delete-player");

tcfServer.get("/players", (
  // eslint-disable-line
  tcfRequest,
  tcfReponse
) =>
  tcfGetPlayers(
    // eslint-disable-line
    tcfRequest,
    tcfReponse,
    tcfPlayers
  )
);

tcfServer.delete("/players/:id", (
  // eslint-disable-line
  tcfRequest,
  tcfReponse
) =>
  tcfDeletePlayer(
    // eslint-disable-line
    tcfRequest,
    tcfReponse,
    tcfPlayers
  )
);

tcfServer.listen(4000);

const {
  TCF_SERVER_BOT_USERNAME,
  TCF_SERVER_BOT_PASSWORD,
  TCF_SERVER_BOT_CHANNEL
} = process.env;

const tcfServerBot = new tmi.client({
  identity: {
    username: TCF_SERVER_BOT_USERNAME,
    password: TCF_SERVER_BOT_PASSWORD
  },
  channels: [TCF_SERVER_BOT_CHANNEL]
});

const tcfVote = require("./commands/tcf-vote");

tcfServerBot.on("message", (
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
      return tcfVote(
        // eslint-disable-line
        tcfServerBot,
        tcfPlayers,
        tcfTarget,
        tcfCmdArgs
      );
    default:
      return;
  }
});

tcfServerBot.connect();
