import React from "react";

// Receive styles object as props
const LeadershipContent = ({ styles }) => {
  return (
    <div>
      {" "}
      {/* Removed space-y-6 */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Adoption Strategies</h2>
        <p style={styles.paragraph}>To ensure successful adoption...</p>
        <h3 style={styles.heading3}>Team Meetings</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Make Resolve part...</li>
          {/* ... */}
        </ul>
        <h3 style={styles.heading3}>Real-Time Support</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Be available...</li>
          {/* ... */}
        </ul>
        <h3 style={styles.heading3}>Coaching and Mentoring</h3>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Provide 1:1 coaching...</li>
          {/* ... */}
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>User Administration</h2>
        <p style={styles.paragraph}>
          As an admin, you can manage user access...
        </p>
        <h3 style={styles.heading3}>Adding Users</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Log into the Admin section...</li>
          {/* ... */}
        </ul>
        <h3 style={styles.heading3}>Managing Groups</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Create groups...</li>
          {/* ... */}
        </ul>
        <h3 style={styles.heading3}>Setting Permissions</h3>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Control what features...</li>
          {/* ... */}
        </ul>
      </div>
    </div>
  );
};

export default LeadershipContent;
