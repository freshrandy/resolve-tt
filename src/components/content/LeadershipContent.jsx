import React from "react";

const LeadershipContent = ({ styles }) => {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Adoption Strategies</h2>
        <p style={styles.paragraph}>To ensure successful adoption...</p>
        {/* Use styles.heading3 consistently */}
        <h3 style={styles.heading3}>Team Meetings</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Make Resolve part...</li>
          <li style={styles.listItem}>Provide space for sharing...</li>
          <li style={styles.listItem}>Rotate presenters...</li>
        </ul>
        <h3 style={styles.heading3}>Real-Time Support</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Be available on the floor...</li>
          <li style={styles.listItem}>Respond promptly...</li>
          <li style={styles.listItem}>Help with customer interactions...</li>
        </ul>
        <h3 style={styles.heading3}>Coaching and Mentoring</h3>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Provide 1:1 coaching...</li>
          <li style={styles.listItem}>Review usage reports...</li>
          <li style={styles.listItem}>Set specific goals...</li>
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
          <li style={styles.listItem}>Click "Add Users"...</li>
          <li style={styles.listItem}>Enter email addresses...</li>
          <li style={styles.listItem}>Select appropriate groups...</li>
        </ul>
        <h3 style={styles.heading3}>Managing Groups</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Create groups...</li>
          <li style={styles.listItem}>Assign users to specific groups...</li>
          <li style={styles.listItem}>Use groups for targeted reporting...</li>
        </ul>
        <h3 style={styles.heading3}>Setting Permissions</h3>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Control what features...</li>
          <li style={styles.listItem}>Manage reporting capabilities...</li>
          <li style={styles.listItem}>Limit administrative functions...</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadershipContent;
