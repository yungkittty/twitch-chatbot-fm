const _ = require("lodash");

const tcfGetPlayer = (
  // eslint-disable-line
  tcfRequest,
  tcfReponse,
  tcfPlayers
) =>
  tcfReponse.status(200).json(
    _.chain(tcfPlayers)
      .keys()
      .sortBy(tcfPlayerId => {
        return tcfPlayers[tcfPlayerId].votes;
      })
      .reverse()
      .reduce((tcfPlayersOthers, tcfPlayerId) => {
        const tcfPlayer = {
          // eslint-disable-line
          ...tcfPlayers[tcfPlayerId],
          id: tcfPlayerId
        };
        return [
          // eslint-disable-line
          ...tcfPlayersOthers,
          tcfPlayer
        ];
      }, [])
      .value()
  );

module.exports = tcfGetPlayer;
