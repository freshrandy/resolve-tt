import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInfoCircle,
  FaCalendarAlt,
  FaNetworkWired,
  FaUsersCog, // Keep for Quick Resources if needed, otherwise remove
  FaChartLine,
  FaLaptopHouse,
  // FaCheckCircle, // Removed as Support section is gone
  FaChevronDown,
  FaChevronRight,
  FaChalkboardTeacher, // For Quick Resources
  FaBullseye, // Objectives
  FaSyncAlt, // Repeat Call Rate
  FaTruck, // Truck Roll
  FaExchangeAlt, // CPE Replacement
  FaThumbsUp, // NPS
  FaClock, // AHT
  FaComments, // Agent Feedback
  FaUsers, // Subscriber base
  FaEyeSlash, // Visibility issue
  FaRoute, // Legacy routers
  FaSignOutAlt, // Churn
  FaExclamationTriangle, // Challenges
  FaBroadcastTower, // Shell Acquisition
  FaWrench, // Truck roll cost
} from "react-icons/fa";

// Receive styles object as props
const HomeContent = ({ styles }) => {
  // State to track expanded sections - preparation removed
  const [expandedSections, setExpandedSections] = useState({
    objectives: true,
    context: true,
    // preparation: true, // Removed
  });

  // Helper for section toggling
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
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Phases data for timeline
  const phases = [
    {
      id: "phase1",
      title: "Phase 1: SMC Testing",
      dates: "May 2025 (1-2 weeks)",
      content: (
        <>
          <p style={styles.paragraph}>
            10 UK-based Second Line Support (2LS) agents within the Service
            Management Center (SMC) will use Resolve for 1-2 weeks, targeting
            150 uses. Focus: technical validation and usability.
          </p>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Key Activities:</strong>
          </p>
          <ul
            style={{
              ...styles.list,
              marginTop: "8px",
              paddingLeft: "16px",
              marginBottom: 0,
            }}
          >
            <li style={styles.listItem}>Feedback form completion</li>
            <li style={styles.listItem}>Targeted agent interviews</li>
            <li style={styles.listItem}>VDI performance validation</li>
            <li style={styles.listItem}>Workflow integration assessment</li>
          </ul>
        </>
      ),
      icon: <FaLaptopHouse />,
      status: "Upcoming",
      color: styles.colors?.electricBlue || "#4F46E5",
    },
    {
      id: "phase2",
      title: "Phase 2: Call Center Trial",
      dates: "June-July 2025 (30 days)",
      content: (
        <>
          <p style={styles.paragraph}>
            15-20 South Africa-based Call Center agents will integrate Resolve
            into daily workflows for 30 days. Focus: operational impact and ROI.
          </p>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Integration Points:</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: "8px", paddingLeft: "16px" }}>
            <li style={styles.listItem}>
              Use for suspected in-home WiFi issues
            </li>
            <li style={styles.listItem}>Leverage tools (Scan, Video, etc.)</li>
            <li style={styles.listItem}>
              Apply before escalating WiFi tickets
            </li>
          </ul>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Success Metrics Focus:</strong>
          </p>
          <ul
            style={{
              ...styles.list,
              marginTop: "8px",
              paddingLeft: "16px",
              marginBottom: 0,
            }}
          >
            <li style={styles.listItem}>Repeat Calls & Truck Rolls</li>
            <li style={styles.listItem}>CPE Replacement Rate</li>
            <li style={styles.listItem}>NPS & AHT impact</li>
            <li style={styles.listItem}>Agent adoption & feedback</li>
          </ul>
        </>
      ),
      icon: <FaChartLine />,
      status: "Planning",
      color: styles.colors?.success || "#10B981",
    },
  ];

  // Content for the Business Objectives
  const businessObjectivesContent = (
    <div style={{ animation: "fadeIn 0.3s ease-in" }}>
      {/* ... (Business Objectives content remains the same) ... */}
      <p style={styles.paragraph}>
        The implementation of RouteThis Resolve aims to achieve several key
        business objectives by improving diagnostic accuracy, resolution
        efficiency, and customer experience for WiFi-related issues.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", // Adjusted minmax for better fit
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Metric Cards - Using new icons */}
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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaSyncAlt style={{ color: styles.colors?.electricBlue }} /> Repeat
            Call Rate
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Reduce repeat contacts for the same issue within a set timeframe
            (e.g., 7 days).
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.success,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Lower rate vs. baseline
          </p>
        </div>

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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaTruck style={{ color: styles.colors?.electricBlue }} /> Truck
            Roll Rate
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Decrease unnecessary technician dispatches for WiFi problems
            solvable remotely.
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.success,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Lower rate vs. baseline
          </p>
        </div>

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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaExchangeAlt style={{ color: styles.colors?.electricBlue }} /> CPE
            Replacement
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Minimize unnecessary router/equipment replacements through better
            diagnosis.
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.success,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Lower rate vs. baseline
          </p>
        </div>

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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaThumbsUp style={{ color: styles.colors?.electricBlue }} /> NPS
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Improve customer satisfaction scores derived from post-interaction
            surveys.
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.success,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Higher score vs. baseline
          </p>
        </div>

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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaClock style={{ color: styles.colors?.electricBlue }} /> AHT
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Optimize Average Handle Time for WiFi issues (may rise during agent
            learning phase).
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.warning,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Stabilize/Improve post-trial
          </p>
        </div>

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
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaComments style={{ color: styles.colors?.electricBlue }} /> Agent
            Feedback
          </h3>
          <p style={{ ...styles.paragraph, fontSize: "0.9rem" }}>
            Gather positive qualitative feedback on platform usability and
            effectiveness.
          </p>
          <p
            style={{ ...styles.paragraph, marginBottom: 0, fontWeight: "500" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: styles.colors?.info,
                borderRadius: "50%",
                marginRight: "6px",
              }}
            ></span>
            Goal: Positive sentiment reports
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: `${styles.colors?.primary}10`,
          padding: "16px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div
          style={{
            color: styles.colors?.info,
            fontSize: "1.5rem",
            marginTop: "2px",
            flexShrink: 0,
          }}
        >
          <FaInfoCircle />
        </div>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          <strong style={styles.strong}>Success Tracking:</strong> Metrics will
          be compared pre- and post-Resolve for WiFi-related issues, using
          Ticket IDs provided during the trial for accurate data matching and
          analysis.
        </p>
      </div>
    </div>
  );

  // Content for the TalkTalk Context section (extracted for clarity)
  const talkTalkContextContent = (
    <div style={{ animation: "fadeIn 0.3s ease-in" }}>
      {/* Subscriber Info */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            flex: 1, // Grow equally
            minWidth: "180px", // Minimum width before wrapping
            backgroundColor: `${styles.colors?.electricBlue}10`,
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
            borderLeft: `4px solid ${styles.colors?.electricBlue}`,
          }}
        >
          <FaUsers
            style={{
              fontSize: "1.8rem",
              color: styles.colors?.electricBlue,
              marginBottom: "8px",
            }}
          />
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: styles.colors?.slate,
            }}
          >
            ~3 Million
          </div>
          <div style={{ fontSize: "0.85rem", color: styles.colors?.ash }}>
            Total Subscribers
          </div>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "180px",
            backgroundColor: `${styles.colors?.warning}10`,
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
            borderLeft: `4px solid ${styles.colors?.warning}`,
          }}
        >
          <FaBroadcastTower
            style={{
              fontSize: "1.8rem",
              color: styles.colors?.warning,
              marginBottom: "8px",
            }}
          />
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: styles.colors?.slate,
            }}
          >
            ~500k+
          </div>
          <div style={{ fontSize: "0.85rem", color: styles.colors?.ash }}>
            Shell Energy Acquired
          </div>
        </div>
      </div>

      {/* Why Trial Resolve? Section */}
      <h3
        style={{
          ...styles.heading3,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`,
          paddingBottom: "8px",
          marginBottom: "16px",
        }}
      >
        <FaExclamationTriangle style={{ color: styles.colors?.warning }} /> Key
        Challenges & Trial Motivation
      </h3>
      <ul
        style={{
          ...styles.list,
          listStyle: "none",
          paddingLeft: 0,
          marginBottom: 0,
        }}
      >
        <li
          style={{
            ...styles.listItem,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            borderBottom: `1px dashed ${styles.colors?.cloudGrey || "#e5e7eb"}`,
            paddingBottom: "12px",
          }}
        >
          <FaEyeSlash
            style={{
              fontSize: "1.2rem",
              color: styles.colors?.electricBlue,
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={styles.strong}>~60% Lack Visibility:</strong> No
            insight into the majority of home WiFi environments.
          </div>
        </li>
        <li
          style={{
            ...styles.listItem,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            borderBottom: `1px dashed ${styles.colors?.cloudGrey || "#e5e7eb"}`,
            paddingBottom: "12px",
          }}
        >
          <FaRoute
            style={{
              fontSize: "1.2rem",
              color: styles.colors?.electricBlue,
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={styles.strong}>~33% Legacy/BYOD:</strong> Significant
            portion using older or unsupported routers.
          </div>
        </li>
        <li
          style={{
            ...styles.listItem,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            borderBottom: `1px dashed ${styles.colors?.cloudGrey || "#e5e7eb"}`,
            paddingBottom: "12px",
          }}
        >
          <FaBroadcastTower
            style={{
              fontSize: "1.2rem",
              color: styles.colors?.warning,
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={styles.strong}>Acquisition Pressure:</strong>{" "}
            Integrating Shell Energy customers increases the unsupported device
            challenge.
          </div>
        </li>
        <li
          style={{
            ...styles.listItem,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            borderBottom: `1px dashed ${styles.colors?.cloudGrey || "#e5e7eb"}`,
            paddingBottom: "12px",
          }}
        >
          <FaSignOutAlt
            style={{
              fontSize: "1.2rem",
              color: styles.colors?.danger || "#EF4444",
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={styles.strong}>Significant Churn:</strong> 3% of all
            churn linked to poor WiFi; 6% of WiFi contacts end in churn.
          </div>
        </li>
        <li
          style={{
            ...styles.listItem,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: 0,
          }}
        >
          {" "}
          {/* Removed bottom border/padding */}
          <FaWrench
            style={{
              fontSize: "1.2rem",
              color: styles.colors?.danger || "#EF4444",
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={styles.strong}>High Truck Roll Costs:</strong> Each
            unnecessary visit costs £52 - £151.54.
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* Two Column Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {/* Business Objectives Section - Left Column */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          style={{
            ...styles.card,
            flex: "1 1 60%",
            minWidth: "350px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              borderBottom: expandedSections.objectives
                ? `1px solid ${styles.colors?.cloudGrey || "#e5e7eb"}`
                : "none",
              paddingBottom: expandedSections.objectives ? "12px" : "0",
              marginBottom: expandedSections.objectives ? "16px" : "0",
            }}
            onClick={() => toggleSection("objectives")}
          >
            <h2 style={{ ...styles.cardTitle, marginBottom: 0 }}>
              <FaBullseye
                style={{ marginRight: "8px", color: styles.colors?.primary }}
              />
              Business Objectives & Success Metrics
            </h2>
            {expandedSections.objectives ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </div>
          {expandedSections.objectives && businessObjectivesContent}
        </motion.div>

        {/* TalkTalk Context Section (Enhanced) - Right Column */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          style={{
            ...styles.card,
            flex: "1 1 30%",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleSection("context")}
          >
            <h2 style={styles.cardTitle}>
              <FaNetworkWired
                style={{
                  marginRight: "8px",
                  color: styles.colors?.electricBlue,
                }}
              />
              TalkTalk Context
            </h2>
            {expandedSections.context ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {/* Render the enhanced context content */}
          {expandedSections.context && talkTalkContextContent}
        </motion.div>
      </div>

      {/* Implementation Timeline Section */}
      <motion.div
        custom={2} // Adjusted index
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        <h2 style={styles.cardTitle}>
          <FaCalendarAlt
            style={{ marginRight: "8px", color: styles.colors?.primary }}
          />
          Implementation Timeline
        </h2>

        {/* Phase Implementation Sentence */}
        <div
          style={{
            backgroundColor: `${styles.colors?.primary}10`,
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              color: styles.colors?.primary,
              fontSize: "1.5rem",
              marginTop: "2px",
              flexShrink: 0,
            }}
          >
            <FaInfoCircle />
          </div>
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>
            The trial consists of two key phases: a technical validation with
            SMC agents, followed by an operational trial with Call Center agents
            measuring KPI impact.
          </p>
        </div>

        {/* Phase Details Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            position: "relative",
          }}
        >
          {/* Optional Connecting line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "40px",
              bottom: "40px",
              width: "2px",
              backgroundColor: styles.colors?.cloudGrey || "#D1D5DB",
              display: phases.length > 1 ? "block" : "none",
              zIndex: 0,
              // className: 'timeline-connector-line' // Use class for media query if needed
            }}
          />

          {phases.map((phase, index) => (
            <div
              key={phase.id}
              style={{
                backgroundColor: `${styles.colors?.cloudGrey}30`,
                padding: "20px",
                borderRadius: "12px",
                borderTop: `4px solid ${phase.color}`,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    backgroundColor: phase.color,
                    color: "white",
                    borderRadius: "50%",
                    minWidth: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {phase.icon}
                </div>
                <div>
                  <h3
                    style={{
                      ...styles.heading3,
                      marginTop: 0,
                      marginBottom: "4px",
                      color: phase.color,
                    }}
                  >
                    {phase.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: styles.colors?.ash,
                      fontWeight: "500",
                    }}
                  >
                    {phase.dates} ({phase.status})
                  </span>
                </div>
              </div>
              <div>{phase.content}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* REMOVED Support & Preparation Section */}

      {/* Quick Access Grid Cards */}
      <motion.div
        custom={3} // Adjusted index
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <h2 style={{ ...styles.sectionTitle, marginBottom: "16px" }}>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "3px",
              backgroundColor: styles.colors?.primary,
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          ></span>
          Quick Resources
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Training Materials Card */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              borderTop: `3px solid ${styles.colors?.primary}`,
            }}
            // onClick={() => navigateTo('/training')} // Example navigation
          >
            <div
              style={{
                backgroundColor: `${styles.colors?.primary}20`,
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                fontSize: "1.5rem",
                color: styles.colors?.primary,
              }}
            >
              <FaChalkboardTeacher />
            </div>
            <h3 style={{ ...styles.heading3, marginTop: 0 }}>
              Training Materials
            </h3>
            <p
              style={{ ...styles.paragraph, marginBottom: "12px", flexGrow: 1 }}
            >
              Access agent/leader training guides, feature documentation, and
              how-to's.
            </p>
            <div
              style={{
                color: styles.colors?.primary,
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View Training <FaChevronRight style={{ fontSize: "0.75rem" }} />
            </div>
          </motion.div>

          {/* Trial Resources Card */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              borderTop: `3px solid ${styles.colors?.electricBlue}`,
            }}
            // onClick={() => navigateTo('/resources')} // Example navigation
          >
            <div
              style={{
                backgroundColor: `${styles.colors?.electricBlue}20`,
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                fontSize: "1.5rem",
                color: styles.colors?.electricBlue,
              }}
            >
              <FaNetworkWired />
            </div>
            <h3 style={{ ...styles.heading3, marginTop: 0 }}>
              Trial Resources
            </h3>
            <p
              style={{ ...styles.paragraph, marginBottom: "12px", flexGrow: 1 }}
            >
              Find router info, phase details, workflows, and success metric
              definitions.
            </p>
            <div
              style={{
                color: styles.colors?.electricBlue,
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View Resources <FaChevronRight style={{ fontSize: "0.75rem" }} />
            </div>
          </motion.div>

          {/* Support & FAQ Card */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            style={{
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              borderTop: `3px solid ${styles.colors?.primary}`,
            }}
            // onClick={() => navigateTo('/support')} // Example navigation
          >
            <div
              style={{
                backgroundColor: `${styles.colors?.primary}20`,
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                fontSize: "1.5rem",
                color: styles.colors?.primary,
              }}
            >
              <FaUsersCog />{" "}
              {/* Changed from FaUsersCog to something more relevant like FaQuestionCircle if needed */}
            </div>
            <h3 style={{ ...styles.heading3, marginTop: 0 }}>Support & FAQ</h3>
            <p
              style={{ ...styles.paragraph, marginBottom: "12px", flexGrow: 1 }}
            >
              Get contact info, troubleshooting tips, VDI details, and
              frequently asked questions.
            </p>
            <div
              style={{
                color: styles.colors?.primary,
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View Support <FaChevronRight style={{ fontSize: "0.75rem" }} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          /* Optional: Hide timeline connector line on small screens */
          @media (max-width: 767px) { /* Adjust breakpoint as needed */
            .timeline-connector-line {
               display: none;
             }
           }
        `}
      </style>
    </div>
  );
};

export default HomeContent;
