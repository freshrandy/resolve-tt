import React from "react";

const LeadershipContent = ({ styles }) => {
  return (
    <div>
      {/* Adoption Strategies Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Adoption Strategies</h2>
        <p style={styles.paragraph}>
          Successful implementation of Resolve requires active leadership
          involvement. Here are key strategies to ensure agent adoption:
        </p>
        {/* Use styles.heading3 consistently */}
        <h3 style={styles.heading3}>Team Meetings</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Make Resolve a recurring topic in weekly team meetings
          </li>
          <li style={styles.listItem}>
            Provide a space for agents to share experiences and success stories
          </li>
          <li style={styles.listItem}>
            Rotate through different agents to present use cases
          </li>
          <li style={styles.listItem}>
            Use meeting time for practice if agents are lacking confidence
          </li>
          <li style={styles.listItem}>Address common challenges as a group</li>
        </ul>
        <h3 style={styles.heading3}>Real-Time Support</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Be available on the floor to support agents during customer calls
          </li>
          <li style={styles.listItem}>
            Respond promptly to internal messages about Resolve questions
          </li>
          <li style={styles.listItem}>
            Encourage agents to use Resolve on WiFi-related calls
          </li>
          <li style={styles.listItem}>
            Help with any issues that arise during the trial
          </li>
          <li style={styles.listItem}>
            Proactively check if agents are logged in and using Resolve daily
          </li>
        </ul>
        <h3 style={styles.heading3}>Coaching and Mentoring</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Provide 1:1 coaching for agents who need extra support
          </li>
          <li style={styles.listItem}>
            Schedule short 10-minute coaching meetings until usage increases
          </li>
          <li style={styles.listItem}>
            Review weekly usage reports with each agent
          </li>
          <li style={styles.listItem}>
            Give specific homework tasks and follow up
          </li>
          <li style={styles.listItem}>
            Recognize agents who consistently log in and use Resolve
          </li>
        </ul>
        <h3 style={styles.heading3}>Practice Time and Learning Materials</h3>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            Allocate time for agents to practice with the tools
          </li>
          <li style={styles.listItem}>
            Create exercises based on real WiFi issues
          </li>
          <li style={styles.listItem}>
            Remind agents of available learning resources
          </li>
          <li style={styles.listItem}>
            Request agents use one particular feature per week and share
            experiences
          </li>
          <li style={styles.listItem}>
            Ensure new hires receive training as part of onboarding
          </li>
        </ul>
      </div>

      {/* User Administration Guide Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>User Administration Guide</h2>
        <p style={styles.paragraph}>
          As a user admin, you can manage access to Resolve through the Admin
          section:
        </p>
        <h3 style={styles.heading3}>Adding A New User</h3>
        {/* Use ol for numbered steps */}
        <ol
          style={{ ...styles.list, listStyle: "decimal", paddingLeft: "20px" }}
        >
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Log into your Resolve Account at resolve.routethis.com
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Click on the menu icon (top left)
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Click on User Admin
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Click on Add Users +
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Add one or more user email addresses (use comma-separated format for
            multiple users)
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Select the appropriate group for organization/reporting purposes
          </li>
          <li style={{ ...styles.listItem, marginBottom: "4px" }}>
            Users will receive login credentials via email
          </li>
        </ol>
        <h3 style={styles.heading3}>Group Management</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Create groups for different teams or departments
          </li>
          <li style={styles.listItem}>
            Move users between groups when roles change
          </li>
          <li style={styles.listItem}>
            Groups are for reporting purposes and don't affect permissions
          </li>
        </ul>
        <h3 style={styles.heading3}>Setting Permissions</h3>
        {/* Ensure last list uses styles.list but removes margin */}
        <ul style={{ ...styles.list, marginBottom: 0 }}>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Account Admin Access:</strong> User
            can manage other users
          </li>
          <li style={styles.listItem}>
            <strong style={styles.strong}>Photo Administrator:</strong> User can
            delete photos if a customer requests removal
          </li>
        </ul>
      </div>

      {/* Monitoring Progress Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Monitoring Progress</h2>
        <p style={styles.paragraph}>
          Use the Analytics section to view usage reports:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Unique Customers Helped</li>
          <li style={styles.listItem}>Agent Tool Usage</li>
          <li style={styles.listItem}>Agent Tool Trends</li>
        </ul>
        <p style={styles.paragraph}>Reports have a 24-hour processing time.</p>
        <p style={{ ...styles.paragraph, marginBottom: 0 }}>
          Review weekly with the team and individual agents.
        </p>
      </div>

      {/* Overcoming Common Barriers Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Overcoming Common Barriers</h2>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "I already know how to troubleshoot I don't need another tool"
            </strong>
          </p>
          <p
            style={{
              ...styles.paragraph,
              fontStyle: "italic",
              marginLeft: "16px",
            }}
          >
            Remind agents that Resolve was brought in to help them and improve
            their KPIs. It reduces discovery time and provides structured fix-it
            workflows.
          </p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "I don't know which button to press or how it works"
            </strong>
          </p>
          <p
            style={{
              ...styles.paragraph,
              fontStyle: "italic",
              marginLeft: "16px",
            }}
          >
            Provide agents with learning resources and practice time. Include
            Resolve training in new hire onboarding.
          </p>
        </div>
        <div style={{ marginTop: "12px", marginBottom: 0 }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>
              "I don't see value in the tool"
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
            Check if the agent is actually using the tool - most who say they
            don't see value haven't given it a fair try. Use this as a coaching
            opportunity.
          </p>
        </div>
      </div>

      {/* Success Metrics Management Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Success Metrics Management</h2>
        <p style={styles.paragraph}>
          Work with your team to track and report on the following metrics:
        </p>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Repeat Call In Rate</strong>
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Monitor trends before and after Resolve implementation
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Truck Roll Rate</strong>
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Track reductions in technician dispatches for WiFi issues
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>CPE Replacement Rate</strong>
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Measure changes in equipment replacement frequency
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>NPS</strong>
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Compare customer satisfaction scores
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>AHT</strong>
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Track average handling time (may increase initially)
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "12px", marginBottom: 0 }}>
          <p style={styles.paragraph}>
            <strong style={styles.strong}>Agent Usage</strong>
          </p>
          <ul style={{ ...styles.list, marginBottom: 0 }}>
            <li style={styles.listItem}>
              Monitor login frequency and feature utilization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeadershipContent;
