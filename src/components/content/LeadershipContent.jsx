import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaUsersCog, // Adoption Strategies, User Admin
  // FaBullseye, // No longer needed for sub-list items directly
  FaUsers, // Team Meetings icon
  FaHeadset, // Real-Time Support icon
  FaChalkboardTeacher, // Coaching, Practice icon
  // FaFlask, // Practice icon (removed, using ChalkboardTeacher)
  FaUserShield, // User Admin Title Alt
  FaUserPlus, // Add User
  FaLayerGroup, // Group Mgmt
  FaLock, // Permissions
  FaChartBar, // Monitoring Progress
  FaTools, // Agent Tool Usage
  FaCommentDots, // Overcoming Barriers
  FaLightbulb, // Barrier examples
  // FaTrophy, // Removed (Success Metrics)
  // FaSyncAlt, // Removed (Success Metrics)
  // FaTruck, // Removed (Success Metrics)
  // FaExchangeAlt, // Removed (Success Metrics)
  // FaThumbsUp, // Removed (Success Metrics)
  // FaClock, // Removed (Success Metrics)
  // FaCheckCircle, // Removed (Success Metrics)
  FaInfoCircle, // Notes
  FaChartLine, // Agent Tool Trends (in Monitoring)
} from "react-icons/fa"; // Removed unused Metric icons

const LeadershipContent = ({ styles }) => {
  // State for expanded sections - metrics removed
  const [expandedSections, setExpandedSections] = useState({
    adoption: true,
    userAdmin: true,
    monitoring: true,
    barriers: true,
    // metrics: true, // Removed
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

  // Helper for barrier item styling (keeping this)
  const renderBarrierItem = (title, response) => (
    <div
      style={{
        marginBottom: "16px",
        paddingBottom: "16px",
        borderBottom: `1px dashed ${styles.colors?.cloudGrey || "#e5e7eb"}`,
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
        <FaLightbulb style={{ color: styles.colors?.warning }} />
        <strong style={styles.strong}>"{title}"</strong>
      </p>
      <p
        style={{
          ...styles.paragraph,
          fontStyle: "italic",
          marginLeft: "28px",
          marginBottom: 0,
        }}
      >
        {response}
      </p>
    </div>
  );

  // Helper for list item styling (can be reused within static cards)
  const renderListItem = (text) => (
    // Simple list item rendering, icon removed as it might be too busy inside cards
    <li style={{ ...styles.listItem, marginBottom: "6px" }}>{text}</li>
  );

  // Helper for Monitoring list item styling
  const renderMonitoringListItem = (icon, text) => (
    <li
      style={{
        ...styles.listItem,
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "8px",
      }}
    >
      {React.cloneElement(icon, {
        style: {
          marginTop: "4px",
          color: styles.colors?.electricBlue || "#4338CA",
          flexShrink: 0,
        },
      })}
      <span>{text}</span>
    </li>
  );

  return (
    <div>
      {/* Adoption Strategies Card - Now with internal static cards */}
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
          onClick={() => toggleSection("adoption")}
        >
          <h2 style={styles.cardTitle}>
            <FaUsersCog
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Adoption Strategies
          </h2>
          {expandedSections.adoption ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.adoption && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            <p style={styles.paragraph}>
              Successful implementation of Resolve requires active leadership
              involvement. Use these key strategies to ensure agent adoption:
            </p>
            {/* Grid container for the 4 static cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive columns
                gap: "16px",
                marginTop: "20px",
              }}
            >
              {/* Card 1: Team Meetings */}
              <div
                style={{
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  padding: "16px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${styles.colors?.electricBlue}`,
                }}
              >
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                    color: styles.colors?.electricBlue,
                  }}
                >
                  <FaUsers /> Team Meetings
                </h3>
                <ul
                  style={{
                    ...styles.list,
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {renderListItem("Make Resolve a recurring topic.")}
                  {renderListItem("Share experiences & success stories.")}
                  {renderListItem("Rotate agents presenting use cases.")}
                  {renderListItem("Use meeting time for practice/Q&A.")}
                  {renderListItem("Address common challenges as a group.")}
                </ul>
              </div>

              {/* Card 2: Real-Time Support */}
              <div
                style={{
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  padding: "16px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${styles.colors?.electricBlue}`,
                }}
              >
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                    color: styles.colors?.electricBlue,
                  }}
                >
                  <FaHeadset /> Real-Time Support
                </h3>
                <ul
                  style={{
                    ...styles.list,
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {renderListItem("Be available (floor/virtual) during calls.")}
                  {renderListItem("Respond promptly to Resolve questions.")}
                  {renderListItem("Encourage use on WiFi-related calls.")}
                  {renderListItem("Help troubleshoot trial issues.")}
                  {renderListItem("Proactively check daily agent usage.")}
                </ul>
              </div>

              {/* Card 3: Coaching & Mentoring */}
              <div
                style={{
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  padding: "16px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${styles.colors?.electricBlue}`,
                }}
              >
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                    color: styles.colors?.electricBlue,
                  }}
                >
                  <FaChalkboardTeacher /> Coaching & Mentoring
                </h3>
                <ul
                  style={{
                    ...styles.list,
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {renderListItem("Provide 1:1 coaching for extra support.")}
                  {renderListItem("Schedule short (10min) check-ins.")}
                  {renderListItem("Review weekly usage reports together.")}
                  {renderListItem("Assign specific 'homework' tasks.")}
                  {renderListItem("Recognize consistent usage.")}
                </ul>
              </div>

              {/* Card 4: Practice & Learning */}
              <div
                style={{
                  backgroundColor: `${styles.colors?.cloudGrey}30`,
                  padding: "16px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${styles.colors?.electricBlue}`,
                }}
              >
                <h3
                  style={{
                    ...styles.heading3,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: 0,
                    color: styles.colors?.electricBlue,
                  }}
                >
                  <FaChalkboardTeacher /> Practice & Learning
                </h3>
                <ul
                  style={{
                    ...styles.list,
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {renderListItem("Allocate time for practice.")}
                  {renderListItem("Create exercises for real scenarios.")}
                  {renderListItem("Remind agents of learning resources.")}
                  {renderListItem("Request weekly feature focus & sharing.")}
                  {renderListItem("Include in new hire onboarding.")}
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* User Administration Guide Card */}
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
          onClick={() => toggleSection("userAdmin")}
        >
          <h2 style={styles.cardTitle}>
            <FaUserShield
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            User Administration Guide
          </h2>
          {expandedSections.userAdmin ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.userAdmin && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            {/* Content remains the same */}
            <p style={styles.paragraph}>
              As a user admin, you can manage access to Resolve through the
              Admin section:
            </p>
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                marginBottom: "20px",
                backgroundColor: `${styles.colors?.cloudGrey}40`,
                borderRadius: "8px",
                borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
              }}
            >
              <h3
                style={{
                  ...styles.heading3,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                <FaUserPlus style={{ color: styles.colors?.primary }} /> Adding
                A New User
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
                  Log into Resolve: resolve.routethis.com
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Click menu icon (top left) -> User Admin.
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Click "Add Users +".
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Enter agent email(s) (comma-separated for multiple).
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Select the appropriate Group (for reporting).
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  Users receive login credentials via email from
                  team@routethis.com.
                </li>
              </ol>
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
                <FaLayerGroup style={{ color: styles.colors?.electricBlue }} />{" "}
                Group Management
              </h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Create groups for different teams or locations (e.g., "SMC
                  UK", "Call Center SA").
                </li>
                <li style={styles.listItem}>
                  Assign users to groups during creation or edit later.
                </li>
                <li style={styles.listItem}>
                  Groups are primarily for filtering reports and organization;
                  they don't affect user permissions.
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
                <FaLock style={{ color: styles.colors?.electricBlue }} />{" "}
                Setting Permissions
              </h3>
              <ul style={{ ...styles.list, marginBottom: 0 }}>
                <li style={{ ...styles.listItem, marginBottom: "6px" }}>
                  <strong style={styles.strong}>Account Admin Access:</strong>{" "}
                  Grants ability to manage users (add, edit, assign groups,
                  manage permissions). Assign sparingly.
                </li>
                <li style={styles.listItem}>
                  <strong style={styles.strong}>Photo Administrator:</strong>{" "}
                  Grants ability to delete photos from Live View sessions if a
                  customer requests removal due to privacy concerns.
                </li>
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Monitoring Progress Card */}
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
          onClick={() => toggleSection("monitoring")}
        >
          <h2 style={styles.cardTitle}>
            <FaChartBar
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Monitoring Progress
          </h2>
          {expandedSections.monitoring ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.monitoring && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            {/* Using updated renderMonitoringListItem helper */}
            <p style={styles.paragraph}>
              Utilize the{" "}
              <strong style={styles.strong}>Analytics section</strong> within
              the Resolve dashboard to view usage reports and track adoption:
            </p>
            <ul style={{ ...styles.list, listStyle: "none", paddingLeft: 0 }}>
              {renderMonitoringListItem(
                <FaUsers />,
                "Unique Customers Helped: Track overall reach."
              )}
              {renderMonitoringListItem(
                <FaTools />,
                "Agent Tool Usage: See which features (Scan, Live View, etc.) are being used most."
              )}
              {renderMonitoringListItem(
                <FaChartLine />,
                "Agent Tool Trends: Monitor usage patterns over time."
              )}
            </ul>
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                backgroundColor: `${styles.colors?.info}10`,
                borderRadius: "6px",
                borderLeft: `3px solid ${styles.colors?.info}`,
              }}
            >
              <FaInfoCircle
                style={{
                  color: styles.colors?.info,
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
                Analytics reports typically have a 24-hour processing delay.
                Review these metrics weekly with your team and during individual
                agent coaching sessions.
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Overcoming Common Barriers Card */}
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
          onClick={() => toggleSection("barriers")}
        >
          <h2 style={styles.cardTitle}>
            <FaCommentDots
              style={{ marginRight: "8px", color: styles.colors?.primary }}
            />
            Overcoming Common Barriers
          </h2>
          {expandedSections.barriers ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {expandedSections.barriers && (
          <div style={{ animation: "fadeIn 0.3s ease-in", paddingTop: "16px" }}>
            {/* Using renderBarrierItem helper */}
            {renderBarrierItem(
              "I already know how to troubleshoot; I don't need another tool.",
              "Acknowledge their expertise. Remind them Resolve provides deeper network visibility, structured workflows, and aims to improve their KPIs (like FCR, AHT reduction over time) and reduce escalations."
            )}
            {renderBarrierItem(
              "I don't know which button to press or how it works.",
              "Direct them to specific training resources (this portal, job aids). Schedule brief practice sessions or 1:1 coaching. Emphasize starting with Network Scan."
            )}
            <div
              style={{
                marginBottom: 0,
                paddingBottom: 0,
                borderBottom: "none",
              }}
            >
              {renderBarrierItem(
                "I don't see value in the tool.",
                "Gently probe their actual usage. Often, perceived lack of value stems from infrequent use. Use usage reports as a coaching starting point. Highlight specific scenarios where Resolve saved time or prevented an escalation for other agents."
              )}
            </div>
          </div>
        )}
      </motion.div>

      {/* REMOVED Success Metrics Management Card */}

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

export default LeadershipContent;
