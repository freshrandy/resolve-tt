// FixItCardsContent.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronRight,
  FaTimes,
  FaWifi,
  FaMobileAlt,
  FaServer,
  FaBroadcastTower,
  FaSignal,
  FaNetworkWired,
  FaTools,
  FaCog,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

// --- Card Modal Component ---
const CardModal = ({ card, onClose, styles }) => {
  if (!card) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const contentContainerStyle = {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    padding: "32px",
    width: "90%",
    maxWidth: "700px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
  };

  const modalSectionHeadingStyle = {
    ...styles.heading3,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "1.15rem",
    color: styles.colors?.slate || "#20242A", // Use slate for heading text
    borderBottom: `2px solid ${styles.colors?.cloudGrey || "#EEF2F6"}`, // Light grey border
    paddingBottom: "10px",
  };

  // Define icon colors for sections (grayscale)
  const sectionIconColor = styles.colors?.ash || "#3D4550";

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      onClick={onClose}
    >
      <motion.div
        style={contentContainerStyle}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: styles.colors?.ash || "#3D4550",
          }}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
            paddingBottom: "20px",
            borderBottom: `3px solid ${styles.colors?.slate || "#20242A"}`,
          }}
        >
          <div
            style={{
              backgroundColor: styles.colors?.slate || "#20242A", // Dark background for icon
              color: "white",
              borderRadius: "10px",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
              flexShrink: 0,
            }}
          >
            {card.icon}
          </div>
          <div>
            <h2
              style={{
                ...styles.cardTitle,
                marginTop: 0,
                marginBottom: "4px",
                fontSize: "1.75rem",
                borderBottom: "none",
                paddingBottom: 0,
                color: styles.colors?.slate || "#20242A",
              }}
            >
              {card.title}
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: styles.colors?.ash || "#3D4550",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Displayed as: "{card.displayTitle}"
            </p>
          </div>
        </div>

        {/* Key Information */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={modalSectionHeadingStyle}>
            <FaInfoCircle
              style={{ color: sectionIconColor, fontSize: "1.2em" }}
            />
            Key Information to Share with Customer
          </h3>
          <ul style={{ ...styles.list, paddingLeft: "20px", marginBottom: 0 }}>
            {card.keyInfo.map((info, idx) => (
              <li
                key={idx}
                style={{ ...styles.listItem, marginBottom: "10px" }}
              >
                {info}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Steps */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={modalSectionHeadingStyle}>
            <FaCheckCircle
              style={{ color: sectionIconColor, fontSize: "1.2em" }}
            />
            Your Action Steps
          </h3>
          <ul style={{ ...styles.list, paddingLeft: "20px", marginBottom: 0 }}>
            {card.actionSteps.map((step, idx) => (
              <li
                key={idx}
                style={{ ...styles.listItem, marginBottom: "10px" }}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Tips */}
        <div>
          <h3 style={modalSectionHeadingStyle}>
            <FaLightbulb
              style={{ color: sectionIconColor, fontSize: "1.2em" }}
            />
            Quick Tips for You
          </h3>
          <ul style={{ ...styles.list, paddingLeft: "20px", marginBottom: 0 }}>
            {card.quickTips.map((tip, idx) => (
              <li
                key={idx}
                style={{ ...styles.listItem, marginBottom: "10px" }}
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main FixItCardsContent Component ---
const FixItCardsContent = ({ styles }) => {
  const [selectedCardForModal, setSelectedCardForModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCardForModal(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCardForModal(null), 300);
  };

  const cardGridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  // Fix-it Cards Data - REMOVED card.color property from each card object
  const fixItCards = [
    {
      id: "phone-5ghz",
      title: "Phone 5GHz Capability",
      category: "device", // Category can still be useful for other logic if needed in future
      displayTitle: "Phone is more than 5 years",
      icon: <FaMobileAlt />,
      // color: styles.colors?.warning || "#f59e0b", // REMOVED
      keyInfo: [
        "Your phone might not be reaching the full plan speeds over WiFi because it doesn't support the faster 5GHz band.",
        "We've identified this based on your specific phone model in our system.",
      ],
      actionSteps: [
        "Send Education: Click to send educational materials directly to the customer's app.",
        "Explain Limitation: Clearly state this is a limitation of their older device, not an issue with the internet service.",
        "Verify Service: Ask the customer to run a speed test on a newer device to demonstrate the service is delivering the correct speeds.",
      ],
      quickTips: [
        "Common Devices: Smartphones/tablets 5+ years old.",
        "Key Message: Emphasize it's a device limitation, not a service issue.",
        "Crucial Test: The alternative device speed test is vital to prove the service is performing correctly.",
        "Database: RouteThis has a database of phone models and capabilities.",
      ],
    },
    {
      id: "too-many-devices",
      title: "Too Many Devices on Network",
      category: "bandwidth",
      displayTitle: "Too Many Devices",
      icon: <FaNetworkWired />,
      // color: styles.colors?.electricBlue || "#0066FF", // REMOVED
      keyInfo: [
        "It looks like there are quite a few devices connected to your network right now, and this might be causing the slower speeds you're experiencing as the available bandwidth is being shared.",
        "Modern devices, especially for things like 4K streaming, can use a lot of speed. For example, a 4K video might need around 25Mbps.",
      ],
      actionSteps: [
        "Walk Through Limitations: Use the prompt to guide the customer through the limitations of their current plan's speed when multiple devices are active.",
        "Suggest Upgrade (If Needed): If their current plan doesn't meet their usage needs, suggest a plan upgrade.",
        "Send Education: Send educational material directly to their phone via RouteThis Resolve.",
      ],
      quickTips: [
        "Core Issue: The total demand from devices exceeds the available plan bandwidth.",
        "Education Focus: Help the customer understand how bandwidth is shared.",
        "Resolve Tool: Use RouteThis Resolve to show the customer the list of connected devices.",
      ],
    },
    {
      id: "device-too-far",
      title: "Device(s) Too Far From Router",
      category: "coverage",
      displayTitle: "Device Too Far",
      icon: <FaSignal />,
      // color: styles.colors?.danger || "#ef4444", // REMOVED
      keyInfo: [
        "It appears some of your devices are a bit too far from the WiFi router, which can lead to issues like dropped connections, slow speeds, video buffering, or lag.",
        "For the best performance, devices need a strong connection to the router.",
      ],
      actionSteps: [
        "Use Deadspot Detector: Access the RouteThis Resolve deadspot detector to help the customer identify better locations for their devices or to improve router placement.",
        "Suggest Upgrades: If appropriate, you can discuss WiFi extenders or mesh systems.",
        "Send Education: Provide information about WiFi coverage and how distance/obstacles affect signal strength.",
      ],
      quickTips: [
        "Core Issue: Physical distance or obstructions weakening the WiFi signal to multiple devices.",
        "Focus: Improving device placement or overall WiFi coverage.",
        "Customer Experience: Remind them that devices work best with strong signals.",
      ],
    },
    {
      id: "high-bandwidth-usage",
      title: "High Bandwidth Usage (Streaming/Downloads)",
      category: "bandwidth",
      displayTitle: "Customer is streaming",
      icon: <FaBroadcastTower />,
      // color: styles.colors?.info || "#3b82f6", // REMOVED
      keyInfo: [
        "Our scan shows that your internet connection is currently using a significant amount of bandwidth, likely due to activities like video streaming, heavy downloads, or online gaming.",
        "Your internet plan has a certain amount of bandwidth, and when one activity uses a lot, it can affect the speed available for other devices or applications.",
      ],
      actionSteps: [
        "Pause Activities/Reboot Router: Ask the customer to temporarily pause or disconnect devices that might be heavily using bandwidth (streaming, downloads). OR, suggest restarting their router to clear current sessions.",
        "Verify Speed: The system will run a speed test after the reboot/pause to check if speeds improve.",
        "Educate on Plan Limits: If speeds are still a concern relative to their plan, walk them through their plan's limitations and how their usage impacts it.",
        "Suggest Upgrade (If Needed): If their typical usage regularly exceeds their plan, suggest an upgrade.",
      ],
      quickTips: [
        "Finite Resource: Help customer understand bandwidth is shared.",
        "Two-Pronged Solution: Temporarily reduce load to test (turn off other devices), then educate on managing bandwidth or upgrading plan.",
      ],
    },
    {
      id: "scan-too-far",
      title: "Scan Performed Too Far From Router",
      category: "diagnostic",
      displayTitle: "Scan Ran Too Far From Router",
      icon: <FaWifi />,
      // color: styles.colors?.warning || "#f59e0b", // REMOVED
      keyInfo: [
        "The recent network scan seems to have been run a bit far from your WiFi router. To get the most accurate reading of your internet performance, it's best to be close to the router.",
        "Signal strength and speed can decrease the further you are from the router.",
      ],
      actionSteps: [
        "Request Re-Scan Closer: Ask the customer to move closer to the router.",
        "Initiate New Scan: Kick off a brand new scan once they are in a better position.",
        "Educate (Post-Scan): Once an accurate close-range scan confirms service speed, educate the customer on how factors within their home can cause slower speeds.",
      ],
      quickTips: [
        "Goal: Get an accurate baseline speed test close to the router.",
        "Proof of Service: A good scan near the router helps demonstrate the service is working as expected.",
        "Problem Isolation: This helps differentiate between a service issue and a home WiFi coverage issue.",
      ],
    },
    {
      id: "connect-5ghz",
      title: "Connect to Faster 5GHz WiFi Network",
      category: "connectivity",
      displayTitle: "Connect to the faster 5GHz network",
      icon: <FaWifi />,
      // color: styles.colors?.success || "#10b981", // REMOVED
      keyInfo: [
        "Your device is currently connected to the 2.4GHz WiFi network, which is good for range but can sometimes be slower or more congested.",
        "There's a faster 5GHz network available from your router. Connecting to this, especially when you're closer to the router, can often provide a better speed experience.",
      ],
      actionSteps: [
        "Guide Connection Change: Walk the customer through the steps to connect their specific phone (iOS or Android) to the 5GHz network.",
        "Run Speed Test: After they connect to 5GHz (ensure they are near the router), have them run a speed test to see the improvement.",
        "Send Education (Resolve): Use RouteThis Resolve to send educational material explaining when to use 5GHz vs. 2.4GHz.",
      ],
      quickTips: [
        "Benefit: 5GHz offers higher speeds and less interference, but typically has less range than 2.4GHz.",
        "Key for Testing: Connecting to 5GHz near the router helps show the true speed potential.",
      ],
    },
    {
      id: "range-extender",
      title: "Connected to Range Extender (Poor Signal)",
      category: "coverage",
      displayTitle: "Connected to a range extender",
      icon: <FaSignal />,
      // color: styles.colors?.warning || "#f59e0b", // REMOVED
      keyInfo: [
        "Your device is currently connected through a WiFi range extender.",
        "It seems the connection quality from your device through the extender isn't optimal. This could mean the extender itself isn't positioned in the best spot.",
      ],
      actionSteps: [
        "Use Deadspot Detector (Resolve): Access the RouteThis Resolve deadspot detector.",
        "Guide Extender Repositioning: Use the tool to help the customer find a better location for their range extender.",
      ],
      quickTips: [
        "Extender Logic: Extenders need to be placed where they can get a good signal from the router to be effective.",
        "Focus: Optimizing the placement of the existing extender.",
      ],
    },
    {
      id: "2-4ghz-congestion",
      title: "2.4GHz WiFi Network Congestion",
      category: "interference",
      displayTitle: "2.4GHz network is congested",
      icon: <FaBroadcastTower />,
      // color: styles.colors?.danger || "#ef4444", // REMOVED
      keyInfo: [
        "Your 2.4GHz WiFi network might be experiencing interference from other nearby WiFi networks or common household devices that also use this frequency.",
        "This interference can slow down your WiFi performance, reduce its range, and sometimes cause connections to drop.",
        "Changing the WiFi channel your router uses can often help reduce this congestion.",
      ],
      actionSteps: [
        "Change WiFi Channel: Use RouteThis Resolve or your own remote access tool to change the customer's 2.4GHz WiFi channel to a less congested one.",
        "Verify Performance: After changing the channel, run a speed test to confirm if performance has improved.",
      ],
      quickTips: [
        "2.4GHz Band: Prone to congestion due to many devices using it (microwaves, Bluetooth, other WiFi).",
        "Channels: There are typically 11 (or 13/14 in some regions) channels in the 2.4GHz band.",
        "Goal: Find the 'quietest' channel for the customer's environment.",
      ],
    },
    {
      id: "router-outdated",
      title: "Router is Outdated (5+ Years Old)",
      category: "equipment",
      displayTitle: "Router is more than 5 years old",
      icon: <FaServer />,
      // color: styles.colors?.warning || "#f59e0b", // REMOVED
      keyInfo: [
        "Our records, or the information from your router, indicate it was released over five years ago.",
        "Older routers may not support the latest WiFi technologies (like 'AC' or 'AX' WiFi) or the full speeds of newer internet plans.",
        "Over time, electronic devices can also degrade in performance.",
      ],
      actionSteps: [
        "Suggest New Router: Suggest that they purchase a newer router to take full advantage of their internet plan and newer device capabilities.",
        "Suggest Upgrade: Suggest or initiate an upgrade to a newer model router.",
      ],
      quickTips: [
        "Key Impact: Can be a significant bottleneck for modern internet speeds and device features.",
        "Benefits of Newer Routers: Better speeds, improved range, more device capacity, enhanced security features.",
      ],
    },
    {
      id: "router-location",
      title: "Router Location Not Optimal",
      category: "placement",
      displayTitle: "Router location is not optimal",
      icon: <FaCog />,
      // color: styles.colors?.electricBlue || "#0066FF", // REMOVED
      keyInfo: [
        "It appears your router might be located in an area where there's interference from other electronic devices, or it's positioned in a way that's not ideal for WiFi signal distribution.",
        "This can cause slower speeds, connection drops, or reduced WiFi coverage throughout your home.",
      ],
      actionSteps: [
        "Use LiveView (RouteThis): You will be guided to use RouteThis LiveView to see the customer's home environment through their phone's camera.",
        "Identify Issues: Look for common sources of interference or poor placement.",
        "Guide Relocation: Advise the customer to move either the router to a more central, open location, or to move interfering devices away from the router.",
      ],
      quickTips: [
        "Focus: Physical environment around the router.",
        "Ideal Router Placement: Central, elevated, open area, away from major obstructions and interference sources.",
        "LiveView: A powerful tool to visually assess the situation without a home visit.",
      ],
    },
    {
      id: "service-line-issue",
      title: "Potential Service Line Issue",
      category: "service",
      displayTitle: "Issue with service line",
      icon: <FaExclamationTriangle />,
      // color: styles.colors?.danger || "#ef4444", // REMOVED
      keyInfo: [
        "Our diagnostic tests, specifically the ping tests to various websites, are showing some inconsistencies that might indicate an issue with the internet service coming into your home.",
        "As a first step, we'd like to try restarting your router, as this can sometimes resolve temporary connection problems.",
      ],
      actionSteps: [
        "Guide Router Reboot: First, ask the customer to restart their router.",
        "Automatic Speed Test & Ping Verification: Once RouteThis detects the router has rebooted, it will automatically run tests to confirm if the router restart resolved the issue.",
        "Escalate If unresolved: If poor ping results persist after the reboot, this strongly suggests a deeper service line issue that may require escalation.",
      ],
      quickTips: [
        "Ping Tests: Measure latency and packet loss to external servers, indicating the quality of the connection beyond the customer's local network.",
        "Router Reboot First: Always a good initial step before suspecting a line fault.",
        "Escalation Path: Be prepared to escalate if the reboot doesn't fix poor ping results.",
      ],
    },
  ];

  const defaultCardColor = styles.colors?.slate || "#20242A"; // Default dark color for accents

  return (
    <div>
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardGridItemVariants}
        style={styles.card}
      >
        <h2
          style={{ ...styles.cardTitle, display: "flex", alignItems: "center" }}
        >
          <FaTools
            style={{
              marginRight: "12px",
              color: styles.colors?.primary || defaultCardColor,
              fontSize: "1.3em",
            }}
          />
          Fix-It Cards Reference Guide
        </h2>
        <p style={styles.paragraph}>
          Fix It Cards enabled for TalkTalk trial - included agent walkthrough
          and more info.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {fixItCards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={cardGridItemVariants}
            onClick={() => openModal(card)}
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
              padding: "20px",
              cursor: "pointer",
              border: `1px solid ${styles.colors?.cloudGrey || "#EEF2F6"}`,
              borderLeft: `5px solid ${defaultCardColor}`, // Use default dark color for left border
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            whileHover={{
              transform: "translateY(-3px)",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  backgroundColor: `${styles.colors?.cloudGrey || "#EEF2F6"}`, // Light grey background for icon
                  color: defaultCardColor, // Dark color for icon
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  ...styles.heading3,
                  marginTop: 0,
                  marginBottom: 0,
                  color: styles.colors?.slate || "#20242A",
                  fontSize: "1.05rem",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: styles.colors?.ash || "#3D4550",
                margin: "0 0 10px 0",
                fontStyle: "italic",
                paddingLeft: "52px",
              }}
            >
              "{card.displayTitle}"
            </p>
            <FaChevronRight
              style={{
                marginLeft: "auto",
                color: defaultCardColor,
                marginTop: "auto",
              }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCardForModal && (
          <CardModal
            card={selectedCardForModal}
            onClose={closeModal}
            styles={styles}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FixItCardsContent;
