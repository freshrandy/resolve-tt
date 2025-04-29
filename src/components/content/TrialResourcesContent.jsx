import React from "react";

const TrialResourcesContent = ({ styles }) => {
  // Define router data
  const routers = [
    {
      vendor: "Sagemcom",
      model: "FAST5364",
      name: "Wi-Fi Hub (WFH)",
      wan: "1Gbps",
      wifi: "Wi-Fi 5",
    },
    {
      vendor: "Huawei",
      model: "DG8041W",
      name: "Wi-Fi Hub Black (WFHB)",
      wan: "1Gbps",
      wifi: "Wi-Fi 5",
    },
    {
      vendor: "Sagemcom",
      model: "FAST5464",
      name: "Wi-Fi Hub 2 (WFH2)",
      wan: "1Gbps",
      wifi: "Wi-Fi 5",
    },
    {
      vendor: "eero",
      model: "eero 6",
      name: "eero 6",
      wan: "1Gbps",
      wifi: "Wi-Fi 6",
    },
    {
      vendor: "Huawei",
      model: "HG633",
      name: "HG633",
      wan: "1Gbps",
      wifi: "Wi-Fi 5",
    },
    {
      vendor: "eero",
      model: "eero Pro 6",
      name: "eero Pro 6",
      wan: "1Gbps",
      wifi: "Wi-Fi 6",
    },
    {
      vendor: "D-Link",
      model: "DSL-3782",
      name: "DSL-3782",
      wan: "1Gbps",
      wifi: "Wi-Fi 5",
    },
    {
      vendor: "Sagemcom",
      model: "F5359",
      name: "Wi-Fi Hub 3 (WFH3)",
      wan: "1Gbps",
      wifi: "Wi-Fi 6",
    },
  ];

  return (
    <div>
      {/* Router Portfolio Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>TalkTalk Router Portfolio</h2>
        <p style={styles.paragraph}>
          Understanding TalkTalk's router portfolio is essential for effective
          troubleshooting:
        </p>
        {/* Use styles.tableContainer */}
        <div style={styles.tableContainer}>
          {/* Use styles.table, styles.th, styles.td */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Vendor</th>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>TalkTalk friendly name</th>
                <th style={styles.th}>WAN port</th>
                <th style={styles.th}>Wi-Fi standard</th>
              </tr>
            </thead>
            <tbody>
              {routers.map((router, index) => (
                <tr key={index}>
                  <td style={styles.td}>{router.vendor}</td>
                  <td style={styles.td}>{router.model}</td>
                  <td style={styles.td}>{router.name}</td>
                  <td style={styles.td}>{router.wan}</td>
                  <td style={styles.td}>{router.wifi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={{ ...styles.heading3, marginTop: "16px" }}>
          Router Deployment Scenarios
        </h3>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            eero routers are only offered on FTTP plans (not FTTC or MPF)
          </li>
          <li style={styles.listItem}>
            Some customers may have double NAT setups if configured incorrectly
          </li>
          <li style={styles.listItem}>
            Shell Energy acquired customers (500,000+) have unsupported devices
          </li>
          <li style={styles.listItem}>
            Resolve will help identify when customers are using their own
            routers/mesh systems
          </li>
        </ul>
      </div>

      {/* Phase 1 Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Phase 1: SMC Testing Details</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Participants:</strong> 10 Second Level
            Support agents in UK
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Duration:</strong> 1-2 weeks
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Target:</strong> 150 uses across all
            tools
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Location:</strong> UK-based agents
            (mix of office and remote)
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Training:</strong> 60-90 minute
            session via Teams
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Support:</strong> Email support via
            john@routethis.com
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Reporting:</strong> Daily report
            showing usage and feedback
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Success Measurement:</strong>{" "}
            Qualitative feedback via forms and interviews
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Decision Point:</strong> TalkTalk will
            use feedback to determine if Phase 2 proceeds
          </li>
        </ul>
        <h3 style={styles.heading3}>SMC Agent Workflow</h3>
        <ol
          style={{
            ...styles.list,
            listStyle: "decimal",
            paddingLeft: "20px",
            marginBottom: 0,
          }}
        >
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Review escalated ticket and verify no hard network fault
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Perform standard line tests through Pathfinder
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Contact customer if no hard fault is found
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Introduce Resolve as part of troubleshooting
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Guide customer through app installation and scanning
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Follow fix-it workflows and use appropriate tools
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Document customer key and actions in MyDesk
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Complete feedback form after each use
          </li>
        </ol>
      </div>

      {/* Phase 2 Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Phase 2: Call Center Testing Details</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Participants:</strong> 15-20 Call
            Center agents in South Africa
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Duration:</strong> 30 days
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Location:</strong> South Africa-based
            agents
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Training:</strong> 60-90 minute
            sessions via Teams
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Support:</strong> Email support via
            john@routethis.com
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Reporting:</strong> Weekly metrics
            against baseline
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Data Export:</strong> Daily export of
            agent activity for metrics tracking
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Success Measurement:</strong>{" "}
            Quantitative and qualitative metrics
          </li>
        </ul>
        <h3 style={styles.heading3}>Call Center Agent Workflow</h3>
        <ol
          style={{
            ...styles.list,
            listStyle: "decimal",
            paddingLeft: "20px",
            marginBottom: 0,
          }}
        >
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Authenticate customer and understand their issue
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Perform standard line tests through Pathfinder
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            If WiFi-related issue is suspected, introduce Resolve
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Guide customer through app installation and scanning
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Follow fix-it workflows and use appropriate tools
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Document ticket ID, customer key, and actions
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Close with appropriate next steps or resolution
          </li>
        </ol>
      </div>

      {/* Success Metrics Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Success Metrics In Detail</h2>
        <h3 style={styles.heading3}>Quantitative Metrics</h3>
        <ol
          style={{ ...styles.list, listStyle: "decimal", paddingLeft: "20px" }}
        >
          <li style={{ ...styles.listItem, marginBottom: "12px" }}>
            <strong style={styles.strong}>Repeat Call In Rate</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
              }}
            >
              <li style={styles.listItem}>
                Definition: Number of repeat contacts for the same subscriber
                within a time-bound window (7 days to one month) divided by the
                total number of call-ins
              </li>
              <li style={styles.listItem}>
                Measurement: Metric reported by TalkTalk, with RouteThis case
                IDs provided daily
              </li>
              <li style={styles.listItem}>
                Success: Lower rate for WiFi-related tickets using Resolve vs.
                pre-trial period
              </li>
            </ul>
          </li>
          <li style={{ ...styles.listItem, marginBottom: "12px" }}>
            <strong style={styles.strong}>Truck Roll Rate</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
              }}
            >
              <li style={styles.listItem}>
                Definition: Number of technician dispatches divided by total
                inbound calls
              </li>
              <li style={styles.listItem}>
                Measurement: Metric reported by TalkTalk, with RouteThis case
                IDs provided daily
              </li>
              <li style={styles.listItem}>
                Success: Lower truck roll rate for agents using Resolve vs.
                pre-trial period
              </li>
            </ul>
          </li>
          <li style={{ ...styles.listItem, marginBottom: "12px" }}>
            <strong style={styles.strong}>CPE Replacement Rate</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
              }}
            >
              <li style={styles.listItem}>
                Definition: Number of equipment replacements divided by total
                inbound calls
              </li>
              <li style={styles.listItem}>
                Measurement: Metric reported by TalkTalk, with RouteThis case
                IDs provided daily
              </li>
              <li style={styles.listItem}>
                Success: Lower rate of CPE replacement for agents using Resolve
                vs. pre-trial period
              </li>
            </ul>
          </li>
          <li style={{ ...styles.listItem, marginBottom: "12px" }}>
            <strong style={styles.strong}>NPS</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
              }}
            >
              <li style={styles.listItem}>
                Definition: Average Net Promoter Score
              </li>
              <li style={styles.listItem}>
                Measurement: Metric reported by TalkTalk and derived from
                subscriber survey feedback
              </li>
              <li style={styles.listItem}>
                Success: Higher NPS for WiFi-related tickets using Resolve vs.
                pre-trial period
              </li>
            </ul>
          </li>
          <li style={{ ...styles.listItem, marginBottom: "12px" }}>
            <strong style={styles.strong}>AHT</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
              }}
            >
              <li style={styles.listItem}>
                Definition: Total handle time of subscriber call
              </li>
              <li style={styles.listItem}>
                Measurement: Metric reported by TalkTalk, with RouteThis case
                IDs provided daily
              </li>
              <li style={styles.listItem}>
                Success: May increase initially during learning period but
                should improve over time
              </li>
            </ul>
          </li>
        </ol>
        <h3 style={styles.heading3}>Qualitative Metrics</h3>
        <ol
          start="6"
          style={{
            ...styles.list,
            listStyle: "decimal",
            paddingLeft: "20px",
            marginBottom: 0,
          }}
        >
          <li style={{ ...styles.listItem, marginBottom: "0px" }}>
            <strong style={styles.strong}>Agent Feedback</strong>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginTop: "4px",
                listStyle: "circle",
                marginBottom: 0,
              }}
            >
              <li style={styles.listItem}>
                Definition: Agent experience with Resolve platform
              </li>
              <li style={styles.listItem}>
                Measurement: Interviews and feedback collection
              </li>
              <li style={styles.listItem}>
                Success: Positive sentiment regarding use of Resolve for
                WiFi-related tickets
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Data Requirements Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Data Requirements</h2>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Ticket ID Field:</strong> Must be
            populated in Resolve for data matching
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Daily Export:</strong> RouteThis will
            provide TalkTalk with an export of agent activity
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Data Matching:</strong> Information
            will be used to compare metrics with and without Resolve
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Weekly Reporting:</strong> TalkTalk
            will provide weekly summary of metrics against baseline
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrialResourcesContent;
