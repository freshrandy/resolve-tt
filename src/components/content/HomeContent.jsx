import React from "react";
// Note: FeatureCardComponent and TimelineItemComponent are now imported
// Removed Quick Access section and Timeline card

// Receive styles object and navigate function as props
const HomeContent = ({ styles, navigate }) => {
  return (
    <div>
      {" "}
      {/* Removed space-y-6 as it's a Tailwind class */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>About RouteThis Resolve</h2>
        <p style={styles.paragraph}>
          RouteThis Resolve is a powerful diagnostic tool...
        </p>
        <p style={styles.paragraph}>
          TalkTalk is implementing Resolve in two phases:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 1:</strong> Testing...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 2:</strong> Extended trial...
          </li>
        </ul>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          This training portal will guide you...
        </p>
      </div>
      {/* Quick Access Section Removed */}
      {/* Implementation Timeline Card Removed */}
    </div>
  );
};

export default HomeContent;
