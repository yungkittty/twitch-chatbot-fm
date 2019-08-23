import _ from "lodash";
import React from "react";
import AppHints from "./components/app-hints";
import AppListItem from "./components/app-list-item";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/players")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(() => undefined);
  }, []);

  const hideItem = itemId => {
    fetch(`http://localhost:4000/players/${itemId}`, { method: "DELETE" })
      .then(() => setData(_.filter(data, item => item.id !== itemId)))
      .catch(() => undefined);
  };

  return (
    <div className="pure-g" style={styles.appContainer}>
      <div className="pure-u-1 pure-u-md-3-4 pure-u-lg-1-2">
        <AppHints />
        {_.map(data, item => {
          const {
            // eslint-disable-line
            id,
            firstname,
            surname,
            votes
          } = item;
          return (
            <AppListItem
              // eslint-disable-line
              id={id}
              firstname={firstname}
              surname={surname}
              votes={votes}
              hideItem={hideItem}
            />
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#eeeeee",
    overflowX: "hidden"
  }
};

export default App;
