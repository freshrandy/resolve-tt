import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInfoCircle,
  FaCalendarAlt,
  FaNetworkWired,
  FaChartLine,
  FaLaptopHouse,
  FaChevronDown,
  FaChevronRight,
  // FaBullseye, // Removed
  // FaSyncAlt, // Removed
  // FaTruck, // Removed
  // FaExchangeAlt, // Removed
  // FaThumbsUp, // Removed
  // FaClock, // Removed
  // FaComments, // Removed
  FaUsers, // Subscriber base
  FaEyeSlash, // Visibility issue
  FaRoute, // Legacy routers
  FaSignOutAlt, // Churn
  FaExclamationTriangle, // Challenges
  FaBroadcastTower, // Shell Acquisition
  FaWrench, // Truck roll cost
  FaListAlt, // Trial Parameters / Key Activities / Success Metrics
  FaClipboardList, // Feedback Form
  FaUserTie, // Interviews
} from "react-icons/fa"; // Removed unused icons

// Receive styles object as props
const HomeContent = ({ styles }) => {
  // State to track expanded sections - objectives removed
  const [expandedSections, setExpandedSections] = useState({
    // objectives: true, // Removed
    context: true,
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
        delay: i * 0.08, // Adjusted delay slightly
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Updated Phases data for timeline with new Phase 1 content
  const phases = [
    {
      id: "phase1",
      title: "Phase 1: SMC Trial Overview", // Updated Title
      dates: "May 2025 (1-2 weeks)",
      content: (
        <>
          {/* Using subsections for clarity */}
          <div>
            <h4
              style={{
                ...styles.heading3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: 0,
                marginBottom: "8px",
              }}
            >
              <FaListAlt style={{ color: styles.colors?.electricBlue }} /> Trial
              Parameters
            </h4>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginBottom: "16px",
              }}
            >
              <li style={styles.listItem}>
                Participants: 10 UK-based Second Line Support (SMC) agents
              </li>
              <li style={styles.listItem}>Duration: 1-2 week timeframe</li>
              <li style={styles.listItem}>
                Target Usage: 150 uses across all tools (collective)
              </li>
              <li style={styles.listItem}>
                Focus: Quality of testing and feedback, thorough exploration
                required.
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                ...styles.heading3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: 0,
                marginBottom: "8px",
              }}
            >
              <FaClipboardList style={{ color: styles.colors?.electricBlue }} />{" "}
              Agent Key Activities
            </h4>
            <ul
              style={{
                ...styles.list,
                paddingLeft: "20px",
                marginBottom: "16px",
              }}
            >
              <li style={{ ...styles.listItem, marginBottom: "8px" }}>
                <strong style={styles.strong}>Mandatory Feedback:</strong>{" "}
                Agents will need to complete the "RouteThis Resolve Usage
                Survey" form after <strong style={styles.strong}>EACH</strong>{" "}
                use:
                <ul
                  style={{
                    ...styles.list,
                    paddingLeft: "20px",
                    marginTop: "6px",
                  }}
                >
                  <li style={styles.listItem}>
                    Select tools used (Scan, Speedtest, Photo, Video, Deadspots,
                    Router Login).
                  </li>
                  <li style={styles.listItem}>Rate ease of use (1-5 stars).</li>
                  <li style={styles.listItem}>
                    Indicate if Resolve helped resolution.
                  </li>
                  <li style={styles.listItem}>Provide additional comments.</li>
                </ul>
              </li>
              <li style={styles.listItem}>
                <strong style={styles.strong}>Interviews:</strong> Participate
                in a 30-minute interview with RouteThis team (if selected).
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                ...styles.heading3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: 0,
                marginBottom: "8px",
              }}
            >
              <FaUserTie style={{ color: styles.colors?.electricBlue }} />{" "}
              Success Measurement
            </h4>
            <p style={styles.paragraph}>
              Success for this technical validation phase is measured{" "}
              <strong style={styles.strong}>qualitatively</strong> via:
            </p>
            <ul
              style={{ ...styles.list, paddingLeft: "20px", marginBottom: 0 }}
            >
              <li style={styles.listItem}>Feedback forms submitted</li>
              <li style={styles.listItem}>Direct agent interviews</li>
              <li style={styles.listItem}>Manager observations & feedback</li>
              <li style={styles.listItem}>Trial team weekly check-ins</li>
            </ul>
          </div>
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
            into daily workflows for 30 days. Focus: operational impact and ROI
            based on key metrics.
          </p>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Integration Points:</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: "8px", paddingLeft: "16px" }}>
            <li style={styles.listItem}>
              Use for suspected in-home WiFi issues
            </li>
            <li style={styles.listItem}>
              Leverage tools (Scan, Video, etc.) for diagnosis
            </li>
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

  // Content for the TalkTalk Context section (Enhanced for full width)
  const talkTalkContextContent = (
    <div
      style={{
        animation: "fadeIn 0.3s ease-in",
        paddingTop: "16px",
      }}
    >
      {/* Subscriber Info (Still side-by-side) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            flex: "1 1 200px", // Allow shrinking more
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
            flex: "1 1 200px", // Allow shrinking more
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
      {/* Using Grid for challenges */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Responsive columns
          gap: "16px 24px", // Row and Column gap
          listStyle: "none",
          paddingLeft: 0,
          marginBottom: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FaEyeSlash
            style={{
              fontSize: "1.5rem",
              color: styles.colors?.electricBlue,
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <strong
              style={{
                ...styles.strong,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Lack of Network Visibility
            </strong>
            <span style={{ fontSize: "0.9rem", color: styles.colors?.ash }}>
              No diagnostic insight into ~60% of customer home WiFi
              environments.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FaRoute
            style={{
              fontSize: "1.5rem",
              color: styles.colors?.electricBlue,
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <strong
              style={{
                ...styles.strong,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Legacy & BYOD Routers
            </strong>
            <span style={{ fontSize: "0.9rem", color: styles.colors?.ash }}>
              ~33% of customers use older or third-party equipment, complicating
              support.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FaBroadcastTower
            style={{
              fontSize: "1.5rem",
              color: styles.colors?.warning,
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <strong
              style={{
                ...styles.strong,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Acquisition Pressure
            </strong>
            <span style={{ fontSize: "0.9rem", color: styles.colors?.ash }}>
              Integrating ~500k+ Shell Energy customers adds to the unsupported
              device challenge.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FaSignOutAlt
            style={{
              fontSize: "1.5rem",
              color: styles.colors?.danger || "#EF4444",
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <strong
              style={{
                ...styles.strong,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Significant WiFi Churn
            </strong>
            <span style={{ fontSize: "0.9rem", color: styles.colors?.ash }}>
              Poor WiFi experience contributes to 3% of *all* churn and 6% churn
              after WiFi-related contacts.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FaWrench
            style={{
              fontSize: "1.5rem",
              color: styles.colors?.danger || "#EF4444",
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <strong
              style={{
                ...styles.strong,
                display: "block",
                marginBottom: "4px",
              }}
            >
              High Truck Roll Costs
            </strong>
            <span style={{ fontSize: "0.9rem", color: styles.colors?.ash }}>
              Each unnecessary technician visit costs £52 - £151.54, impacting
              operational expenses.
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* MOVED TalkTalk Context Section to the top */}
      <motion.div
        custom={0} // First card
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={{ ...styles.card }} // Full width
      >
        {/* Clickable Header DIV */}
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
            TalkTalk Context & Trial Motivation
          </h2>
          {expandedSections.context ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {/* Conditional Content Rendering */}
        {expandedSections.context && talkTalkContextContent}
      </motion.div>

      {/* REMOVED Business Objectives Section */}

      {/* Implementation Timeline Section */}
      <motion.div
        custom={1} // Updated index
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={styles.card}
      >
        {/* Title H2 */}
        <h2 style={styles.cardTitle}>
          <FaCalendarAlt
            style={{ marginRight: "8px", color: styles.colors?.primary }}
          />
          Implementation Timeline & Phase Details
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
            marginTop: "16px",
          }}
        >
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
            }}
            className="timeline-connector-line"
          />
          {phases.map((phase) => (
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
              {/* Phase Content (Now includes updated Phase 1) */}
              <div>{phase.content}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Custom CSS for animations and responsive timeline connector */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          /* Hide timeline connector line on small screens */
          @media (max-width: 767px) {
            .timeline-connector-line {
               display: none !important;
             }
           }
        `}
      </style>
    </div>
  );
};

export default HomeContent;
