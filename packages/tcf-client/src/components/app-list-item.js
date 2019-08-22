import _ from "lodash";
import React from "react";

const AppListItem = ({
  // eslint-disable-line
  firstname,
  surname,
  votes
}) => (
  <button style={styles.itemContainer} onClick={() => undefined}>
    <h1 style={styles.itemTitle}>
      {/* eslint-disable-line */}
      {_.capitalize(firstname)}
    </h1>
    <h2 style={styles.itemSubtitle}>
      {/* eslint-disable-line */}
      {_.capitalize(surname)}
    </h2>
    <div style={styles.itemVotesContainer}>
      <h3 style={styles.itemVotesTitle}>
        {/* eslint-disable-line */}
        {`${votes} vote(s)`}
      </h3>
    </div>
  </button>
);

const styles = {
  itemContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: 180,
    width: "100%",
    boxSizing: "border-box",
    padding: 30,
    marginBottom: 30,
    border: 0,
    outline: "none",
    backgroundColor: "#fafafa",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
    overflow: "hidden"
  },
  itemTitle: {
    margin: 0,
    fontSize: 60
  },
  itemSubtitle: {
    margin: 0,
    fontSize: 30
  },
  itemVotesContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 90,
    boxSizing: "border-box",
    padding: 30
  },
  itemVotesTitle: {
    margin: 0,
    fontSize: 30
  }
};

export default AppListItem;
