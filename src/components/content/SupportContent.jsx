import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const SupportContent = ({ styles }) => {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Contact Information</h2>
        {/* Use styles.paragraph and styles.strong */}
        <p style={styles.paragraph}>
          <strong style={styles.strong}>Email Support:</strong>{" "}
          john@routethis.com
        </p>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          <strong style={styles.strong}>Internal Support:</strong> Contact your
          team leader...
        </p>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Troubleshooting Common Issues</h2>
        {/* Use styles.heading3 */}
        <h3 style={styles.heading3}>VDI Compatibility</h3>
        <p style={styles.paragraph}>When using video features through VDI:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Ensure RouteThis Proxy Enhancer...</li>
          <li style={styles.listItem}>
            Video quality may be slightly pixelated...
          </li>
          <li style={styles.listItem}>
            Initial connection may have longer round trip...
          </li>
          <li style={styles.listItem}>
            Contact support if video does not connect...
          </li>
        </ul>
        <h3 style={styles.heading3}>Documentation Issues</h3>
        <p style={styles.paragraph}>
          If you're having trouble with documentation:
        </p>
        {/* Use styles.list/listItem, remove margin on last list */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Remember customer key...</li>
          <li style={styles.listItem}>Complete mandatory feedback forms...</li>
          <li style={styles.listItem}>Ensure Ticket ID field populated...</li>
        </ul>
      </div>
      {/* Use styles.alert, styles.alertIcon, styles.alertText, styles.strong */}
      <div style={styles.alert}>
        <FaInfoCircle style={styles.alertIcon} />
        <div style={styles.alertText}>
          <strong style={styles.strong}>VDI Testing Results:</strong> Testing
          has confirmed...
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
