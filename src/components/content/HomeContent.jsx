import React from "react";
// Imports remain the same

// Receive styles object and navigate function as props
const HomeContent = ({ styles, navigate }) => {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>About RouteThis Resolve</h2>
        {/* Use styles.paragraph consistently */}
        <p style={styles.paragraph}>
          RouteThis Resolve is a powerful diagnostic tool...
        </p>
        <p style={styles.paragraph}>
          TalkTalk is implementing Resolve in two phases:
        </p>
        {/* Use styles.list and styles.listItem */}
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 1:</strong> Testing...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 2:</strong> Extended trial...
          </li>
        </ul>
        {/* Use styles.paragraph, remove margin if it's the last element */}
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          This training portal will guide you...
        </p>
      </div>
      {/* Sections removed as requested */}
    </div>
  );
};

export default HomeContent;
