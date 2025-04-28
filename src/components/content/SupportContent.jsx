import React from "react";
import { FaInfoCircle } from "react-icons/fa";

// Receive styles object as props
const SupportContent = ({ styles }) => {
  return (
    <div>
      {" "}
      {/* Removed space-y-6 */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Contact Information</h2>
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
        <h3 style={styles.heading3}>VDI Compatibility</h3>
        <p style={styles.paragraph}>When using video features through VDI:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Ensure RouteThis Proxy Enhancer...</li>
          {/* ... other VDI points */}
        </ul>
        <h3 style={styles.heading3}>Documentation Issues</h3>
        <p style={styles.paragraph}>
          If you're having trouble with documentation:
        </p>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Remember customer key...</li>
          {/* ... other doc points */}
        </ul>
      </div>
      {/* Alert Box */}
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
