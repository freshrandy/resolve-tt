import React, { useState } from "react";
import { motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";
import {
  FaChevronDown,
  FaChevronRight,
  FaPlay, // Getting Started title
  // FaTasks, // REMOVED: Objectives title
  FaCogs, // Requirements title
  FaDownload, // Extension Install, Manual Method, Download Icon
  FaClipboardCheck, // When to Use title
  FaUserCheck, // Golden Rules, Objections(Permission), How to Use
  FaLink, // Integration, Connecting title, Use Cases
  FaExclamationTriangle, // Trigger Phrases
  FaSignInAlt, // Login title, Login Issues
  FaMobileAlt, // Text Method, Customer App Icon, App Install Issues
  FaTools, // Core Features title, Troubleshooting Title
  FaBroadcastTower, // Network Scan feature, Scan Issues
  FaTachometerAlt, // Speed Test feature
  FaVideo, // Live View feature, Video/Photo Issues
  FaMapMarkedAlt, // Dead Spot feature
  FaServer, // Router Login feature
  FaComments, // Introducing title
  FaPhone, // Phone Script
  FaEnvelope, // Email Script
  FaQuestionCircle, // Objections title, What to Know, FAQ Title
  FaUserCog, // Objections(Tech Skill)
  FaClipboardList, // Documentation title, Documentation Issues
  FaLaptopHouse, // VDI Considerations
  FaRoute, // Router Specific Notes
  FaWrench, // Install Extension
  FaDesktop, // Agent Dashboard icon
  FaStar, // Highlight/Emphasis Icon
  FaLightbulb, // FAQ Answer prefix
  FaListUl, // Table of Contents icon
} from "react-icons/fa"; // Added/Consolidated necessary icons

// Receive styles object as props
const AgentTrainingContent = ({ styles }) => {
  // State for expanded sections, REMOVED objectives
  const [expandedSections, setExpandedSections] = useState({
    gettingStarted: true,
    // objectives: true, // REMOVED
    requirements: true,
    whenToUse: true,
    loggingIn: true,
    connecting: true,
    // coreFeatures managed by Disclosure
    introducing: true,
    objections: true,
    troubleshooting: true,
    faq: true,
    documentation: true,
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

  // Define Core Features with detailed content as JSX
  const coreFeatures = [
    // ... (coreFeatures data remains the same)
    {
      id: "network-scan",
      title: "1. Network Scan",
      description: "Primary diagnostic tool",
      icon: <FaBroadcastTower />,
      isPrimary: true,
      content: (
        <>
          {" "}
          <p style={styles.paragraph}>
            {" "}
            The primary diagnostic tool -{" "}
            <strong style={styles.strong}>always start here</strong>. Runs for
            approximately 2 minutes. Collects 150+ data points about customer's
            network. Categorizes issues by impact level (high impact vs.
            warnings). Organizes findings into five areas: User Devices, WiFi
            Network, Router, Line Quality, and Key Websites.{" "}
          </p>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaUserCheck /> Agent Instructions:{" "}
          </h4>{" "}
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            {" "}
            <li style={styles.listItem}>
              Have customer stand near their router/ONT.
            </li>{" "}
            <li style={styles.listItem}>
              Request they stay on the app during scanning.
            </li>{" "}
            <li style={styles.listItem}>
              Use scan time to gather additional information.
            </li>{" "}
            <li style={styles.listItem}>
              After scan completes, prioritize high-impact issues.
            </li>{" "}
            <li style={styles.listItem}>
              Follow fix-it workflows systematically.
            </li>{" "}
          </ul>{" "}
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>
            {" "}
            <strong style={styles.strong}>Best Practice:</strong> Always run a
            network scan first, even if you think you know the issue. The scan
            might identify additional issues not initially apparent.{" "}
          </p>{" "}
        </>
      ),
    },
    {
      id: "speed-test",
      title: "2. Speed Test",
      description: "Measures connection speeds",
      icon: <FaTachometerAlt />,
      isPrimary: false,
      content: (
        <>
          {" "}
          <p style={styles.paragraph}>
            {" "}
            Automatically included in network scan. Can be run independently for
            before/after comparisons. Tests wireless connection speeds. Agent
            must enter customer's plan speeds for context.{" "}
          </p>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaQuestionCircle /> What to Know:{" "}
          </h4>{" "}
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            {" "}
            <li style={styles.listItem}>
              How to interpret speed test results.
            </li>{" "}
            <li style={styles.listItem}>When to run standalone speed tests.</li>{" "}
            <li style={styles.listItem}>
              Comparing results to customer's expected plan speeds.
            </li>{" "}
            <li style={styles.listItem}>
              Speed test limitations based on router models.
            </li>{" "}
          </ul>{" "}
        </>
      ),
    },
    {
      id: "live-view",
      title: "3. Live View Options",
      description: "See what customer sees",
      icon: <FaVideo />,
      isPrimary: false,
      content: (
        <>
          {" "}
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            {" "}
            <li style={styles.listItem}>
              <strong style={styles.strong}>Photo tool:</strong> Captures still
              images.
            </li>{" "}
            <li style={styles.listItem}>
              <strong style={styles.strong}>Video tool:</strong> Provides live
              camera feed.
            </li>{" "}
            <li style={styles.listItem}>
              <strong style={styles.strong}>Annotation capabilities:</strong>{" "}
              Draw, circle, highlight areas.
            </li>{" "}
            <li style={styles.listItem}>
              Works over mobile data when WiFi is unavailable.
            </li>{" "}
          </ul>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaLink /> TalkTalk Use Cases:{" "}
          </h4>{" "}
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            {" "}
            <li style={styles.listItem}>
              FTTP: Checking ONT lights (use early in the process).
            </li>{" "}
            <li style={styles.listItem}>
              Verifying cable connections between ONT and router.
            </li>{" "}
            <li style={styles.listItem}>Confirming router status lights.</li>{" "}
            <li style={styles.listItem}>
              Guiding customers through physical changes.
            </li>{" "}
            <li style={styles.listItem}>
              Identifying equipment issues with legacy/BYOD equipment.
            </li>{" "}
          </ul>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaLaptopHouse /> VDI Considerations{" "}
          </h4>{" "}
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            {" "}
            <li style={styles.listItem}>
              Video quality may be slightly pixelated but functional.
            </li>{" "}
            <li style={styles.listItem}>
              Initial connection may have slightly longer round trip time.
            </li>{" "}
            <li style={styles.listItem}>
              Video restarts may trigger "poor connection" warnings, but service
              should stabilize.
            </li>{" "}
          </ul>{" "}
        </>
      ),
    },
    {
      id: "dead-spot",
      title: "4. Dead Spot Detector",
      description: "Maps WiFi coverage",
      icon: <FaMapMarkedAlt />,
      isPrimary: false,
      content: (
        <>
          {" "}
          <p style={styles.paragraph}>
            {" "}
            Identifies areas of poor WiFi coverage. Maps signal strength
            throughout home. Customer walks through home while app measures
            signal quality. Results displayed as green/yellow/red indicators.{" "}
          </p>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaUserCheck /> How to Use:{" "}
          </h4>{" "}
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            {" "}
            <li style={styles.listItem}>
              Have customer stand next to router.
            </li>{" "}
            <li style={styles.listItem}>
              Initiate test and have customer walk to problem areas.
            </li>{" "}
            <li style={styles.listItem}>
              Observe signal strength changes in real-time.
            </li>{" "}
            <li style={styles.listItem}>
              Use results to recommend optimal equipment placement.
            </li>{" "}
          </ul>{" "}
        </>
      ),
    },
    {
      id: "router-login",
      title: "5. Router Login",
      description: "Remote router access",
      icon: <FaServer />,
      isPrimary: false,
      content: (
        <>
          {" "}
          <p style={styles.paragraph}>
            {" "}
            Remote access to customer's router settings. Enables direct
            configuration changes by agent. Reduces handling time for
            configuration issues. Works across managed and customer-owned
            routers.{" "}
          </p>{" "}
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {" "}
            <FaRoute /> Router-Specific Notes:{" "}
          </h4>{" "}
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            {" "}
            <li style={styles.listItem}>
              Capabilities vary across TalkTalk router portfolio.
            </li>{" "}
            <li style={styles.listItem}>
              eero management differs from standard TalkTalk routers.
            </li>{" "}
            <li style={styles.listItem}>
              BYOD routers may have limited remote management capabilities.
            </li>{" "}
          </ul>{" "}
        </>
      ),
    },
  ];

  // --- Disclosure Button and Panel Styles ---
  // (Styles remain the same as previous version)
  const baseDisclosureButtonStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    padding: "12px 16px",
    fontSize: "0.9rem",
    fontWeight: "600",
    textAlign: "left",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.2s ease, border 0.2s ease",
  };
  const disclosureButtonStyle = {
    ...baseDisclosureButtonStyle,
    color: styles.colors?.electricBlue || "#0066FF",
    backgroundColor: styles.colors?.primary
      ? `${styles.colors.primary}08`
      : "rgba(88, 219, 185, 0.08)",
    border: `1px solid ${styles.colors?.cloudGrey || "#EEF2F6"}`,
  };
  const primaryDisclosureButtonStyle = {
    ...baseDisclosureButtonStyle,
    color: styles.colors?.primaryContrast || "white",
    backgroundColor: styles.colors?.primary
      ? `${styles.colors.primary}90`
      : "#3FA697",
    border: `1px solid ${styles.colors?.primaryDark || "#47A891"}`,
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };
  const openDisclosureButtonStyle = (isPrimary) => ({
    ...(isPrimary ? primaryDisclosureButtonStyle : disclosureButtonStyle),
    borderRadius: "6px 6px 0 0",
  });
  const disclosurePanelStyle = {
    padding: "16px",
    fontSize: "0.875rem",
    color: styles.colors?.ash || "#3D4550",
    backgroundColor: "white",
    borderRadius: "0 0 6px 6px",
    border: `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
    borderTop: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
  };
  // --- End Styles ---

  // Section IDs for Table of Contents links
  const sectionIds = {
    gettingStarted: "getting-started",
    requirements: "system-requirements",
    whenToUse: "when-to-use",
    loggingIn: "logging-in",
    connecting: "connecting-customer",
    coreFeatures: "core-features",
    introducing: "introducing-resolve",
    objections: "addressing-objections",
    troubleshooting: "troubleshooting",
    faq: "faq",
    documentation: "documentation",
  };

  return (
    <div>
      {/* NEW Table of Contents / Download Section */}
      <motion.div
        custom={0} // First element
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {/* Left Column: Table of Contents (75%) */}
          <div style={{ flex: "3 1 600px" }}>
            {" "}
            {/* Flex-basis around 600px */}
            <h2
              style={{
                ...styles.cardTitle,
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaListUl style={{ color: styles.colors?.primary }} />
              Agent Training Content Sections
            </h2>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: 0,
                columns: 2, // Create two columns for the list
                gap: "16px",
                fontSize: "0.9rem",
              }}
            >
              {/* Create links using the sectionIds */}
              {Object.entries(sectionIds).map(([key, id]) => (
                <li
                  key={id}
                  style={{ marginBottom: "8px", breakInside: "avoid-column" }}
                >
                  <a
                    href={`#${id}`}
                    style={{
                      color: styles.colors?.electricBlue || "#0066FF",
                      textDecoration: "none",
                      fontWeight: "500",
                      display: "inline-block", // Allows padding/hover bg
                      padding: "2px 6px",
                      borderRadius: "4px",
                      transition: "background-color 0.2s",
                      ":hover": {
                        // Pseudo-selector needs CSS or specific handling in JS
                        backgroundColor: `${styles.colors?.electricBlue}10`,
                        textDecoration: "underline",
                      },
                    }}
                    // Basic smooth scroll for browsers that support it
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      // Optional: Update URL hash without page jump
                      // window.history.pushState(null, '', `#${id}`);
                    }}
                  >
                    {/* Convert key to Title Case (basic version) */}
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Download Icon (25%) */}
          <div
            style={{
              flex: "1 1 150px", // Flex-basis around 150px
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "16px",
              backgroundColor: `${styles.colors?.cloudGrey}30`,
              borderRadius: "8px",
            }}
          >
            <FaDownload
              style={{
                fontSize: "2.5rem",
                color: styles.colors?.primary || "#58DBB9",
                marginBottom: "12px",
              }}
            />
            <p
              style={{
                ...styles.paragraph,
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              Learn RouteThis Resolve
            </p>
            <p
              style={{
                ...styles.paragraph,
                fontSize: "0.8rem",
                marginBottom: "12px",
                color: styles.colors?.ash,
              }}
            >
              Download Resolve Agent Guide
            </p>
            <a
              href="#"
              /* Replace # with actual PDF link */ style={{
                display: "inline-block",
                padding: "6px 12px",
                fontSize: "0.85rem",
                backgroundColor: styles.colors?.primary || "#58DBB9",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "background-color 0.2s",
                // Add hover effect inline or via CSS class
              }}
              onClick={(e) => {
                e.preventDefault();
                alert("PDF download link placeholder");
              }} // Placeholder action
            >
              Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* Introduction Card */}
      <motion.div
        id={sectionIds.gettingStarted} // Add ID here
        custom={1} // Update index
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <h2 style={styles.cardTitle}>
          <FaPlay
            style={{ marginRight: "8px", color: styles.colors?.primary }}
          />
          Getting Started with Resolve
        </h2>
        <div style={{ paddingTop: "16px" }}>
          <p style={styles.paragraph}>
            RouteThis Resolve is a mobile network diagnostic solution designed
            to support the entire customer interaction by:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Helping identify the root cause of the customer's network issue
            </li>
            <li style={styles.listItem}>Providing clear resolution steps</li>
            <li style={styles.listItem}>
              Giving you the ability to send customer education on the issues
              found
            </li>
          </ul>
          <p style={styles.paragraph}>
            The solution consists of two main components:
          </p>
          <ul
            style={{
              ...styles.list,
              marginBottom: 0,
              listStyle: "none",
              paddingLeft: 0,
            }}
          >
            <li
              style={{
                ...styles.listItem,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: `${styles.colors?.cloudGrey}30`,
                padding: "12px",
                borderRadius: "6px",
                marginBottom: "8px",
                borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
              }}
            >
              <FaDesktop
                style={{
                  fontSize: "1.3rem",
                  color: styles.colors?.primary || "#58DBB9",
                  flexShrink: 0,
                }}
              />
              <div>
                <strong style={styles.strong}>
                  Agent Dashboard (resolve.routethis.com)
                </strong>
                <br /> The web interface you'll use.
              </div>
            </li>
            <li
              style={{
                ...styles.listItem,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: `${styles.colors?.cloudGrey}30`,
                padding: "12px",
                borderRadius: "6px",
                borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
              }}
            >
              <FaMobileAlt
                style={{
                  fontSize: "1.3rem",
                  color: styles.colors?.primary || "#58DBB9",
                  flexShrink: 0,
                }}
              />
              <div>
                <strong style={styles.strong}>Customer Mobile App</strong>
                <br /> What your customers will download and use (iOS/Android).
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* REMOVED Training Objectives Card */}

      {/* System Requirements Card (Collapsible) */}
      <motion.div
        id={sectionIds.requirements} // Add ID here
        custom={2} // Update index
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
          onClick={() => toggleSection("requirements")}
        >
          <h2 style={styles.cardTitle}>
            <FaCogs
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            System Requirements
          </h2>
          {expandedSections.requirements ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.requirements && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              To use Resolve effectively, ensure you have:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Browser:</strong> Microsoft Edge
                (latest stable)
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Extension:</strong> RouteThis
                Proxy Enhancer (Required for Video)
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>VPN:</strong> Standard TalkTalk
                VPN (Ivanti/New)
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Connection:</strong> Min. 15-20
                Mbps recommended
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Access:</strong> MyDesk CRM,
                Pathfinder, Trio
              </li>
            </ul>
            <div
              style={{
                marginTop: "24px",
                padding: "16px",
                backgroundColor: `${styles.colors?.cloudGrey}40`,
                borderRadius: "8px",
                borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
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
                <FaDownload
                  style={{ color: styles.colors?.primary || "#58DBB9" }}
                />
                Installing the Proxy Enhancer Extension
              </h3>
              <ol
                style={{
                  ...styles.list,
                  listStyle: "decimal",
                  paddingLeft: "20px",
                  marginBottom: 0,
                }}
              >
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Open Microsoft Edge browser
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Navigate to the Edge Add-ons store
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Search for "RouteThis Proxy Enhancer"
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Click "Get" or "Add to Edge"
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Accept any permission prompts
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Verify the RouteThis icon appears in your browser toolbar
                </li>
              </ol>
            </div>
          </div>
        )}
      </motion.div>

      {/* When to Use Resolve Card (Collapsible) */}
      <motion.div
        id={sectionIds.whenToUse} // Add ID here
        custom={3} // Update index
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
          onClick={() => toggleSection("whenToUse")}
        >
          <h2 style={styles.cardTitle}>
            <FaClipboardCheck
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            When to Use Resolve
          </h2>
          {expandedSections.whenToUse ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.whenToUse && (
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
                <FaUserCheck style={{ color: styles.colors?.electricBlue }} />{" "}
                Golden Rules
              </h3>
              <p style={styles.paragraph}>Use Resolve when:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Dealing with WiFi or network connectivity concerns
                </li>
                <li style={styles.listItem}>
                  Needing more accurate diagnostic information
                </li>
                <li style={styles.listItem}>
                  Requiring visibility into the customer's environment
                </li>
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
                <FaLink style={{ color: styles.colors?.electricBlue }} />{" "}
                Integration with TalkTalk's Workflow
              </h3>
              <p style={styles.paragraph}>
                Initiate Resolve <strong style={styles.strong}>after</strong>{" "}
                necessary line tests (Pathfinder) reveal no hard network faults:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>FTTP line tests (~30 secs)</li>
                <li style={styles.listItem}>FTTC line tests (~2 mins)</li>
                <li style={styles.listItem}>MPF line tests (~5 mins)</li>
              </ul>
              <p style={styles.paragraph}>
                Use Resolve <strong style={styles.strong}>before</strong>{" "}
                escalating in-home WiFi issues for CPE replacement or truck
                rolls.
              </p>
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
                <FaRoute style={{ color: styles.colors?.electricBlue }} />{" "}
                Decision Points in Troubleshooting
              </h3>
              <p style={styles.paragraph}>
                <strong style={styles.strong}>For 2LS Agents (SMC):</strong>
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Post-escalation review (confirming no hard fault)
                </li>
                <li style={styles.listItem}>
                  Outbound calls for suspected in-home WiFi
                </li>
                <li style={styles.listItem}>
                  Inbound calls needing advanced WiFi diagnostics
                </li>
              </ul>
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  For Phase 2 Call Center Agents:
                </strong>
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  When suspecting an in-home WiFi issue
                </li>
                <li style={styles.listItem}>
                  When specific tools (Scan, Speed Test, Live View) aid
                  resolution
                </li>
                <li style={styles.listItem}>
                  Prior to escalating WiFi-related tickets
                </li>
              </ul>
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
                <FaExclamationTriangle
                  style={{ color: styles.colors?.warning }}
                />{" "}
                Common Trigger Phrases
              </h3>
              <p style={styles.paragraph}>
                Listen for customer statements like:
              </p>
              <ul style={{ ...styles.list, marginBottom: 0 }}>
                {" "}
                <li style={styles.listItem}>
                  "My internet is slow / video buffers"
                </li>{" "}
                <li style={styles.listItem}>
                  "Everything's plugged in, but no internet"
                </li>{" "}
                <li style={styles.listItem}>
                  "WiFi doesn't work well in [specific room]"
                </li>{" "}
                <li style={styles.listItem}>
                  "New device isn't connecting/working"
                </li>{" "}
                <li style={styles.listItem}>"WiFi drops at certain times"</li>{" "}
                <li style={styles.listItem}>
                  "Some devices work, others don't"
                </li>{" "}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Logging In Card (Collapsible) */}
      <motion.div
        id={sectionIds.loggingIn} // Add ID here
        custom={4} // Update index
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
          onClick={() => toggleSection("loggingIn")}
        >
          <h2 style={styles.cardTitle}>
            <FaSignInAlt
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Logging into Resolve
          </h2>
          {expandedSections.loggingIn ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.loggingIn && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <ul style={{ ...styles.list, marginBottom: 0 }}>
              <li style={styles.listItem}>
                Start of shift: Open Edge, navigate to{" "}
                <strong style={styles.strong}>resolve.routethis.com</strong>
              </li>
              <li style={styles.listItem}>
                Log in using your TalkTalk work email account.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>First time?</strong> Use
                credentials from the welcome email sent by{" "}
                <strong style={styles.strong}>team@routethis.com</strong>.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Forgot password?</strong> Click
                the "Forgot Password" link on the login page (only works after
                initial login).
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Connecting With Customer Card (Collapsible + TWO COLUMNS) */}
      <motion.div
        id={sectionIds.connecting} // Add ID here
        custom={5} // Update index
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
          onClick={() => toggleSection("connecting")}
        >
          <h2 style={styles.cardTitle}>
            <FaLink
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Connecting With Your Customer
          </h2>
          {expandedSections.connecting ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.connecting && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              <div>
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                  }}
                >
                  <FaMobileAlt style={{ color: styles.colors?.electricBlue }} />{" "}
                  Text Message Method (Preferred)
                </h3>
                <ol
                  style={{
                    ...styles.list,
                    listStyle: "decimal",
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  <li style={styles.listItem}>
                    Inform customer you'll text a link.
                  </li>
                  <li style={styles.listItem}>Search Order No. in Resolve.</li>
                  <li style={styles.listItem}>Click correct customer line.</li>
                  <li style={styles.listItem}>
                    Click "Scan For New Issues" (sends text).
                  </li>
                  <li style={styles.listItem}>
                    Guide customer to open link & app.
                  </li>
                  <li style={styles.listItem}>Begin troubleshooting.</li>
                </ol>
              </div>
              <div>
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                  }}
                >
                  <FaDownload style={{ color: styles.colors?.electricBlue }} />{" "}
                  Manual Method (Alternative)
                </h3>
                <p style={{ ...styles.paragraph, marginTop: 0 }}>
                  If texts aren't possible:
                </p>
                <ul style={{ ...styles.list, marginBottom: 0 }}>
                  <li style={styles.listItem}>
                    Instruct open{" "}
                    <strong style={styles.strong}>TalkTalk App</strong>.
                  </li>
                  <li style={styles.listItem}>Navigate to "Help" section.</li>
                  <li style={styles.listItem}>Find & tap "Get Wi-Fi Help".</li>
                  <li style={styles.listItem}>Follow in-app prompts.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Core Features Card (Disclosure based) */}
      <motion.div
        id={sectionIds.coreFeatures} // Add ID here
        custom={6} // Update index
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Content remains the same */}
        <h2 style={styles.cardTitle}>
          <FaTools
            style={{ marginRight: "8px", color: styles.colors?.primary }}
          />
          Core Features Overview
        </h2>
        <div style={{ paddingTop: "16px" }}>
          <p style={styles.paragraph}>
            Click each feature below to expand.{" "}
            <strong style={styles.strong}>
              Network Scan is the primary tool and starting point.
            </strong>
          </p>
          <div
            style={{
              border: `2px solid ${styles.colors?.primary || "#58DBB9"}`,
              borderRadius: "8px",
              padding: "8px",
              marginBottom: "16px",
              backgroundColor: styles.colors?.primary
                ? `${styles.colors.primary}10`
                : "rgba(88, 219, 185, 0.05)",
            }}
          >
            {coreFeatures.length > 0 && (
              <Disclosure key={coreFeatures[0].id} as="div" defaultOpen={true}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      style={
                        open
                          ? openDisclosureButtonStyle(true)
                          : primaryDisclosureButtonStyle
                      }
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {React.cloneElement(coreFeatures[0].icon, {
                          style: { fontSize: "1.1rem", flexShrink: 0 },
                        })}
                        <span>
                          <FaStar
                            style={{
                              marginRight: "6px",
                              color: styles.colors?.warning || "orange",
                            }}
                          />
                          {coreFeatures[0].title} -{" "}
                          <i style={{ fontWeight: "400" }}>
                            {coreFeatures[0].description}
                          </i>
                        </span>
                      </span>
                      <FaChevronDown
                        style={{
                          width: "16px",
                          height: "16px",
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          flexShrink: 0,
                          color: styles.colors?.primaryContrast || "white",
                        }}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel style={disclosurePanelStyle}>
                        {coreFeatures[0].content}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            )}
          </div>
          <div style={{ width: "100%", marginTop: "8px" }}>
            {coreFeatures.slice(1).map((feature) => (
              <Disclosure
                key={feature.id}
                as="div"
                style={{ marginBottom: "8px" }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      style={
                        open
                          ? openDisclosureButtonStyle(false)
                          : disclosureButtonStyle
                      }
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          style: { fontSize: "1.1rem", flexShrink: 0 },
                        })}
                        <span>
                          {feature.title} -{" "}
                          <i style={{ fontWeight: "400" }}>
                            {feature.description}
                          </i>
                        </span>
                      </span>
                      <FaChevronDown
                        style={{
                          width: "16px",
                          height: "16px",
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          flexShrink: 0,
                        }}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel style={disclosurePanelStyle}>
                        {feature.content}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Introducing Resolve Card (Collapsible) */}
      <motion.div
        id={sectionIds.introducing} // Add ID here
        custom={7} // Update index
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
          onClick={() => toggleSection("introducing")}
        >
          <h2 style={styles.cardTitle}>
            <FaComments
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Introducing Resolve to Customers
          </h2>
          {expandedSections.introducing ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.introducing && (
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
                <FaPhone style={{ color: styles.colors?.electricBlue }} /> Phone
                Script
              </h3>
              <p
                style={{
                  ...styles.paragraph,
                  fontStyle: "italic",
                  borderLeft: `3px solid ${
                    styles.colors?.primary || "#58DBB9"
                  }`,
                  padding: "12px",
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  borderRadius: "0 4px 4px 0",
                }}
              >
                "Now that I understand why you are calling, let's troubleshoot
                the problem together... We're going to use a diagnostic tool...
                I'll need to send you a text message... Once installed, we'll
                run a quick scan... This will help us find and fix your issue
                much faster. What's the best mobile number to text you on?"
              </p>
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
                <FaEnvelope style={{ color: styles.colors?.electricBlue }} />{" "}
                Email Script
              </h3>
              <p
                style={{
                  ...styles.paragraph,
                  fontStyle: "italic",
                  borderLeft: `3px solid ${
                    styles.colors?.primary || "#58DBB9"
                  }`,
                  padding: "12px",
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  borderRadius: "0 4px 4px 0",
                  marginBottom: 0,
                }}
              >
                "Thank you for getting in touch... we're here to help... we have
                a feature in our app...
                <br />
                <br />
                To start troubleshooting follow these instructions:
                <br />
                1. Stand next to your router
                <br />
                2. On your mobile device download the app [LINK]
                <br />
                3. Follow the prompts and click on Network Scan
                <br />
                4. Allow the 2-minute scan to complete (do NOT minimize...)
                <br />
                <br />
                This scan will provide the information required... We'll review
                the scan details and respond..."
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Addressing Objections Card (Collapsible) */}
      <motion.div
        id={sectionIds.objections} // Add ID here
        custom={8} // Update index
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
          onClick={() => toggleSection("objections")}
        >
          <h2 style={styles.cardTitle}>
            <FaQuestionCircle
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Addressing Customer Objections
          </h2>
          {expandedSections.objections ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.objections && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p
                style={{
                  ...styles.paragraph,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaQuestionCircle
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                <strong style={styles.strong}>
                  {" "}
                  "What information are you going to be able to see?"{" "}
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  fontStyle: "italic",
                  marginLeft: "28px",
                  marginBottom: 0,
                }}
              >
                "No personal information at all... only general diagnostic
                information... We'll walk through the findings together..."
              </p>
            </div>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p
                style={{
                  ...styles.paragraph,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaUserCheck style={{ color: styles.colors?.electricBlue }} />{" "}
                <strong style={styles.strong}>
                  {" "}
                  "Why do you need the location permission?"{" "}
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  fontStyle: "italic",
                  marginLeft: "28px",
                  marginBottom: 0,
                }}
              >
                "The location permission helps us see all nearby WiFi
                networks... helps us solve your issue faster. No GPS data is
                collected."
              </p>
            </div>
            <div style={{ marginBottom: 0 }}>
              <p
                style={{
                  ...styles.paragraph,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaUserCog style={{ color: styles.colors?.electricBlue }} />{" "}
                <strong style={styles.strong}>
                  {" "}
                  "I'm not good with mobile apps/technology"{" "}
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  fontStyle: "italic",
                  marginLeft: "28px",
                  marginBottom: 0,
                }}
              >
                "Don't worry, the app is very simple... only a few buttons to
                press, and I'll guide you through each step."
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Troubleshooting Card (Collapsible) */}
      <motion.div
        id={sectionIds.troubleshooting} // Add ID here
        custom={9} // Update index
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
          onClick={() => toggleSection("troubleshooting")}
        >
          <h2 style={styles.cardTitle}>
            <FaTools
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Troubleshooting Common Issues
          </h2>
          {expandedSections.troubleshooting ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.troubleshooting && (
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
                <FaSignInAlt style={{ color: styles.colors?.electricBlue }} />{" "}
                Login Issues
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  First-time login: Use credentials from{" "}
                  <strong>team@routethis.com</strong> email.
                </li>
                <li style={styles.listItem}>
                  Password reset: Use "Forgot Password" link (only works after
                  first login).
                </li>
                <li style={styles.listItem}>
                  Still stuck? Contact your Team Leader.
                </li>
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
                <FaMobileAlt style={{ color: styles.colors?.electricBlue }} />{" "}
                Customer App Installation
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  If text fails, guide manual download:
                </li>
                <li style={{ ...styles.listItem, paddingLeft: "20px" }}>
                  iOS: App Store -> Search "TalkTalk"
                </li>
                <li style={{ ...styles.listItem, paddingLeft: "20px" }}>
                  Android: Google Play -> Search "TalkTalk"
                </li>
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
                <FaVideo style={{ color: styles.colors?.electricBlue }} />{" "}
                Video/Photo Functionality
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Ensure RouteThis Proxy Enhancer extension is installed and
                  enabled in Edge.
                </li>
                <li style={styles.listItem}>
                  Confirm customer allowed camera permissions in the app.
                </li>
                <li style={styles.listItem}>
                  If video is choppy, continue briefly as it often stabilizes.
                </li>
                <li style={styles.listItem}>
                  For persistent video issues, use the Photo tool as an
                  alternative.
                </li>
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
                <FaBroadcastTower
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                Network Scan Issues
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Customer must be connected to their home WiFi (not mobile
                  data).
                </li>
                <li style={styles.listItem}>
                  Advise customer to stand near the router (within ~10 feet).
                </li>
                <li style={styles.listItem}>
                  App must remain open and in the foreground during the ~2 min
                  scan.
                </li>
                <li style={styles.listItem}>
                  If scan fails or hangs, ask customer to force-close the app
                  and try running the scan again.
                </li>
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
                <FaClipboardList
                  style={{ color: styles.colors?.electricBlue }}
                />{" "}
                Documentation Issues
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Always include the customer key in MyDesk notes for reference.
                </li>
                <li style={styles.listItem}>
                  Phase 1: Feedback form completion is mandatory after each use.
                </li>
                <li style={styles.listItem}>
                  Phase 2: Ensure the Ticket ID field is populated in Resolve
                  dashboard notes for metrics.
                </li>
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* FAQ Card (Collapsible) */}
      <motion.div
        id={sectionIds.faq} // Add ID here
        custom={10} // Update index
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
          onClick={() => toggleSection("faq")}
        >
          <h2 style={styles.cardTitle}>
            <FaQuestionCircle
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Frequently Asked Questions
          </h2>
          {expandedSections.faq ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.faq && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  Q: Why do I need to use the RouteThis Proxy Enhancer
                  extension?
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  marginLeft: "16px",
                  marginBottom: 0,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <FaLightbulb
                  style={{
                    color: styles.colors?.electricBlue,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  A: This extension is crucial for reliable video/photo
                  functionality when using Resolve through the TalkTalk VDI
                  environment. It helps manage the connection proxy.
                </span>
              </p>
            </div>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  Q: What should I do if a customer is resistant to downloading
                  the app?
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  marginLeft: "16px",
                  marginBottom: 0,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <FaLightbulb
                  style={{
                    color: styles.colors?.electricBlue,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  A: Reiterate it's part of the standard diagnostic process
                  designed to fix their issue faster. Emphasize that only
                  technical network data is collected (no personal browsing
                  history, files, etc.) and address specific privacy concerns
                  using the scripts provided.
                </span>
              </p>
            </div>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  Q: How do I know which Resolve feature to use?
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  marginLeft: "16px",
                  marginBottom: 0,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <FaLightbulb
                  style={{
                    color: styles.colors?.electricBlue,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  A:{" "}
                  <strong style={styles.strong}>
                    Always start with the Network Scan.
                  </strong>{" "}
                  This provides the foundational diagnosis. Use other tools like
                  Live View, Speed Test, or Dead Spot Detector based on the scan
                  results, fix-it recommendations, or specific troubleshooting
                  needs (e.g., checking ONT lights).
                </span>
              </p>
            </div>
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: `1px dashed ${
                  styles.colors?.cloudGrey || "#e5e7eb"
                }`,
              }}
            >
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  Q: What if I encounter a technical issue during the trial?
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  marginLeft: "16px",
                  marginBottom: 0,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <FaLightbulb
                  style={{
                    color: styles.colors?.electricBlue,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  A: First, try basic troubleshooting (e.g., refresh, try scan
                  again). If persistent, document the issue (what happened,
                  error messages, customer key) and report it to your Team
                  Leader immediately. They can escalate to the trial support
                  contacts (e.g., randy.pante@routethis.com).
                </span>
              </p>
            </div>
            <div style={{ marginBottom: 0 }}>
              <p style={styles.paragraph}>
                <strong style={styles.strong}>
                  Q: How do we gather feedback during the trial?
                </strong>
              </p>
              <p
                style={{
                  ...styles.paragraph,
                  marginLeft: "16px",
                  marginBottom: 0,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <FaLightbulb
                  style={{
                    color: styles.colors?.electricBlue,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  A: Phase 1 (SMC) requires completing the specific feedback
                  form after *every* Resolve use. Phase 2 (Call Center) relies
                  on accurate Ticket ID entry in Resolve and participation in
                  any requested feedback sessions or surveys coordinated by
                  leadership.
                </span>
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Documentation Requirements Card (Now last) */}
      <motion.div
        id={sectionIds.documentation} // Add ID here
        custom={11} // Update index
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
            />
            Documentation Requirements
          </h2>
          {expandedSections.documentation ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
        </div>
        {expandedSections.documentation && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              Accurate documentation is crucial for trial success and metric
              tracking:
            </p>
            <ul style={{ ...styles.list, marginBottom: 0 }}>
              <li style={styles.listItem}>
                <strong style={styles.strong}>MyDesk Notes:</strong> Always add
                the unique Customer Key generated by Resolve.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Ticket Tagging:</strong> Ensure
                tickets where Resolve was used are appropriately tagged (follow
                specific process).
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Phase 1 (SMC):</strong> Feedback
                form completion after{" "}
                <strong style={styles.strong}>each</strong> Resolve interaction
                is mandatory.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Phase 2 (Call Center):</strong>{" "}
                The Ticket ID field <strong style={styles.strong}>must</strong>{" "}
                be populated within the Resolve dashboard session notes.
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Detail Level:</strong> Include
                specific tools used & fixes attempted in notes for context.
              </li>
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
          /* Style Disclosure button on hover */
          button[style*="disclosureButtonStyle"]:hover {
            background-color: ${
              styles.colors?.primary
                ? `${styles.colors.primary}25`
                : "rgba(88, 219, 185, 0.15)"
            } !important;
          }
          button[style*="primaryDisclosureButtonStyle"]:hover {
             background-color: ${
               styles.colors?.primaryDark || "#47A891"
             } !important;
          }
          /* Basic styles for ToC links */
          a[href^="#"]:hover {
             background-color: rgba(0, 102, 255, 0.1); /* Example hover using electric blue with alpha */
             text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default AgentTrainingContent;
