import React from "react";
import { faSyncAlt, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import AppHint from "./app-hint";

const AppHints = () => (
  <div style={styles.hintsContainer}>
    <AppHint hintIcon={faSyncAlt} hint="Reload to update" />
    <AppHint hintIcon={faHandPointUp} hint="Press to hide" />
  </div>
);

const styles = {
  hintsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 180,
    width: "100%",
    boxSizing: "border-box"
  }
};

export default AppHints;
