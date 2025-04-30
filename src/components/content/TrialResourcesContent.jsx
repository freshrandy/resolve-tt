import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaRoute, // Router Portfolio
  FaInfoCircle, // Deployment Scenarios Info, Notes
  FaDatabase, // Data Requirements
  FaTicketAlt, // Ticket ID
  FaFileExport, // Daily Export
  FaLink, // Data Matching
  FaChartLine, // Weekly Reporting
  FaLaptopHouse, // VDI Compatibility title
  FaVideo, // Video quality/functionality
  FaNetworkWired, // Connection speed, VPN
  FaCheckCircle, // Testing results success
  FaEdge, // Edge Browser (might need Brand icon pack if using official)
  FaShieldAlt, // VPN Alt
  FaPlug, // Extension required
} from "react-icons/fa"; // Added VDI related icons

const TrialResourcesContent = ({ styles }) => {
  // State for expanded sections - Added vdiCompatibility
  const [expandedSections, setExpandedSections] = useState({
    routerPortfolio: true,
    vdiCompatibility: true, // Added new section state
    dataRequirements: true,
  });

  // Toggle helper
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Router data remains the same
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

  // Helper for general list item styling
  const renderListItem = (text) => (
    <li style={{ ...styles.listItem, marginBottom: "6px" }}>{text}</li>
  );

  // Helper for icon list item styling
  const renderIconListItem = (icon, text, isStrong = false) => (
    <li
      style={{
        ...styles.listItem,
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      {React.cloneElement(icon, {
        style: {
          marginTop: "4px",
          color: styles.colors?.electricBlue || "#4338CA",
          flexShrink: 0,
        },
      })}
      <span>
        {isStrong ? (
          <strong style={styles.strong}>{text.split(":")[0]}:</strong>
        ) : (
          ""
        )}{" "}
        {text.split(":").slice(1).join(":").trim()}
      </span>
    </li>
  );

  return (
    <div>
      {/* Router Portfolio Card */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("routerPortfolio")}
        >
          <h2 style={styles.cardTitle}>
            <FaRoute
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            TalkTalk Router Portfolio
          </h2>
          {expandedSections.routerPortfolio ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.routerPortfolio && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            {/* Content remains the same */}
            <p style={styles.paragraph}>
              Understanding TalkTalk's current router portfolio is essential for
              effective troubleshooting using Resolve:
            </p>
            <div style={{ ...styles.tableContainer, marginBottom: "24px" }}>
              {" "}
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Vendor</th>
                    <th style={styles.th}>Model</th>
                    <th style={styles.th}>TalkTalk Name</th>
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
            <h3
              style={{
                ...styles.heading3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaInfoCircle style={{ color: styles.colors?.electricBlue }} />{" "}
              Router Deployment Notes
            </h3>
            <ul style={{ ...styles.list, marginBottom: 0 }}>
              <li style={styles.listItem}>
                <strong style={styles.strong}>eero Routers:</strong> Primarily
                offered on FTTP plans (check customer records).
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Double NAT:</strong> Some
                customers might have incorrect setups causing issues; Resolve
                can help identify this.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>BYOD/Mesh:</strong> Resolve's
                network scan helps identify non-TalkTalk routers or mesh systems
                in use.
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* NEW VDI Compatibility Card */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Collapsible Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("vdiCompatibility")}
        >
          <h2 style={styles.cardTitle}>
            <FaLaptopHouse
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            VDI Compatibility Information
          </h2>
          {expandedSections.vdiCompatibility ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {/* Collapsible Content */}
        {expandedSections.vdiCompatibility && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              Testing has confirmed that the Resolve video feature works
              reliably through TalkTalk's VDI environment when the{" "}
              <strong style={styles.strong}>
                RouteThis Proxy Enhancer extension is installed
              </strong>
              .
            </p>
            <h3
              style={{
                ...styles.heading3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
              }}
            >
              <FaInfoCircle style={{ color: styles.colors?.electricBlue }} />{" "}
              Key Considerations:
            </h3>
            <ul style={{ ...styles.list, marginBottom: "24px" }}>
              {renderListItem(
                "Video quality may be slightly pixelated but functional for troubleshooting."
              )}
              {renderListItem(
                "Initial connection may have slightly longer round trip time but should stabilize."
              )}
              {renderListItem(
                "Video restarts may trigger temporary 'poor connection' warnings."
              )}
              {renderListItem(
                "Works reliably on both home and office VPN connections."
              )}
              {renderListItem(
                "Minimum recommended agent internet speed: 15-20 Mbps."
              )}
            </ul>

            {/* VDI Testing Results Sub-section */}
            <div
              style={{
                padding: "16px",
                backgroundColor: `${styles.colors?.cloudGrey}40`,
                borderRadius: "8px",
                borderLeft: `3px solid ${
                  styles.colors?.electricBlue || "#4338CA"
                }`,
              }}
            >
              <h3
                style={{
                  ...styles.heading3,
                  marginTop: 0,
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaCheckCircle
                  style={{ color: styles.colors?.success || "#10B981" }}
                />{" "}
                VDI Testing Results Summary
              </h3>
              <ul
                style={{
                  ...styles.list,
                  listStyle: "none",
                  paddingLeft: 0,
                  marginBottom: 0,
                }}
              >
                {/* Using renderIconListItem for structured results */}
                {renderIconListItem(
                  <FaEdge />,
                  `Edge browser version tested: 135.0.3179.73 (or newer recommended)`
                )}
                {renderIconListItem(
                  <FaShieldAlt />,
                  `VPN Tested: Ivanti Secure Access (compatible with new TalkTalk VPN)`
                )}
                {renderIconListItem(
                  <FaVideo />,
                  `Video Functionality: Tested successfully in home & office environments`
                )}
                {renderIconListItem(
                  <FaPlug />,
                  `Extension Requirement: RouteThis Proxy Enhancer is mandatory for optimal video performance.`
                )}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Data Requirements Card */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("dataRequirements")}
        >
          <h2 style={styles.cardTitle}>
            <FaDatabase
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Data Requirements for Trial Success
          </h2>
          {expandedSections.dataRequirements ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.dataRequirements && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            {/* Content remains the same */}
            <p style={styles.paragraph}>
              Accurate data capture is vital for measuring the trial's impact.
              Please ensure the following:
            </p>
            <ul
              style={{
                ...styles.list,
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: 0,
              }}
            >
              {renderIconListItem(
                <FaTicketAlt />,
                "Ticket ID Field: Must be populated in the Resolve dashboard session notes for every Phase 2 interaction. This is crucial for matching usage data to KPIs.",
                true
              )}
              {renderIconListItem(
                <FaFileExport />,
                "Daily Export: RouteThis will provide TalkTalk with a daily export of agent activity including populated Ticket IDs.",
                true
              )}
              {renderIconListItem(
                <FaLink />,
                "Data Matching: TalkTalk will use the exported Ticket IDs to correlate Resolve usage with internal metrics (Repeat Calls, Truck Rolls, CPE, NPS, AHT).",
                true
              )}
              {renderIconListItem(
                <FaChartLine />,
                "Weekly Reporting: TalkTalk project team will provide weekly summaries comparing metrics for Resolve sessions against baseline data.",
                true
              )}
            </ul>
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                backgroundColor: `${styles.colors?.warning}10`,
                borderRadius: "6px",
                borderLeft: `3px solid ${styles.colors?.warning}`,
              }}
            >
              <FaInfoCircle
                style={{
                  color: styles.colors?.warning,
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  ...styles.paragraph,
                  marginBottom: 0,
                  fontSize: "0.9rem",
                }}
              >
                <strong style={styles.strong}>Importance:</strong> Without
                consistent Ticket ID entry in Resolve during Phase 2, we cannot
                accurately measure the tool's impact on business objectives.
                Please make this a priority.
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}
      </style>
    </div>
  );
};

export default TrialResourcesContent;
