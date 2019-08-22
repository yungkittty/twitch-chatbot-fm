import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppHint = ({
  // eslint-disable-line
  hintIcon,
  hint
}) => (
  <div style={styles.hintContainer}>
    <FontAwesomeIcon
      // eslint-disable-line
      icon={hintIcon}
      size="3x"
      color="#e0e0e0"
    />
    <h1 style={styles.hintTitle}>
      {/*eslint-disable-line */}
      {hint}
    </h1>
  </div>
);

const styles = {
  hintContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    padding: 15
  },
  hintTitle: {
    margin: 0,
    marginLeft: 15,
    fontSize: 30,
    color: "#e0e0e0"
  }
};

export default AppHint;
