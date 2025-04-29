import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

// Receive styles object as props
const AgentTrainingContent = ({ styles }) => {
  // Core features data remains the same
  const coreFeatures = [
    {
      title: "1. Network Scan",
      description: "Primary diagnostic tool",
      details: [
        "Runs ~2 mins",
        "Collects 150+ data points",
        "Categorizes issues",
        "Provides fix-it workflows",
      ],
    },
    {
      title: "2. Speed Test",
      description: "Measures connection speeds",
      details: ["Included in network scan", "Can run independently"],
    },
    {
      title: "3. Live View",
      description: "See what customer sees",
      details: ["Photo tool", "Video tool", "Annotation"],
    },
    {
      title: "4. Dead Spot Detector",
      description: "Maps WiFi coverage",
      details: ["Identifies poor coverage", "Router placement help"],
    },
    {
      title: "5. Router Login",
      description: "Remote router access",
      details: ["Make config changes", "Works across TalkTalk portfolio"],
    },
  ];
  // Derive button/panel styles from main styles object for consistency
  const disclosureButtonStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 16px",
    fontSize: "0.875rem",
    fontWeight: "500",
    textAlign: "left",
    color: styles.colors?.primary || "#58DBB9",
    backgroundColor: "rgba(88, 219, 185, 0.1)",
    borderRadius: "6px 6px 0 0",
    border: "none",
    cursor: "pointer",
    outline: "none",
  };
  const disclosurePanelStyle = {
    padding: "16px",
    fontSize: "0.875rem",
    color: styles.colors?.ash || "#3D4550",
    backgroundColor: "white",
    borderRadius: "0 0 6px 6px",
  };

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Getting Started</h2>
        <p style={styles.paragraph}>
          RouteThis Resolve is a mobile network diagnostic solution...
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Helping identify...</li>
          <li style={styles.listItem}>Providing resolution steps...</li>
          <li style={styles.listItem}>Giving ability to send education...</li>
        </ul>
        <p style={styles.paragraph}>
          The solution consists of two main components:
        </p>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Agent Dashboard</strong>...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Customer Mobile App</strong>...
          </li>
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>System Requirements</h2>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Browser:</strong> Microsoft Edge...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Extensions:</strong> RouteThis Proxy
            Enhancer
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>VPN:</strong> Ivanti Secure Access...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Internet Connection:</strong> Minimum
            15-20 Mbps...
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Systems Access:</strong> MyDesk CRM,
            Pathfinder, Trio
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Mobile Device:</strong> For testing
            purposes
          </li>
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Core Features</h2>
        <p style={styles.paragraph}>
          RouteThis Resolve provides several key features... Click to expand:
        </p>
        <div style={{ width: "100%", marginTop: "16px" }}>
          {coreFeatures.map((feature) => (
            <Disclosure
              key={feature.title}
              as="div"
              style={{ marginBottom: "8px" }}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button style={disclosureButtonStyle}>
                    {/* Ensure italic text has regular weight */}
                    <span>
                      {feature.title} -{" "}
                      <i style={{ fontWeight: "400" }}>{feature.description}</i>
                    </span>
                    <FaChevronDown
                      style={{
                        width: "16px",
                        height: "16px",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
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
                      {/* Use styles.list/listItem for nested list */}
                      <ul
                        style={{
                          ...styles.list,
                          marginBottom: 0,
                          paddingLeft: "16px",
                        }}
                      >
                        {feature.details.map((detail, index) => (
                          <li key={index} style={styles.listItem}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentTrainingContent;
