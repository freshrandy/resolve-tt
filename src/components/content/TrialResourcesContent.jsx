import React from "react";

const TrialResourcesContent = ({ styles }) => {
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>TalkTalk Router Portfolio</h2>
        {/* Use styles.tableContainer */}
        <div style={styles.tableContainer}>
          {/* Use styles.table, styles.th, styles.td */}
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
              <tr>
                <td style={styles.td}>Sagemcom</td>
                <td style={styles.td}>FAST5364</td>
                <td style={styles.td}>Wi-Fi Hub (WFH)</td>
                <td style={styles.td}>Wi-Fi 5</td>
              </tr>
              <tr>
                <td style={styles.td}>Huawei</td>
                <td style={styles.td}>DG8041W</td>
                <td style={styles.td}>Wi-Fi Hub Black (WFHB)</td>
                <td style={styles.td}>Wi-Fi 5</td>
              </tr>
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
        {/* Use styles.list/listItem, remove margin on last list */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>10 Second Level Support agents...</li>
          <li style={styles.listItem}>1-2 week timeframe...</li>
          <li style={styles.listItem}>Target of 150 uses...</li>
          <li style={styles.listItem}>Feedback form completion mandatory...</li>
          <li style={styles.listItem}>30-minute interview with RouteThis...</li>
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Phase 2: Call Center Testing</h2>
        {/* Use styles.list/listItem, remove margin on last list */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            15-20 Call Center agents in South Africa...
          </li>
          <li style={styles.listItem}>30-day timeframe...</li>
          <li style={styles.listItem}>
            Integration into call center workflow...
          </li>
          <li style={styles.listItem}>
            Focus on quantitative success metrics...
          </li>
          <li style={styles.listItem}>Weekly metrics reporting...</li>
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Success Metrics</h2>
        <div>
          {" "}
          {/* Simple div wrapper now */}
          {/* Use styles.heading3 */}
          <h3 style={styles.heading3}>Key Metrics Tracked</h3>
          {/* Use styles.list/listItem/strong, remove margin on last list */}
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
