const _ = require("lodash");

// !tcf-vote [player_firstname] [player_surname]

const tcfVote = (
  // eslint-disable-line
  tcfServerBot,
  tcfPlayers,
  tcfTarget,
  tcfCmdArgs
) => {
  if (!_.isString(tcfCmdArgs[0]) || !_.isString(tcfCmdArgs[1])) {
    tcfServerBot.say(tcfTarget, "");
    return;
  }
  const tcfPlayerFirstname = _.deburr(tcfCmdArgs[0]);
  const tcfPlayerSurname = _.deburr(tcfCmdArgs[1]);
  const tcfPlayerId = tcfPlayerFirstname + tcfPlayerSurname;
  const tcfPlayer = tcfPlayers[tcfPlayerId] || { votes: 0 };
  tcfPlayer.firstname = tcfPlayerFirstname;
  tcfPlayer.surname = tcfPlayerSurname;
  tcfPlayer.votes += 1;
  tcfPlayers[tcfPlayerId] = tcfPlayer;
  tcfServerBot.say(tcfTarget, "");
  return;
};

module.exports = tcfVote;
