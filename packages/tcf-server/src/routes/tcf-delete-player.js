const _ = require("lodash");

const tcfDeletePlayer = (
  // eslint-disable-line
  tcfRequest,
  tcfReponse,
  tcfPlayers
) => {
  const tcfPlayerId = (tcfRequest.params || {}).id;
  if (!tcfPlayerId) return tcfReponse.status(400).end();
  if (!tcfPlayers[tcfPlayerId]) return tcfReponse.status(404).end();
  _.unset(tcfPlayers, tcfPlayerId);
  return tcfReponse.status(200).json(tcfPlayers);
};

module.exports = tcfDeletePlayer;
