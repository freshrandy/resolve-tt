import React, { useState } from "react";
import { motion } from "framer-motion";
// REMOVED Mermaid imports
import {
  FaChevronDown,
  FaChevronRight,
  FaSitemap, // Workflow Overview
  FaClipboardList, // Pre-Contact, Documentation Req Title, Doc Issues
  FaClipboardCheck, // Feedback Form Req Title
  FaPhoneAlt, // Customer Contact
  FaTools, // Resolution Phase, Appendix Tools
  FaRoute, // Router/Special Cases, Resolution Paths Title
  // FaProjectDiagram, // REMOVED
  FaFileInvoice, // Case Receipt
  FaSearch, // Initial Investigation
  FaTasks, // Pre-Contact Strategy / Key Activities
  FaUsersCog, // Customer Engagement / SMC Role
  FaMobileAlt, // Resolve Implementation
  FaChartPie, // Diagnostics Analysis
  FaEye, // Visual Diagnostics
  FaBroadcastTower, // Coverage Analysis, Shell Acquisition
  FaServer, // Router Configuration
  FaCheckCircle, // Implementing Fixes / Decision Point, Testing Results
  FaArrowRight, // Next Steps
  FaEdit, // Documentation & Feedback Title, MyDesk Docs Title
  FaLaptopCode, // Router-Specific Workflows Title
  FaExclamationCircle, // Special Cases Title
  FaInfoCircle, // Notes / Outstanding Items
  FaTable, // Appendix Table
  FaQuestionCircle, // Appendix Question Title
  FaFileAlt, // Example MyDesk Docs Title
  FaUserTie, // Agent Interviews
  FaLaptopHouse, // Eero/BYOD Router Notes
  // FaHeadset, // Removed if not used elsewhere
  FaUsers, // Multi-device Households
  FaExclamationTriangle, // Intermittent Issues
  FaDatabase, // Data Requirements
  FaTicketAlt, // Ticket ID
  FaFileExport, // Daily Export
  FaLink, // Data Matching
  FaChartLine, // Weekly Reporting
  FaEyeSlash, // Visibility issue
  FaSignOutAlt, // Churn
  FaWrench, // Truck roll cost
  FaLock, // Permissions
  FaUserPlus, // Add User
  FaLayerGroup, // Group Mgmt
  FaUserShield, // User Admin Title Alt
  FaHeadset, // Real-Time Support
  FaChalkboardTeacher, // Coaching, Practice
  FaLightbulb, // Barrier examples
  FaCommentDots, // Overcoming Barriers
  FaChartBar, // Monitoring Progress
  FaBullseye, // Strategies Subsections
} from "react-icons/fa";

const SMCWorkflowContent = ({ styles }) => {
  // State for expanded sections, default most to visible
  const [expandedSections, setExpandedSections] = useState({
    workflowOverview: true,
    preContact: true,
    contactPhase: true,
    resolutionPhase: true,
    routerWorkflows: true,
    specialCases: true,
    documentation: true,
    outstanding: false,
    appendix: false,
  });

  // Toggle helper
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Helper functions
  const renderListItem = (text, indent = false) => (
    <li
      style={{
        ...styles.listItem,
        paddingLeft: indent ? "20px" : "0",
        marginBottom: "6px",
      }}
    >
      {text}
    </li>
  );
  const renderSubListItem = (label, text) => (
    <li style={{ ...styles.listItem, marginBottom: "6px" }}>
      <strong style={styles.strong}>{label}:</strong> {text}
    </li>
  );
  const renderDecisionRow = (useCase, dontUseCase) => (
    <tr>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        ✅ {useCase}
      </td>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        ❌ {dontUseCase}
      </td>
    </tr>
  );
  const renderAppendixRow = (col1, col2, col3, col4) => (
    <tr>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        {col1}
      </td>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        {col2}
      </td>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        {col3}
      </td>
      <td
        style={{
          ...styles.td,
          border:
            styles.td?.border ??
            `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
        }}
      >
        {col4}
      </td>
    </tr>
  );
  const codeBlockStyle = {
    backgroundColor: styles.colors?.ash ? `${styles.colors.ash}10` : "#F3F4F6",
    padding: "12px",
    borderRadius: "6px",
    fontFamily: "monospace",
    fontSize: "0.85rem",
    color: styles.colors?.ash || "#374151",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    marginTop: "8px",
    marginBottom: "16px",
    border: `1px solid ${styles.colors?.cloudGrey || "#E5E7EB"}`,
  };

  // REMOVED Mermaid useEffect hook

  // Text-based workflow
  const textWorkflow = `
[PROCESS] 📥 Case Received in SMC Queue
    -> [PROCESS] 📋 Review Case Notes/History
        -> [PROCESS] 🔍 Perform Line Tests via Pathfinder
            -> [DECISION] ❓ Line Fault Detected?
                --> Yes: [STANDARD] ⚠️ Proceed with Standard Line Fault Process (END)
                --> No:  [DECISION] ❓ In-Home WiFi Issue Suspected?
                    --> Yes: [PROCESS] 📞 Initiate Contact with Customer
                        -> [ROUTETHIS] 🚀 Introduce RouteThis Resolve
                            -> [ROUTETHIS] 📱 Guide Customer Through App Setup
                                -> [ROUTETHIS] 📊 Run Network Scan
                                    -> [ROUTETHIS] 🔎 Analyze Results & Follow Fix-It Flows
                                        -> [DECISION] ❓ Issue Identified?
                                            --> Yes: [ROUTETHIS] 🛠️ Guide Customer Through Fixes
                                                -> [DECISION] ❓ Issue Resolved?
                                                    --> Yes: [DOCUMENTATION] 📝 Document Findings & Resolution (END)
                                                    --> No:  [ROUTETHIS] 🧰 Use Additional Resolve Tools
                                                        -> [DECISION] ❓ Issue Resolved?
                                                            --> Yes: [DOCUMENTATION] 📝 Document Findings & Resolution (END)
                                                            --> No:  [STANDARD] ⚠️ Escalate or Schedule Equip/Engineer Visit
                                                                -> [DOCUMENTATION] 📝 Document Findings & Resolution (END)
                                            --> No:  [PROCESS] 🔬 Run Additional Tests (Deep Line/Manual)
                                                -> [DOCUMENTATION] 📝 Document Findings & Resolution (END)
                    --> No:  [STANDARD] ⚙️ Proceed with Standard Non-WiFi Troubleshooting (END)
  `;

  return (
    <div>
      {/* Introduction Text */}
      <div
        style={{
          marginBottom: "16px",
          padding: "16px",
          backgroundColor: `${styles.colors?.primary}10`,
          borderRadius: "8px",
          borderLeft: `4px solid ${styles.colors?.primary}`,
        }}
      >
        <h1 style={{ ...styles.cardTitle, marginTop: 0, fontSize: "1.5rem" }}>
          SMC Agent Workflow Guide: RouteThis Resolve
        </h1>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          This guide outlines how Service Management Center (SMC) agents
          integrate RouteThis Resolve into existing processes during the Phase 1
          trial...
        </p>
      </div>

      {/* Workflow Overview Card */}
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
          onClick={() => toggleSection("workflowOverview")}
        >
          <h2 style={styles.cardTitle}>
            <FaSitemap
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Workflow Overview
          </h2>
          {expandedSections.workflowOverview ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.workflowOverview && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              The following represents the standard SMC case flow with
              integrated decision points for using RouteThis Resolve. Details
              for each step are in the sections below.
            </p>
            {/* Text-based Workflow Diagram */}
            <div style={codeBlockStyle}>{textWorkflow}</div>
          </div>
        )}
      </motion.div>

      {/* Pre-Contact Phase Card */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("preContact")}
        >
          <h2 style={styles.cardTitle}>
            <FaClipboardList
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Pre-Contact Phase
          </h2>
          {expandedSections.preContact ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.preContact && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaFileInvoice style={{ color: styles.colors?.electricBlue }} />{" "}
                1. Case Receipt & Review
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Review escalated ticket notes from first-line agent."
                )}
                {renderListItem(
                  "Note specific WiFi symptoms, patterns, and customer descriptions."
                )}
                {renderListItem(
                  "Check previous case history for recurring WiFi issues."
                )}
                {renderListItem("Tools: MyDesk, Trio")}
                {renderListItem(
                  "Decision: Initial issue category (Connectivity? Speed? Coverage?)."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaSearch style={{ color: styles.colors?.electricBlue }} /> 2.
                Initial Technical Investigation
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Run appropriate line tests: FTTP (~30s), FTTC (~2m), MPF (~5m)."
                )}
                {renderListItem(
                  "Check service index, historical line stability, router model/firmware/uptime."
                )}
                {renderListItem(
                  "Tools: Pathfinder, ASSIA (if applicable), Eero Dashboard (if applicable)."
                )}
                {renderListItem(
                  "Decision: Does initial testing reveal a line/infrastructure fault?"
                )}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaTasks style={{ color: styles.colors?.electricBlue }} /> 3.
                Pre-Contact Strategy & Decision
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Determine if RouteThis Resolve is appropriate based on line tests and symptoms."
                )}
                {renderListItem("Prepare specific questions for the customer.")}
                {renderListItem("Prepare introduction script for Resolve.")}
                {renderListItem(
                  "Decision Point: Will Resolve add diagnostic value?"
                )}
              </ul>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                Decision Criteria for Using Resolve
              </h4>
              <div style={{ ...styles.tableContainer, marginBottom: 0 }}>
                <table style={{ ...styles.table, tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.th, width: "50%" }}>
                        ✅ Use Resolve When...
                      </th>
                      <th style={{ ...styles.th, width: "50%" }}>
                        ❌ Don't Use Resolve When...
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderDecisionRow(
                      "Line tests show no external fault",
                      "Clear line/infrastructure fault detected"
                    )}
                    {renderDecisionRow(
                      "Customer reports intermittent connectivity",
                      "Service is completely down due to outage"
                    )}
                    {renderDecisionRow(
                      "Speed issues occur on wireless devices",
                      "Issue is strictly billing/account related"
                    )}
                    {renderDecisionRow(
                      "Coverage problems / dead zones reported",
                      "Customer uses wired-only equipment"
                    )}
                    {renderDecisionRow(
                      "FTTP/ONT light status needs verification",
                      "Thorough WiFi diagnostics already done"
                    )}
                    {renderDecisionRow(
                      "Suspected router misconfiguration",
                      "Customer cannot/refuses mobile apps"
                    )}
                    {renderDecisionRow(
                      "Some devices work, others don't",
                      "Issue is with a specific content provider"
                    )}
                    {renderDecisionRow(
                      "Multiple previous attempts failed",
                      "Issue not dependent on home WiFi"
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Customer Contact Phase Card */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("contactPhase")}
        >
          <h2 style={styles.cardTitle}>
            <FaPhoneAlt
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Customer Contact Phase
          </h2>
          {expandedSections.contactPhase ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.contactPhase && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaUsersCog style={{ color: styles.colors?.electricBlue }} /> 4.
                Customer Engagement & Introduction
              </h3>
              <ul style={styles.list}>
                {renderListItem("Introduce yourself as SMC specialist.")}
                {renderListItem("Confirm customer identity and issue summary.")}
                {renderListItem("Explain previous checks (line tests clear).")}
                {renderListItem(
                  "Introduce need for advanced in-home diagnostics via Resolve."
                )}
              </ul>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                SMC-Specific Introduction Script
              </h4>
              <div style={codeBlockStyle}>
                "Hello, I'm [Name] from the TalkTalk Service Management
                Center... I've already checked your line... suggests the issue
                may be within your home WiFi environment.
                <br />
                <br />
                To help diagnose this properly... I'd like to use our advanced
                diagnostic system called Resolve... use your mobile phone to
                scan your home network... gives us much more detailed technical
                information... without accessing any personal data.
                <br />
                <br />
                As a specialist team... helpful for complex issues like yours.
                Would it be okay if I send you a text message... start this
                process? It only takes about 2 minutes..."
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaMobileAlt style={{ color: styles.colors?.electricBlue }} />{" "}
                5. RouteThis Resolve Implementation
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Send text link via Resolve dashboard (Click 'Scan for New Issues')."
                )}
                {renderListItem("Guide customer to stand near router/ONT.")}
                {renderListItem(
                  "Walk through app permissions (Location is needed for WiFi scan)."
                )}
                {renderListItem(
                  "Help initiate Network Scan; advise not to minimize app."
                )}
                {renderListItem(
                  "Use scan time (~2 min) to gather more context about the issue."
                )}
                {renderListItem("Decision: Does scan complete successfully?")}
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaChartPie style={{ color: styles.colors?.electricBlue }} /> 6.
                Diagnostics Analysis
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Review scan results, prioritizing high-impact issues first."
                )}
                {renderListItem("Explain key findings simply to the customer.")}
                {renderListItem("Correlate findings with reported symptoms.")}
                {renderListItem(
                  "Select the most relevant fix-it workflow(s) to follow."
                )}
                {renderListItem(
                  "Decision: Is additional visual diagnostic needed?"
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaEye style={{ color: styles.colors?.electricBlue }} /> 7.
                Visual Diagnostics (Live View - When Required)
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Initiate Photo or Video tool if physical check needed."
                )}
                {renderListItem(
                  "Guide customer on what to show (ONT lights, cable ports, router lights)."
                )}
                {renderListItem(
                  "Use annotation tools to highlight points of interest."
                )}
                {renderListItem(
                  "Save critical images if needed for documentation/escalation."
                )}
                {renderListItem(
                  "Decision: Do visuals confirm suspected issue?"
                )}
              </ul>
              <div
                style={{
                  marginTop: "16px",
                  padding: "16px",
                  backgroundColor: `${styles.colors?.cloudGrey}40`,
                  borderRadius: "8px",
                  borderLeft: `3px solid ${
                    styles.colors?.electricBlue || "#4338CA"
                  }`,
                }}
              >
                <h4
                  style={{
                    ...styles.heading3,
                    fontSize: "1em",
                    marginTop: 0,
                    marginBottom: "12px",
                  }}
                >
                  FTTP-Specific Visual Diagnostic Process:
                </h4>
                <ol
                  style={{
                    ...styles.list,
                    listStyle: "decimal",
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {renderListItem("Show ONT device lights first.")}
                  {renderListItem(
                    "Verify lights: Power (Solid Green), PON (Solid Green), LOS (Off), Internet (Solid/Blinking Green)."
                  )}
                  {renderListItem("Verify fiber cable secure in ONT.")}
                  {renderListItem(
                    "Verify Ethernet cable: ONT port -> Router WAN port."
                  )}
                  {renderListItem("Check Router indicator lights.")}
                  {renderListItem("Inspect any additional network gear.")}
                </ol>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaBroadcastTower
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                8. Coverage Analysis (Dead Spot Detector)
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Use if customer reports poor signal in specific areas."
                )}
                {renderListItem(
                  "Initiate tool; have customer start near router."
                )}
                {renderListItem(
                  "Guide customer walking room-by-room, focusing on problem areas."
                )}
                {renderListItem(
                  "Analyze real-time map and final results (Green/Yellow/Red)."
                )}
                {renderListItem(
                  "Decision: Does coverage require router relocation or suggest extenders?"
                )}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaServer style={{ color: styles.colors?.electricBlue }} /> 9.
                Router Configuration (When Appropriate)
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Use Router Login feature (if supported for model)."
                )}
                {renderListItem(
                  "Verify current settings (WiFi channel, band steering, security)."
                )}
                {renderListItem(
                  "Make necessary adjustments based on scan findings."
                )}
                {renderListItem(
                  "Re-run Speed Test or limited scan to test effectiveness."
                )}
                {renderListItem("Decision: Are config changes sufficient?")}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Resolution Phase Card */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("resolutionPhase")}
        >
          <h2 style={styles.cardTitle}>
            <FaTools
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Resolution Phase
          </h2>
          {expandedSections.resolutionPhase ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.resolutionPhase && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaCheckCircle style={{ color: styles.colors?.electricBlue }} />{" "}
                10. Implementing Fixes & Testing
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Implement fixes identified by Resolve (workflows, manual changes)."
                )}
                {renderListItem(
                  "Guide customer through any necessary physical changes or reboots."
                )}
                {renderListItem(
                  "Re-test using Speed Test or another Network Scan."
                )}
                {renderListItem(
                  "Provide customer education on preventing recurrence."
                )}
                {renderListItem(
                  "Decision: Has the primary issue been resolved?"
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaArrowRight style={{ color: styles.colors?.electricBlue }} />{" "}
                11. Next Steps Determination
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "If issue persists, determine appropriate next action."
                )}
                {renderListItem(
                  "Schedule CPE replacement via standard process if needed."
                )}
                {renderListItem("Arrange engineer visit if required.")}
                {renderListItem(
                  "Clearly set follow-up expectations with the customer."
                )}
                {renderListItem(
                  "Decision: What is the final resolution/escalation path?"
                )}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaEdit style={{ color: styles.colors?.electricBlue }} /> 12.
                Documentation & Feedback (Crucial)
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Document detailed findings and actions in MyDesk notes."
                )}
                {renderListItem(
                  "CRITICAL: Add the RouteThis Customer Key to MyDesk notes."
                )}
                {renderListItem(
                  "CRITICAL: Complete mandatory RouteThis feedback form IMMEDIATELY after the call."
                )}
                {renderListItem(
                  "Record specific tools used and their effectiveness in MyDesk."
                )}
                {renderListItem(
                  "Tag case appropriately per trial guidelines for metrics."
                )}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Router-Specific Workflows Card */}
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("routerWorkflows")}
        >
          <h2 style={styles.cardTitle}>
            <FaLaptopCode
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Router-Specific Workflows
          </h2>
          {expandedSections.routerWorkflows ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.routerWorkflows && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                TalkTalk WiFi Hub / WiFi Hub 2 (Sagemcom)
              </h4>
              <ul style={styles.list}>
                {renderListItem("Most compatible with Router Login feature.")}
                {renderListItem(
                  "Focus: Channel congestion, band steering settings."
                )}
                {renderListItem("Check firmware if router uptime > 30 days.")}
              </ul>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                WiFi Hub Black (Huawei)
              </h4>
              <ul style={styles.list}>
                {renderListItem("Partial Router Login compatibility.")}
                {renderListItem("Focus: Channel settings, band separation.")}
                {renderListItem(
                  "Visual verification via Live View is often helpful."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                Eero Systems
              </h4>
              <ul style={styles.list}>
                {renderListItem(
                  "Limited Router Login; primary management via Eero App."
                )}
                {renderListItem(
                  "Network Scan identifies mesh nodes & connection quality."
                )}
                {renderListItem(
                  "May need to guide customer through Eero App for changes."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                Customer-Owned (BYOD) Routers
              </h4>
              <ul style={{ ...styles.list, marginBottom: 0 }}>
                {renderListItem("Router Login usually unsupported.")}
                {renderListItem("Rely heavily on Network Scan diagnostics.")}
                {renderListItem(
                  "Use Live View to guide customer through their router's admin interface if config changes needed."
                )}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Special Cases Card */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
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
            <FaExclamationCircle
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Special Case Considerations
          </h2>
          {expandedSections.specialCases ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.specialCases && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                Shell Energy Acquired Customers
              </h4>
              <ul style={styles.list}>
                {renderListItem(
                  "Higher likelihood of older/unsupported equipment."
                )}
                {renderListItem(
                  "Pay extra attention to router model identification in scan/Live View."
                )}
                {renderListItem(
                  "May require more detailed explanation of Resolve process."
                )}
                {renderListItem(
                  "Clearly document if equipment replacement is the necessary resolution."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                Intermittent Issues
              </h4>
              <ul style={styles.list}>
                {renderListItem(
                  "Run Network Scan during problem times if possible, or multiple scans."
                )}
                {renderListItem(
                  "Focus on environment scan results (interference, congestion)."
                )}
                {renderListItem(
                  "Utilize customer education features heavily (e.g., channel changing)."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h4
                style={{
                  ...styles.heading3,
                  fontSize: "1em",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                Multi-Device Households
              </h4>
              <ul style={{ ...styles.list, marginBottom: 0 }}>
                {renderListItem(
                  "Analyze 'Connected Devices' section in Network Scan carefully."
                )}
                {renderListItem(
                  "Look for interference patterns or overloaded router."
                )}
                {renderListItem(
                  "Verify network capacity vs. number/type of connected devices."
                )}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Documentation Requirements Card */}
      <motion.div
        custom={6}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("documentation")}
        >
          <h2 style={styles.cardTitle}>
            <FaClipboardList
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Documentation & Feedback Requirements
          </h2>
          {expandedSections.documentation ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.documentation && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaEdit style={{ color: styles.colors?.electricBlue }} />{" "}
                Required MyDesk Documentation
              </h3>
              <ul style={styles.list}>
                {renderSubListItem(
                  "Customer Details",
                  "Name and Account Number."
                )}
                {renderSubListItem(
                  "RouteThis Key",
                  "Paste the Customer Key generated by Resolve."
                )}
                {renderSubListItem(
                  "Router Info",
                  "Model and Firmware Version (if available)."
                )}
                {renderSubListItem(
                  "Tools Used",
                  "List features used (Scan, Live View, etc.)."
                )}
                {renderSubListItem(
                  "Key Findings",
                  "Summarize diagnostics (e.g., 'High congestion', 'Double NAT')."
                )}
                {renderSubListItem(
                  "Actions Taken",
                  "Describe steps based on findings."
                )}
                {renderSubListItem(
                  "Resolution",
                  "Status (Resolved/Escalated) and Next Steps."
                )}
                {renderSubListItem(
                  "Customer Feedback",
                  "Note any comments on using the tool."
                )}
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaClipboardCheck
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                Trial Feedback Form Requirements (Mandatory)
              </h3>
              <ul style={styles.list}>
                {renderListItem(
                  "Complete IMMEDIATELY after each Resolve interaction during Phase 1."
                )}
                {renderListItem("Rate tool effectiveness (1-5 scale).")}
                {renderListItem("Note specific features used.")}
                {renderListItem(
                  "Estimate time saved/added vs. traditional methods."
                )}
                {renderListItem("Report any technical issues encountered.")}
                {renderListItem("Provide suggestions for improvement.")}
              </ul>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaFileAlt style={{ color: styles.colors?.electricBlue }} />{" "}
                Example MyDesk Documentation
              </h3>
              <div
                style={codeBlockStyle}
              >{`CASE: WiFi Connectivity Issues - Multiple Devices\n\nDIAGNOSIS: Used RouteThis Resolve (Customer Key: RH7K)... Network Scan identified:\n- High channel congestion on 2.4GHz band (15 competing networks)\n- Router uptime of 73 days without reboot\n- Double NAT configuration detected...\n\nACTIONS:\n1. Used Live View to verify connections - confirmed correct\n2. Guided customer to remove secondary router...\n3. Rebooted primary TalkTalk router\n4. Changed WiFi channel to less congested (Ch 11)\n5. Ran second scan confirming improvements\n\nRESOLUTION:\nIssue resolved. Customer confirmed all devices connecting... Educated customer...\n\nNOTES:\nCustomer found RouteThis easy to use. Live View helpful in identifying TP-Link causing Double NAT.`}</div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Outstanding Items Card */}
      <motion.div
        custom={7}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("outstanding")}
        >
          <h2 style={styles.cardTitle}>
            <FaInfoCircle
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Outstanding Implementation Items
          </h2>
          {expandedSections.outstanding ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.outstanding && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={{ ...styles.paragraph, fontStyle: "italic" }}>
              The following aspects require further clarification or
              confirmation from TalkTalk project leads:
            </p>
            <ul style={styles.list}>
              <li>
                <strong style={styles.strong}>MyDesk Integration:</strong> Exact
                tagging/categorization, required fields for metrics, any
                specific templates.
              </li>
              <li>
                <strong style={styles.strong}>Technical Environment:</strong>{" "}
                Confirmation of new VPN performance, final browser compatibility
                results.
              </li>
              <li>
                <strong style={styles.strong}>Procedural Approvals:</strong>{" "}
                Confirmation on CPE replacement/engineer visit triggers based
                solely on Resolve.
              </li>
              <li>
                <strong style={styles.strong}>Trial Specifics:</strong> Final
                feedback form URL, expected case volume, specific metric
                targets.
              </li>
              <li>
                <strong style={styles.strong}>Training Gaps:</strong>{" "}
                Confirmation of completion, identification of needed refreshers.
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Appendix Card */}
      <motion.div
        custom={8}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => toggleSection("appendix")}
        >
          <h2 style={styles.cardTitle}>
            <FaTools
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />{" "}
            Appendix: Quick Reference Guide
          </h2>
          {expandedSections.appendix ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.appendix && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaQuestionCircle
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                Resolve Feature Selection Guide
              </h3>
              <div style={styles.tableContainer}>
                <table style={{ ...styles.table, tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Customer Problem
                      </th>
                      <th style={{ ...styles.th, width: "25%" }}>First Tool</th>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Secondary Tools
                      </th>
                      <th style={{ ...styles.th, width: "25%" }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderAppendixRow(
                      '"Internet is slow"',
                      "Network Scan",
                      "Speed Test",
                      "Capture plan speeds"
                    )}
                    {renderAppendixRow(
                      '"WiFi doesn\'t reach..."',
                      "Network Scan",
                      "Dead Spot Detector",
                      "Check barriers"
                    )}
                    {renderAppendixRow(
                      '"Some devices connect..."',
                      "Network Scan",
                      "Live View",
                      "Check MAC filtering"
                    )}
                    {renderAppendixRow(
                      '"Router lights strange"',
                      "Network Scan",
                      "Live View (Video)",
                      "Focus on status lights"
                    )}
                    {renderAppendixRow(
                      '"Connection drops..."',
                      "Network Scan",
                      "Router Login",
                      "Check scheduled reboots"
                    )}
                    {renderAppendixRow(
                      '"New device won\'t connect"',
                      "Network Scan",
                      "Live View",
                      "Verify password entry"
                    )}
                    {renderAppendixRow(
                      '"Router keeps rebooting"',
                      "Network Scan",
                      "Live View",
                      "Check power source"
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaRoute style={{ color: styles.colors?.electricBlue }} />{" "}
                Common Issue Resolution Paths
              </h3>
              <div style={styles.tableContainer}>
                <table style={{ ...styles.table, tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Issue Detected
                      </th>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Primary Action
                      </th>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Fallback Action
                      </th>
                      <th style={{ ...styles.th, width: "25%" }}>
                        Escalation Path
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderAppendixRow(
                      "Channel Congestion",
                      "Change WiFi Channel",
                      "Split 2.4/5GHz",
                      "N/A"
                    )}
                    {renderAppendixRow(
                      "Signal Weakness",
                      "Optimize Placement",
                      "Dead Spot Analysis",
                      "Recommend Extenders"
                    )}
                    {renderAppendixRow(
                      "Double NAT",
                      "Remove 2nd Router",
                      "Configure Bridge Mode",
                      "N/A"
                    )}
                    {renderAppendixRow(
                      "Device Compatibility",
                      "Verify Standards",
                      "Update Drivers",
                      "Recommend Hardwiring"
                    )}
                    {renderAppendixRow(
                      "Router Overloaded",
                      "Reboot Router",
                      "Limit Devices",
                      "Consider Replacement"
                    )}
                    {renderAppendixRow(
                      "Outdated Firmware",
                      "Update Firmware",
                      "Factory Reset",
                      "N/A"
                    )}
                    {renderAppendixRow(
                      "Physical Damage",
                      "Identify w/ Live View",
                      "N/A",
                      "Replace Equipment"
                    )}
                  </tbody>
                </table>
              </div>
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

export default SMCWorkflowContent;
