const _ = require("lodash");

const tcfGetPlayer = (
  // eslint-disable-line
  tcfRequest,
  tcfReponse,
  tcfPlayers
) =>
  tcfReponse.json(
    _.chain(tcfPlayers)
      .keys()
      .reduce((tcfPlayersOthers, tcfPlayersId) => {
        const tcfPlayer = {
          // eslint-disable-line
          ...tcfPlayers[tcfPlayersId],
          id: tcfPlayersId
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
