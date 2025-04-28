import React from "react";
// Removed Recharts imports

// Receive styles object as props
const TrialResourcesContent = ({ styles }) => {
  return (
    <div>
      {" "}
      {/* Removed space-y-6 */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>TalkTalk Router Portfolio</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Vendor</th>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>TalkTalk Name</th>
                <th style={styles.th}>Wi-Fi Standard</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
              <tr>
                <td style={styles.td}>Sagemcom</td>
                <td style={styles.td}>FAST5364</td>
                {/* ... */}
              </tr>
              <tr>
                <td style={styles.td}>Huawei</td>
                <td style={styles.td}>DG8041W</td>
                {/* ... */}
              </tr>
              {/* ... other router rows */}
              <tr>
                <td style={styles.td}>Sagemcom</td>
                <td style={styles.td}>FAST5464</td>
                <td style={styles.td}>Wi-Fi Hub 2 (WFH2)</td>
                <td style={styles.td}>Wi-Fi 5</td>
              </tr>
              <tr>
                <td style={styles.td}>eero</td>
                <td style={styles.td}>eero 6</td>
                <td style={styles.td}>eero 6</td>
                <td style={styles.td}>Wi-Fi 6</td>
              </tr>
              <tr>
                <td style={styles.td}>eero</td>
                <td style={styles.td}>eero Pro 6</td>
                <td style={styles.td}>eero Pro 6</td>
                <td style={styles.td}>Wi-Fi 6</td>
              </tr>
              <tr>
                <td style={styles.td}>Sagemcom</td>
                <td style={styles.td}>F5359</td>
                <td style={styles.td}>Wi-Fi Hub 3 (WFH3)</td>
                <td style={styles.td}>Wi-Fi 6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Phase 1: SMC Testing</h2>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>10 Second Level Support agents...</li>
          {/* ... */}
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Phase 2: Call Center Testing</h2>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>15-20 Call Center agents...</li>
          {/* ... */}
        </ul>
      </div>
      <div style={styles.card}>
        {/* Renamed from Overview to just Success Metrics List */}
        <h2 style={styles.cardTitle}>Success Metrics</h2>
        {/* Removed the grid and the chart div */}
        <div>
          <h3 style={styles.heading3}>Key Metrics Tracked</h3>
          <ul style={{ ...styles.list, marginBottom: 0 }}>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Repeat Call In Rate:</strong> ...
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Truck Roll Rate:</strong> ...
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>CPE Replacement Rate:</strong> ...
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>NPS:</strong> ...
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>AHT:</strong> ...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrialResourcesContent;
