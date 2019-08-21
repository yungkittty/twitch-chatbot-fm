const _ = require("lodash");
const express = require("express");
const tmi = require("tmi.js");

require("dotenv").config();

const tcfPlayers = {};

const tcfServer = express();

tcfServer.use((tcfRequest, tcfReponse, tcfNext) => {
  tcfReponse.append("Access-Control-Allow-Origin", ["*"]);
  tcfReponse.append("Access-Control-Allow-Methods", "GET");
  tcfReponse.append("Access-Control-Allow-Headers", "Content-Type");
  tcfNext();
});

const tcfGetPlayers = require("./src/routes/tcf-get-players");

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

const {
  TCF_SERVER_PORT,
  TCF_SERVER_BOT_USERNAME,
  TCF_SERVER_BOT_PASSWORD,
  TCF_SERVER_BOT_CHANNEL
} = process.env;

tcfServer.listen(TCF_SERVER_PORT);

const tcfServerBot = new tmi.client({
  identity: {
    username: TCF_SERVER_BOT_USERNAME,
    password: TCF_SERVER_BOT_PASSWORD
  },
  channels: [TCF_SERVER_BOT_CHANNEL]
});

const tcfVote = require("./src/commands/tcf-vote");

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
