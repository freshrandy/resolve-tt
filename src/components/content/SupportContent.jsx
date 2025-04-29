import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const SupportContent = ({ styles }) => {
  return (
    <div>
      {/* Contact Information Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Contact Information</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Email Support:</strong>{" "}
            <a
              href="mailto:randy.pante@routethis.com"
              style={{
                color: styles.colors?.primary || "#58DBB9",
                textDecoration: "underline",
              }}
            >
              randy.pante@routethis.com
            </a>
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Internal Support:</strong> Contact
            your team leader or manager for immediate assistance
          </li>
          <li style={{ ...styles.listItem, marginBottom: 0 }}>
            <strong style={styles.strong}>Weekly Meetings:</strong> Regular
            check-ins with the RouteThis trial team
          </li>
        </ul>
      </div>

      {/* VDI Compatibility Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>VDI Compatibility Information</h2>
        <p style={styles.paragraph}>
          Testing has confirmed that the Resolve video feature works reliably
          through TalkTalk's VDI environment when the RouteThis Proxy Enhancer
          extension is installed. Some considerations:
        </p>
        <ul style={{ ...styles.list, marginBottom: "16px" }}>
          <li style={styles.listItem}>
            Video quality may be slightly pixelated but functional for
            troubleshooting
          </li>
          <li style={styles.listItem}>
            Initial connection may have slightly longer round trip time but
            stabilizes
          </li>
          <li style={styles.listItem}>
            Video restarts may trigger "poor connection" warnings temporarily
          </li>
          <li style={styles.listItem}>
            Works on both home and office VPN connections
          </li>
          <li style={styles.listItem}>
            Minimum recommended connection speed: 15-20 Mbps
          </li>
        </ul>
        {/* VDI Testing Results Alert */}
        <div style={styles.alert}>
          <FaInfoCircle style={styles.alertIcon} />
          <div style={styles.alertText}>
            <strong style={styles.strong}>VDI Testing Results:</strong>
            <ul
              style={{
                ...styles.list,
                listStyle: "disc",
                paddingLeft: "16px",
                marginTop: "4px",
                marginBottom: 0,
              }}
            >
              <li
                style={{
                  ...styles.listItem,
                  fontSize: "inherit",
                  lineHeight: "inherit",
                }}
              >
                Edge browser version: 135.0.3179.73
              </li>
              <li
                style={{
                  ...styles.listItem,
                  fontSize: "inherit",
                  lineHeight: "inherit",
                }}
              >
                VPN: Ivanti Secure Access (new VPN being implemented soon)
              </li>
              <li
                style={{
                  ...styles.listItem,
                  fontSize: "inherit",
                  lineHeight: "inherit",
                }}
              >
                Video functionality tested successfully in both home and office
                environments
              </li>
              <li
                style={{
                  ...styles.listItem,
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  marginBottom: 0,
                }}
              >
                RouteThis Proxy Enhancer extension is required for optimal
                performance
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting Common Issues Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Troubleshooting Common Issues</h2>

        <h3 style={styles.heading3}>Login Issues</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            First-time login: Use credentials from team@routethis.com email
          </li>
          <li style={styles.listItem}>
            Password reset: Use "Forgot Password" on login page
          </li>
          <li style={styles.listItem}>
            If still unable to login, contact your team leader
          </li>
        </ul>

        <h3 style={styles.heading3}>Customer App Installation</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            If customer can't receive text messages, guide them to manually
            download the app
          </li>
          <li style={styles.listItem}>
            For iOS devices: App Store > Search "TalkTalk"
          </li>
          <li style={styles.listItem}>
            For Android devices: Google Play > Search "TalkTalk"
          </li>
        </ul>

        <h3 style={styles.heading3}>Video/Photo Functionality</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Ensure RouteThis Proxy Enhancer is installed
          </li>
          <li style={styles.listItem}>
            Customer must allow camera permissions
          </li>
          <li style={styles.listItem}>
            If video appears choppy, continue the session as it typically
            stabilizes
          </li>
          <li style={styles.listItem}>
            For persistent video issues, try the photo tool instead
          </li>
        </ul>

        <h3 style={styles.heading3}>Network Scan Issues</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Customer must be connected to WiFi (not mobile data)
          </li>
          <li style={styles.listItem}>
            Customer should stand close to router (but not directly on top of
            it)
          </li>
          <li style={styles.listItem}>
            App must remain open during the scan (approximately 2 minutes)
          </li>
          <li style={styles.listItem}>If scan fails, try running it again</li>
        </ul>

        <h3 style={styles.heading3}>Documentation Issues</h3>
        {/* Use styles.list/listItem, remove margin on last list */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            Always include customer key in MyDesk notes
          </li>
          <li style={styles.listItem}>
            For Phase 1: Complete feedback form after each use
          </li>
          <li style={styles.listItem}>
            For Phase 2: Ensure ticket ID field is populated in Resolve
          </li>
        </ul>
      </div>

      {/* Whitelisting Requirements Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Whitelisting Requirements</h2>
        <p style={styles.paragraph}>
          For optimal performance, the following URLs and email IPs should be
          whitelisted:
        </p>
        <h3 style={styles.heading3}>Email</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>team@routethis.com</li>
          <li style={styles.listItem}>*@routethis.com</li>
        </ul>
        <h3 style={styles.heading3}>Agent Dashboard Access</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>*.routethis.com</li>
          <li style={styles.listItem}>Fonts.gstatic.com</li>
          <li style={styles.listItem}>Fonts.googleapis.com</li>
          <li style={styles.listItem}>Use.fontawesome.com</li>
          <li style={styles.listItem}>code.getmdl.io/*</li>
        </ul>
        <h3 style={styles.heading3}>Twilio (for video functionality)</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            All hostnames and IP addresses listed on:{" "}
            <a
              href="https://www.twilio.com/docs/video/ip-addresses"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: styles.colors?.primary || "#58DBB9",
                textDecoration: "underline",
              }}
            >
              https://www.twilio.com/docs/video/ip-addresses
            </a>
          </li>
          <li style={styles.listItem}>
            Network/workstation policy to allow VP7/VP8/VP9 video codec traffic
          </li>
        </ul>
        <h3 style={styles.heading3}>Proxy</h3>
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>*.proxy.routethis.com</li>
          <li style={styles.listItem}>*.proxy-eu-west-1.routethis.com</li>
        </ul>
      </div>

      {/* FAQ Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Frequently Asked Questions</h2>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              Q: Why do I need to use the RouteThis Proxy Enhancer extension?
            </strong>
          </p>
          <p style={{ ...styles.paragraph, marginLeft: "16px" }}>
            A: This extension improves the connection during Proxy sessions,
            especially for video functionality through the VDI environment.
          </p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              Q: What should I do if a customer is resistant to downloading the
              app?
            </strong>
          </p>
          <p style={{ ...styles.paragraph, marginLeft: "16px" }}>
            A: Explain that this is our standard troubleshooting procedure and
            will help resolve their issue much faster than traditional methods.
            Emphasize that it only collects technical network information, not
            personal data.
          </p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              Q: How do I know which Resolve feature to use?
            </strong>
          </p>
          <p style={{ ...styles.paragraph, marginLeft: "16px" }}>
            A: Always start with the Network Scan to identify the root cause.
            Then use additional tools based on the scan results and fix-it
            recommendations.
          </p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              Q: What if I encounter a technical issue during the trial?
            </strong>
          </p>
          <p style={{ ...styles.paragraph, marginLeft: "16px" }}>
            A: Document the issue, including what you were doing and any error
            messages, and report it via email to{" "}
            <a
              href="mailto:randy.pante@routethis.com"
              style={{
                color: styles.colors?.primary || "#58DBB9",
                textDecoration: "underline",
              }}
            >
              randy.pante@routethis.com
            </a>
            . For urgent issues, contact your team leader.
          </p>
        </div>
        <div style={{ marginTop: "12px", marginBottom: 0 }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              Q: How do we gather feedback during the trial?
            </strong>
          </p>
          <p
            style={{ ...styles.paragraph, marginLeft: "16px", marginBottom: 0 }}
          >
            A: For Phase 1, complete the feedback form after each use. For Phase
            2, ensure proper documentation in MyDesk and participate in feedback
            sessions when invited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
