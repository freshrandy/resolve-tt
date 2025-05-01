import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaSitemap,
  FaNetworkWired,
  FaTools,
  FaClipboardList,
  // Remove FaUserHeadset as it doesn't exist
  FaHeadset, // Use FaHeadset instead if you need a headset icon
  FaRoute,
  FaPhoneAlt,
  FaEye,
  FaWifi,
  FaServer,
  FaExchangeAlt,
  FaFileAlt,
  FaLaptopCode,
  FaInfoCircle,
} from "react-icons/fa";

const SMCWorkflowContent = ({ styles }) => {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    preScan: true,
    duringCall: true,
    postCall: true,
    specialCases: true,
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

  return (
    <div>
      {/* Introduction Card */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        <h2 style={styles.cardTitle}>
          <FaSitemap
            style={{ marginRight: "8px", color: styles.colors?.primary }}
          />
          SMC Workflow Overview - IN PROGRESS
        </h2>
        <p style={styles.paragraph}>
          This section provides a workflow guide for Service Management Center
          (SMC) agents participating in the Phase 1 trial of RouteThis Resolve.
        </p>
        {/* Placeholder for workflow diagram - to be populated */}
        <div
          style={{
            border: `1px dashed ${styles.colors?.cloudGrey || "#ccc"}`,
            borderRadius: "8px",
            padding: "24px",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          <FaInfoCircle
            style={{
              fontSize: "2rem",
              color: styles.colors?.ash,
              marginBottom: "16px",
            }}
          />
          <p style={{ margin: 0, color: styles.colors?.ash }}>
            Workflow diagram to be populated
          </p>
        </div>
      </motion.div>

      {/* Pre-Scan Phase */}
      <motion.div
        custom={1}
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
          onClick={() => toggleSection("preScan")}
        >
          <h2 style={styles.cardTitle}>
            <FaClipboardList
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Pre-Contact Phase
          </h2>
          {expandedSections.preScan ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.preScan && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              The pre-contact phase content will be populated here, covering:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Case receipt and review</li>
              <li style={styles.listItem}>Initial technical investigation</li>
              <li style={styles.listItem}>Pre-contact strategy planning</li>
              <li style={styles.listItem}>
                Decision criteria for using Resolve
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* During Call Phase */}
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
          onClick={() => toggleSection("duringCall")}
        >
          <h2 style={styles.cardTitle}>
            <FaPhoneAlt
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Customer Contact Phase
          </h2>
          {expandedSections.duringCall ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.duringCall && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              The customer contact phase content will be populated here,
              covering:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Customer engagement</li>
              <li style={styles.listItem}>RouteThis Resolve implementation</li>
              <li style={styles.listItem}>Diagnostics analysis</li>
              <li style={styles.listItem}>Visual diagnostics</li>
              <li style={styles.listItem}>Coverage analysis</li>
              <li style={styles.listItem}>Router configuration</li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Resolution Phase */}
      <motion.div
        custom={3}
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
          onClick={() => toggleSection("postCall")}
        >
          <h2 style={styles.cardTitle}>
            <FaTools
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Resolution Phase
          </h2>
          {expandedSections.postCall ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.postCall && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              The resolution phase content will be populated here, covering:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Implementing fixes</li>
              <li style={styles.listItem}>Next steps determination</li>
              <li style={styles.listItem}>Documentation & feedback</li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Special Cases */}
      <motion.div
        custom={4}
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
          onClick={() => toggleSection("specialCases")}
        >
          <h2 style={styles.cardTitle}>
            <FaRoute
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Router-Specific & Special Case Workflows
          </h2>
          {expandedSections.specialCases ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.specialCases && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              The special cases content will be populated here, covering:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Router-specific workflows</li>
              <li style={styles.listItem}>Shell Energy acquired customers</li>
              <li style={styles.listItem}>Intermittent issues</li>
              <li style={styles.listItem}>Multi-device households</li>
            </ul>
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

export default SMCWorkflowContent;
