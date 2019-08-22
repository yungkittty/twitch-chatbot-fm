import React from "react";
import AppHints from "./components/app-hints";
import AppListItem from "./components/app-list-item";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4000/players")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    // .catch(() => {});
  }

  renderItem(item) {
    const {
      // eslint-disable-line
      firstname,
      surname,
      votes
    } = item;
    return (
      <AppListItem
        // eslint-disable-line
        firstname={firstname}
        surname={surname}
        votes={votes}
      />
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className="pure-g" style={styles.appContainer}>
        <div className="pure-u-1 pure-u-md-3-4 pure-u-lg-1-2">
          <AppHints />
          {_.map(data, this.renderItem)}
        </div>
      </div>
    );
  }
}

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
