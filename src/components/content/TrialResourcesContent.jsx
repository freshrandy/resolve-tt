import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaRoute, // Router Portfolio
  FaInfoCircle, // Deployment Scenarios Info
  FaDatabase, // Data Requirements
  FaTicketAlt, // Ticket ID
  FaFileExport, // Daily Export
  FaLink, // Data Matching
  FaChartLine, // Weekly Reporting
} from "react-icons/fa"; // Added necessary icons

const TrialResourcesContent = ({ styles }) => {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    routerPortfolio: true,
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

  // Helper for list item styling
  const renderListItem = (icon, text, isStrong = false) => (
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
        {/* Collapsible Header */}
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
        {/* Collapsible Content */}
        {expandedSections.routerPortfolio && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              Understanding TalkTalk's current router portfolio is essential for
              effective troubleshooting using Resolve:
            </p>
            {/* Router Table */}
            <div style={{ ...styles.tableContainer, marginBottom: "24px" }}>
              {" "}
              {/* Added margin bottom */}
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
            {/* Deployment Scenarios */}
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

      {/* REMOVED Phase 1 Card */}

      {/* REMOVED Phase 2 Card */}

      {/* REMOVED Success Metrics Card */}

      {/* Data Requirements Card */}
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
        {/* Collapsible Content */}
        {expandedSections.dataRequirements && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
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
              {renderListItem(
                <FaTicketAlt />,
                "Ticket ID Field: Must be populated in the Resolve dashboard session notes for every Phase 2 interaction. This is crucial for matching usage data to KPIs.",
                true // Make label strong
              )}
              {renderListItem(
                <FaFileExport />,
                "Daily Export: RouteThis will provide TalkTalk with a daily export of agent activity including populated Ticket IDs.",
                true
              )}
              {renderListItem(
                <FaLink />,
                "Data Matching: TalkTalk will use the exported Ticket IDs to correlate Resolve usage with internal metrics (Repeat Calls, Truck Rolls, CPE, NPS, AHT).",
                true
              )}
              {renderListItem(
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
