import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

// Receive styles object as props
const AgentTrainingContent = ({ styles }) => {
  // Define Core Features with detailed content as JSX
  const coreFeatures = [
    {
      title: "1. Network Scan",
      description: "Primary diagnostic tool",
      content: (
        <>
          <p style={styles.paragraph}>
            The primary diagnostic tool - always start here. Runs for
            approximately 2 minutes. Collects 150+ data points about customer's
            network. Categorizes issues by impact level (high impact vs.
            warnings). Organizes findings into five areas: User Devices, WiFi
            Network, Router, Line Quality, and Key Websites.
          </p>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            Agent Instructions:
          </h4>
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            <li style={styles.listItem}>
              Have customer stand near their router/ONT.
            </li>
            <li style={styles.listItem}>
              Request they stay on the app during scanning.
            </li>
            <li style={styles.listItem}>
              Use scan time to gather additional information.
            </li>
            <li style={styles.listItem}>
              After scan completes, prioritize high-impact issues.
            </li>
            <li style={styles.listItem}>
              Follow fix-it workflows systematically.
            </li>
          </ul>
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>
            <strong style={styles.strong}>Best Practice:</strong> Always run a
            network scan first, even if you think you know the issue. The scan
            might identify additional issues not initially apparent.
          </p>
        </>
      ),
    },
    {
      title: "2. Speed Test",
      description: "Measures connection speeds",
      content: (
        <>
          <p style={styles.paragraph}>
            Automatically included in network scan. Can be run independently for
            before/after comparisons. Tests wireless connection speeds. Agent
            must enter customer's plan speeds for context.
          </p>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            What to Know:
          </h4>
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            <li style={styles.listItem}>
              How to interpret speed test results.
            </li>
            <li style={styles.listItem}>When to run standalone speed tests.</li>
            <li style={styles.listItem}>
              Comparing results to customer's expected plan speeds.
            </li>
            <li style={styles.listItem}>
              Speed test limitations based on router models.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Live View Options",
      description: "See what customer sees",
      content: (
        <>
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            <li style={styles.listItem}>
              <strong style={styles.strong}>Photo tool:</strong> Captures still
              images.
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Video tool:</strong> Provides live
              camera feed.
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Annotation capabilities:</strong>{" "}
              Draw, circle, highlight areas.
            </li>
            <li style={styles.listItem}>
              Works over mobile data when WiFi is unavailable.
            </li>
          </ul>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            TalkTalk Use Cases:
          </h4>
          <ul
            style={{ ...styles.list, paddingLeft: "16px", marginBottom: "8px" }}
          >
            <li style={styles.listItem}>
              FTTP: Checking ONT lights (use early in the process).
            </li>
            <li style={styles.listItem}>
              Verifying cable connections between ONT and router.
            </li>
            <li style={styles.listItem}>Confirming router status lights.</li>
            <li style={styles.listItem}>
              Guiding customers through physical changes.
            </li>
            <li style={styles.listItem}>
              Identifying equipment issues with legacy/BYOD equipment.
            </li>
          </ul>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            VDI Considerations:
          </h4>
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            <li style={styles.listItem}>
              Video quality may be slightly pixelated but functional.
            </li>
            <li style={styles.listItem}>
              Initial connection may have slightly longer round trip time.
            </li>
            <li style={styles.listItem}>
              Video restarts may trigger "poor connection" warnings, but service
              should stabilize.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Dead Spot Detector",
      description: "Maps WiFi coverage",
      content: (
        <>
          <p style={styles.paragraph}>
            Identifies areas of poor WiFi coverage. Maps signal strength
            throughout home. Customer walks through home while app measures
            signal quality. Results displayed as green/yellow/red indicators.
          </p>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            How to Use:
          </h4>
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            <li style={styles.listItem}>Have customer stand next to router.</li>
            <li style={styles.listItem}>
              Initiate test and have customer walk to problem areas.
            </li>
            <li style={styles.listItem}>
              Observe signal strength changes in real-time.
            </li>
            <li style={styles.listItem}>
              Use results to recommend optimal equipment placement.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Router Login",
      description: "Remote router access",
      content: (
        <>
          <p style={styles.paragraph}>
            Remote access to customer's router settings. Enables direct
            configuration changes by agent. Reduces handling time for
            configuration issues. Works across managed and customer-owned
            routers.
          </p>
          <h4
            style={{
              fontWeight: "600",
              marginTop: "12px",
              marginBottom: "4px",
            }}
          >
            Router-Specific Notes:
          </h4>
          <ul style={{ ...styles.list, paddingLeft: "16px", marginBottom: 0 }}>
            <li style={styles.listItem}>
              Capabilities vary across TalkTalk router portfolio.
            </li>
            <li style={styles.listItem}>
              eero management differs from standard TalkTalk routers.
            </li>
            <li style={styles.listItem}>
              BYOD routers may have limited remote management capabilities.
            </li>
          </ul>
        </>
      ),
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
    color: styles.colors?.primary || "#58DBB9", // Default color if not provided
    backgroundColor: "rgba(88, 219, 185, 0.1)", // Default color if not provided
    borderRadius: "6px 6px 0 0",
    border: "none",
    cursor: "pointer",
    outline: "none",
  };
  const disclosurePanelStyle = {
    padding: "16px",
    fontSize: "0.875rem",
    color: styles.colors?.ash || "#3D4550", // Default color if not provided
    backgroundColor: "white",
    borderRadius: "0 0 6px 6px",
  };

  return (
    <div>
      {/* Introduction Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Getting Started with Resolve</h2>
        <p style={styles.paragraph}>
          RouteThis Resolve is a mobile network diagnostic solution designed to
          support the entire customer interaction by:
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
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>
              Agent Dashboard (resolve.routethis.com)
            </strong>{" "}
            - The web interface you'll use
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Customer Mobile App</strong> - What
            your customers will download and use
          </li>
        </ul>
      </div>

      {/* Training Objectives Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Training Objectives</h2>
        <p style={styles.paragraph}>
          By the end of this training, you will be able to:
        </p>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            Understand when and how to use RouteThis Resolve in your workflow
          </li>
          <li style={styles.listItem}>
            Guide customers through the app installation and scanning process
          </li>
          <li style={styles.listItem}>
            Interpret scan results and follow fix-it workflows
          </li>
          <li style={styles.listItem}>
            Use all Resolve features effectively (Network Scan, Speed Test, Live
            View, etc.)
          </li>
          <li style={styles.listItem}>
            Document your actions properly in MyDesk
          </li>
          <li style={styles.listItem}>
            Address common customer questions and objections
          </li>
          <li style={styles.listItem}>
            Contribute to the trial's success metrics
          </li>
        </ul>
      </div>

      {/* System Requirements Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>System Requirements</h2>
        <p style={styles.paragraph}>
          To use Resolve effectively, ensure you have:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Browser:</strong> Microsoft Edge
            (version 135.0.3179.73 or newer)
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Extensions:</strong> RouteThis Proxy
            Enhancer (required for video functionality)
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>VPN:</strong> Ivanti Secure Access or
            new TalkTalk VPN
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Internet Connection:</strong> Minimum
            15-20 Mbps recommended
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Systems Access:</strong> MyDesk CRM,
            Pathfinder, Trio
          </li>
        </ul>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Installing the RouteThis Proxy Enhancer Extension
        </h3>
        {/* Using ol for numbered steps */}
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
            Click "Add to Edge" or "Get"
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Accept any permission prompts
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Verify the extension appears in your browser toolbar
          </li>
        </ol>
      </div>

      {/* When to Use Resolve Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>When to Use Resolve</h2>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "12px",
            marginBottom: "4px",
            fontSize: "1em",
          }}
        >
          Golden Rules
        </h3>
        <p style={styles.paragraph}>Use Resolve when:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Dealing with WiFi or network connectivity concerns
          </li>
          <li style={styles.listItem}>
            You need more accurate information to troubleshoot
          </li>
          <li style={styles.listItem}>
            You need visibility into the customer's environment (see what they
            see)
          </li>
        </ul>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Integration with TalkTalk's Workflow
        </h3>
        <p style={styles.paragraph}>
          After necessary line tests through Pathfinder diagnostics tool:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>FTTP line tests (30 seconds)</li>
          <li style={styles.listItem}>FTTC line tests (2 minutes)</li>
          <li style={styles.listItem}>MPF line tests (up to 5 minutes)</li>
        </ul>
        <p style={styles.paragraph}>
          When no hard faults have been identified in the network.
        </p>
        <p style={styles.paragraph}>
          Before escalating an in-home WiFi issue for equipment replacement or
          truck roll.
        </p>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Decision Points in Troubleshooting
        </h3>
        <p style={styles.paragraph}>
          <strong style={styles.strong}>For 2LS Agents (SMC):</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            After reviewing the escalated ticket and verifying no hard network
            fault
          </li>
          <li style={styles.listItem}>
            When making outbound calls to customers with suspected in-home WiFi
            issues
          </li>
          <li style={styles.listItem}>
            When an inbound call requires advanced WiFi diagnostics
          </li>
        </ul>
        <p style={styles.paragraph}>
          <strong style={styles.strong}>For Phase 2 Call Center Agents:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            When agent suspects an in-home WiFi issue
          </li>
          <li style={styles.listItem}>
            When Resolve tools (speed test, video, photo, etc.) will help
            resolve issues
          </li>
          <li style={styles.listItem}>
            Prior to escalating an in-home WiFi issue
          </li>
        </ul>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Common Trigger Phrases
        </h3>
        <p style={styles.paragraph}>If you hear customers say:</p>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>"My internet is slow"</li>
          <li style={styles.listItem}>"My video keeps buffering"</li>
          <li style={styles.listItem}>
            "All of my cords are plugged in correctly but the internet is not
            working"
          </li>
          <li style={styles.listItem}>
            "My internet doesn't work well in my home office"
          </li>
          <li style={styles.listItem}>
            "I set up a new device and it's not working"
          </li>
          <li style={styles.listItem}>
            "WiFi drops at certain times of the day"
          </li>
          <li style={styles.listItem}>"Some devices work, but others don't"</li>
        </ul>
      </div>

      {/* Logging In Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Logging into Resolve</h2>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            At the start of each shift, in a Microsoft Edge browser go to:{" "}
            <strong style={styles.strong}>resolve.routethis.com</strong>
          </li>
          <li style={styles.listItem}>
            Log into your Resolve Account using your work email account
          </li>
          <li style={styles.listItem}>
            First time login: Use your credentials in the email sent from{" "}
            <strong style={styles.strong}>team@routethis.com</strong>
          </li>
          <li style={styles.listItem}>
            If you forgot your password after you've logged in at least once,
            click "Forgot Password"
          </li>
        </ul>
      </div>

      {/* Connecting With Customer Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Connecting With Your Customer</h2>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "12px",
            marginBottom: "4px",
            fontSize: "1em",
          }}
        >
          Text Message Method (Preferred)
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Send your customer a text message with a link that directs them to
            the app
          </li>
          <li style={styles.listItem}>
            Search for the customer's Order No. using the search bar in the top
            right
          </li>
          <li style={styles.listItem}>
            Click on the line with the customer's Order No.
          </li>
          <li style={styles.listItem}>
            Click "Scan For New Issues" no matter what tool you want to use
          </li>
          <li style={styles.listItem}>Begin troubleshooting</li>
        </ul>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Manual Method (Alternative)
        </h3>
        <p style={styles.paragraph}>
          If the customer can't receive text messages, prompt them to access the
          "Get Wi-Fi Help" section by:
        </p>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>Opening the TalkTalk app</li>
          <li style={styles.listItem}>Going to the help section</li>
          <li style={styles.listItem}>Finding "Get Wi-Fi Help"</li>
        </ul>
      </div>

      {/* Core Features Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Core Features Overview</h2>
        <p style={styles.paragraph}>
          RouteThis Resolve provides several key features to aid in diagnosing
          and resolving customer network issues. Click each feature below to
          expand and see more details:
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
                      {/* Render the detailed JSX content */}
                      {feature.content}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      {/* Introducing Resolve Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Introducing Resolve to Customers</h2>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "12px",
            marginBottom: "4px",
            fontSize: "1em",
          }}
        >
          Phone Script
        </h3>
        <p
          style={{
            ...styles.paragraph,
            fontStyle: "italic",
            borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
            paddingLeft: "12px",
          }}
        >
          "Now that I understand why you are calling, let's troubleshoot the
          problem together so we can get it resolved quickly. We're going to use
          a diagnostic tool that will scan your network to help identify the
          root cause of the issue. I'll need to send you a text message with a
          link to download our app. Once installed, we'll run a quick scan that
          takes about two minutes. This will help us find and fix your issue
          much faster. What's the best mobile number to text you on?"
        </p>
        <h3
          style={{
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "1em",
          }}
        >
          Email Script
        </h3>
        <p
          style={{
            ...styles.paragraph,
            fontStyle: "italic",
            borderLeft: `3px solid ${styles.colors?.primary || "#58DBB9"}`,
            paddingLeft: "12px",
            marginBottom: 0,
          }}
        >
          "Thank you for getting in touch. We're sorry to hear that you're
          experiencing WiFi connection issues, and we're here to help resolve
          your issue quickly. To do this we have a feature in our app
          specifically designed to troubleshoot WiFi issues.
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
          4. Allow the 2-minute scan to complete (do NOT minimize the app while
          the scan is running)
          <br />
          <br />
          This scan will provide the information required to troubleshoot your
          WiFi issue. We'll review the scan details and respond with a
          resolution."
        </p>
      </div>

      {/* Addressing Objections Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Addressing Customer Objections</h2>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "What information are you going to be able to see?"
            </strong>
          </p>
          <p
            style={{
              ...styles.paragraph,
              fontStyle: "italic",
              marginLeft: "16px",
            }}
          >
            "No personal information at all is collected. The app only collects
            general diagnostic information which shows us the health of your
            network. We can walk through what it finds together as I'll stay on
            the phone and we'll get your WiFi issue resolved quickly."
          </p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "Why do you need the location permission?"
            </strong>
          </p>
          <p
            style={{
              ...styles.paragraph,
              fontStyle: "italic",
              marginLeft: "16px",
            }}
          >
            "The location permission gives us information about all of the WiFi
            networks in your home. It helps us to get a complete picture of
            what's happening on your network so that we can solve your issue
            more quickly and easily. The network scan does not collect any GPS
            information."
          </p>
        </div>
        <div style={{ marginTop: "12px", marginBottom: 0 }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "I'm not good with mobile apps/technology"
            </strong>
          </p>
          <p
            style={{
              ...styles.paragraph,
              fontStyle: "italic",
              marginLeft: "16px",
              marginBottom: 0,
            }}
          >
            "The app is very simple to use. Once it is downloaded, there are
            only a few buttons to press which I will guide you through."
          </p>
        </div>
      </div>

      {/* Documentation Requirements Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Documentation Requirements</h2>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            Adding customer key to notes section in MyDesk
          </li>
          <li style={styles.listItem}>
            Tagging tickets where Resolve was used
          </li>
          <li style={styles.listItem}>
            For Phase 1: Completion of feedback form after each use
          </li>
          <li style={styles.listItem}>
            For Phase 2: Ticket ID field must be populated in Resolve
          </li>
          <li style={styles.listItem}>
            Include specific tools used and fixes attempted in your notes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgentTrainingContent;
