const _ = require("lodash");
const express = require("express");
const tmi = require("tmi.js");

require("dotenv").config();

const tcfPlayers = {};

const tcfServer = express();

tcfServer.get("/players", () => undefined);

const {
  TCF_SERVER_PORT,
  TCF_SERVER_BOT_USERNAME,
  TCF_SERVER_BOT_PASSWORD,
  TCF_SERVER_BOT_CHANNEL
} = process.env;

tcfServer.listen(TCF_SERVER_PORT);

const tcfServerBot = new tmi.client({
  username: TCF_SERVER_BOT_USERNAME,
  password: TCF_SERVER_BOT_PASSWORD,
  channels: [TCF_SERVER_BOT_CHANNEL]
});

const tcfCmdVote = require("./src/cmds/tcf-cmd-vote");

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
      return tcfCmdVote(
        // eslint-disable-line
        tcfPlayers,
        tcfTarget,
        tcfCmdArgs
      );
    default:
      return;
  }
});

tcfServerBot.connect();
