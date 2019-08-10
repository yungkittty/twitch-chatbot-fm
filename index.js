const tmi = require("tmi.js");

const tmiClientConfigs = require("./src/tcf-bot-configs");

const tmiClient = new tmi.client(tmiClientConfigs);

const tcfBot = require("./src/tcf-bot");

const tmiClientBot = new tcfBot();

tmiClient.on("connected", tmiClientBot.onConnected);

tmiClient.on("message", tmiClientBot.onMessage);

tmiClient.connect();
