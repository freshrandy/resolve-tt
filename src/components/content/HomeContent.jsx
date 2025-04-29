import React from "react";
// Import TimelineItemComponent if it's defined separately
import TimelineItemComponent from "../TimelineItemComponent"; // Assuming this path is correct

// Receive styles object as props
// Removed 'navigate' prop as Quick Access is gone
const HomeContent = ({ styles }) => {
  return (
    <div>
      {" "}
      {/* Main container for the content */}
      {/* About RouteThis Resolve Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>About RouteThis Resolve</h2>

        <p style={styles.paragraph}>
          RouteThis Resolve is a powerful diagnostic tool that will transform
          how we troubleshoot in-home WiFi issues at TalkTalk. It gives us
          unprecedented visibility into customer networks, allowing us to
          identify and solve problems faster than ever before.
        </p>
        <p style={styles.paragraph}>
          RouteThis Resolve is a mobile network diagnostic solution designed to
          support the entire customer interaction by:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Helping identify the root cause of customer network issues
          </li>
          <li style={styles.listItem}>
            Providing clear resolution steps and guidance
          </li>
          <li style={styles.listItem}>
            Giving you the ability to send customer education on issues found
          </li>
        </ul>

        <p style={styles.paragraph}>
          The solution consists of two main components:
        </p>
        <ul style={styles.list}>
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

        <p style={styles.paragraph}>
          TalkTalk is implementing Resolve in two distinct phases:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 1:</strong> Testing with 10 SMC
            agents in the UK (1-2 weeks)
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Phase 2:</strong> Extended trial with
            15-20 Call Center agents in South Africa (30 days)
          </li>
        </ul>

        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          {" "}
          {/* Remove margin on last paragraph */}
          This training portal will guide you through everything you need to
          know to successfully use the platform and participate in the trial.
        </p>
      </div>
      {/* Implementation Timeline Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Implementation Timeline</h2>
        {/* Use the Timeline component structure */}
        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine}></div> {/* The vertical line */}
          <TimelineItemComponent
            itemStyle={styles.timelineItem}
            contentStyle={styles.timelineContent}
            titleStyle={styles.timelineTitle}
            textStyle={styles.timelineText}
            title="Training Sessions"
          >
            60-90 minute mandatory training sessions will be conducted via Teams
            for all participants. These comprehensive sessions will cover all
            aspects of the RouteThis Resolve platform, from system requirements
            to troubleshooting scenarios. UK-based 2LS agents will be trained
            first, followed by South Africa call center agents.
          </TimelineItemComponent>
          <TimelineItemComponent
            itemStyle={styles.timelineItem}
            contentStyle={styles.timelineContent}
            titleStyle={styles.timelineTitle}
            textStyle={styles.timelineText}
            title="Phase 1: SMC Testing (1-2 weeks)"
          >
            10 UK-based Second Line Support (2LS) agents will use Resolve for
            1-2 weeks, targeting 150 uses across all tools. These agents are
            based in the Service Management Center (SMC) and are responsible for
            resolution of issues escalated by first line support agents.
            <br />
            <br /> {/* Add space before nested list */}
            During this phase:
            <ul
              style={{ ...styles.list, marginTop: "8px", paddingLeft: "16px" }}
            >
              {" "}
              {/* Nested list styling */}
              <li style={styles.listItem}>
                Agents will complete a feedback form after each use of Resolve
              </li>
              <li style={styles.listItem}>
                RouteThis will interview selected agents to gather qualitative
                feedback
              </li>
              <li style={styles.listItem}>
                Email support will be provided via john@routethis.com
              </li>
              <li style={styles.listItem}>
                The focus is on validating tool usability in the TalkTalk
                environment
              </li>
            </ul>
          </TimelineItemComponent>
          <TimelineItemComponent
            itemStyle={styles.timelineItem}
            contentStyle={styles.timelineContent}
            titleStyle={styles.timelineTitle}
            textStyle={styles.timelineText}
            title="Phase 2: Call Center Testing (30 days)"
          >
            15-20 South Africa-based Call Center agents will use Resolve for 30
            days. These agents provide first-line support for all phone-ins from
            TalkTalk subscribers.
            <br />
            <br />
            During this phase, Resolve will be integrated into call center
            operations and used:
            <ul
              style={{ ...styles.list, marginTop: "8px", paddingLeft: "16px" }}
            >
              <li style={styles.listItem}>
                When the agent suspects an in-home WiFi issue
              </li>
              <li style={styles.listItem}>
                When any RouteThis tools will help resolve subscriber issues
              </li>
              <li style={styles.listItem}>
                Prior to escalating an in-home WiFi issue
              </li>
            </ul>
            <br />
            Success metrics include:
            <ul
              style={{ ...styles.list, marginTop: "8px", paddingLeft: "16px" }}
            >
              <li style={styles.listItem}>
                Reduced repeat call-in rate for WiFi-related issues
              </li>
              <li style={styles.listItem}>Decreased truck roll rate</li>
              <li style={styles.listItem}>Lower CPE replacement rate</li>
              <li style={styles.listItem}>
                Improved NPS for WiFi-related tickets
              </li>
              <li style={styles.listItem}>
                Optimized AHT (may initially increase during learning period)
              </li>
            </ul>
          </TimelineItemComponent>
        </div>
      </div>
      {/* Business Objectives Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Business Objectives</h2>
        <p style={styles.paragraph}>
          The implementation of RouteThis Resolve aims to achieve several key
          business objectives:
        </p>

        <h3 style={styles.heading3}>Quantitative Metrics</h3>
        {/* Maybe use definition list <dl>, <dt>, <dd> or just styled lists */}
        <div style={{ paddingLeft: "16px", marginBottom: "16px" }}>
          {" "}
          {/* Indent metric definitions */}
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>Repeat Call In Rate</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: "12px" }}>
            <li style={styles.listItem}>
              Definition: Number of repeat contacts within time-bound window
              divided by total call-ins
            </li>
            <li style={styles.listItem}>
              Success: Lower rate for WiFi-related tickets using Resolve vs.
              pre-trial
            </li>
          </ul>
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>Truck Roll Rate</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: "12px" }}>
            <li style={styles.listItem}>
              Definition: Number of technician dispatches divided by total
              inbound calls
            </li>
            <li style={styles.listItem}>
              Success: Lower rate for WiFi-related tickets using Resolve vs.
              pre-trial
            </li>
          </ul>
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>CPE Replacement Rate</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: "12px" }}>
            <li style={styles.listItem}>
              Definition: Number of equipment replacements divided by total
              inbound calls
            </li>
            <li style={styles.listItem}>
              Success: Lower rate for WiFi-related tickets using Resolve vs.
              pre-trial
            </li>
          </ul>
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>NPS</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: "12px" }}>
            <li style={styles.listItem}>
              Definition: Average Net Promoter Score
            </li>
            <li style={styles.listItem}>
              Success: Higher NPS for WiFi-related tickets using Resolve vs.
              pre-trial
            </li>
          </ul>
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>AHT</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: 0 }}>
            {" "}
            {/* Last list */}
            <li style={styles.listItem}>
              Definition: Total handle time of subscriber call
            </li>
            <li style={styles.listItem}>
              Success: May increase initially during learning period but should
              improve over time
            </li>
          </ul>
        </div>

        <h3 style={styles.heading3}>Qualitative Metrics</h3>
        <div style={{ paddingLeft: "16px" }}>
          <p style={{ ...styles.paragraph, marginBottom: "8px" }}>
            <strong style={styles.strong}>Agent Feedback</strong>
          </p>
          <ul style={{ ...styles.list, marginTop: 0, marginBottom: 0 }}>
            <li style={styles.listItem}>
              Definition: Agent experience with Resolve platform
            </li>
            <li style={styles.listItem}>
              Success: Positive sentiment regarding use of Resolve for
              WiFi-related tickets
            </li>
          </ul>
        </div>
      </div>
      {/* TalkTalk Context Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>TalkTalk Context</h2>
        <p style={styles.paragraph}>
          TalkTalk serves approximately 3 million subscribers, with a
          significant portion experiencing WiFi-related issues. Recent
          acquisition of 500,000+ customers from Shell Energy has added
          complexity as many of these customers have unsupported devices.
        </p>
        <p style={styles.paragraph}>Current challenges include:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Limited visibility into about 60% of home networks
          </li>
          <li style={styles.listItem}>
            Basic level of insight that varies depending on the CPE (EERO,
            Sagemcom mostly)
          </li>
          <li style={styles.listItem}>
            33% of customers on legacy/3rd party devices
          </li>
          <li style={styles.listItem}>
            Outsourced technicians with limited tooling for WiFi issues
          </li>
          <li style={styles.listItem}>High volume of WiFi-related tickets</li>
        </ul>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          The Resolve trial is a strategic initiative to address these
          challenges and improve customer experience while potentially reducing
          operational costs.
        </p>
      </div>
      {/* Support Resources & Getting Started Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Support & Preparation</h2>

        <h3 style={styles.heading3}>Support Resources</h3>
        <p style={styles.paragraph}>
          Throughout the trial, several support resources will be available:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Internal Support:</strong> Team
            leaders and managers
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Weekly Meetings:</strong> Regular
            check-ins with the RouteThis trial team
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Training Materials:</strong>{" "}
            Comprehensive guides and reference documentation
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Technical Support:</strong> For any
            system-related issues encountered during the trial
          </li>
        </ul>

        <h3 style={styles.heading3}>Getting Started</h3>
        <p style={styles.paragraph}>
          To prepare for the trial, please ensure you have:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Browser:</strong> Microsoft Edge
            (version 135.0.3179.73 or newer)
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Extensions:</strong> RouteThis Proxy
            Enhancer installed
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>VPN:</strong> Ivanti Secure Access or
            new TalkTalk VPN configured
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Internet Connection:</strong> Minimum
            15-20 Mbps recommended
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

        <p style={styles.paragraph}>
          VDI testing has confirmed that the Resolve video feature works
          reliably through TalkTalk's VDI environment when the RouteThis Proxy
          Enhancer extension is installed.
        </p>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          Your participation in this trial is crucial to its success and
          potential wider deployment across TalkTalk. Thank you for your
          commitment to learning and using this new tool!
        </p>
      </div>
    </div> // End main container div
  );
};

export default HomeContent;
