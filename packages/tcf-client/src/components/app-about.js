import React from "react";

const AppAbout = () => (
  <div style={styles.aboutContainer}>
    <h4 style={styles.aboutTitle}>
      {/* eslint-disable-line */}
      Twitch Chatbot FM Beta v0.9
    </h4>
    <h5 style={styles.aboutSubtitle}>
      {/* eslint-disable-line */}
      To check for updates:
    </h5>
    <a
      // eslint-disable-line
      style={styles.aboutText}
      href="https://bit.ly/2ZlZFiB"
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* eslint-disable-line */}
      https://bit.ly/2ZlZFiB
    </a>
    <h5 style={styles.aboutSubtitle}>
      {/* eslint-disable-line */}
      To contact me about issues:
    </h5>
    <p style={styles.aboutText}>
      {/* eslint-disable-line */}
      twitch.chatbot.fm@gmail.com
    </p>
  </div>
);

const styles = {
  aboutContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 20,
    paddingRight: 35
  },
  aboutTitle: {
    margin: 0,
    marginBottom: 10
  },
  aboutSubtitle: {
    margin: 0,
    marginTop: 5
  },
  aboutText: {
    margin: 0
  }
};

export default AppAbout;
