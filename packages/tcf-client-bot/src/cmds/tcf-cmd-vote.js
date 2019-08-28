const _ = require("lodash");

const tcfCmdVote = (
  // eslint-disable-line
  tcfClientBot,
  tcfPlayers,
  tcfTarget,
  tcfCmdArgs
) => {
  if (!_.isString(tcfCmdArgs[0]) || !_.isString(tcfCmdArgs[1])) {
    tcfClientBot.say(tcfTarget, "!tcf-vote [player_firstname] [player_surname].");
    return;
  }
  const tcfPlayerFirstname = _.chain(tcfCmdArgs[0]).toLower().deburr().value();
  const tcfPlayerSurname = _.chain(tcfCmdArgs[1]).toLower().deburr().value();
  const tcfPlayerId = `${tcfPlayerFirstname}-${tcfPlayerSurname}`;
  const tcfPlayer = tcfPlayers[tcfPlayerId] || { votes: 0 };
  tcfPlayer.firstname = tcfPlayerFirstname;
  tcfPlayer.surname = tcfPlayerSurname;
  tcfPlayer.votes += 1;
  tcfPlayers[tcfPlayerId] = tcfPlayer;
  tcfClientBot.say(tcfTarget, "Your vote have been taken into account.");
  return;
};

module.exports = tcfCmdVote;
