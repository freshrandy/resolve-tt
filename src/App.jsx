import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import Icons for Tabs
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserTie,
  FaBook,
  FaQuestionCircle,
} from "react-icons/fa";

// Import Components (assuming they exist in ./components/)
import HeaderComponent from "./components/HeaderComponent";
import TabsComponent from "./components/TabsComponent";
import HomeContent from "./components/content/HomeContent";
import AgentTrainingContent from "./components/content/AgentTrainingContent";
import LeadershipContent from "./components/content/LeadershipContent";
import TrialResourcesContent from "./components/content/TrialResourcesContent";
import SupportContent from "./components/content/SupportContent";

// --- Main App Component ---
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // --- Configuration Data ---
  const tabsConfig = [
    { id: "home", label: "Overview", path: "/", icon: FaHome },
    {
      id: "agent-training",
      label: "Agent Training",
      path: "/agent-training",
      icon: FaChalkboardTeacher,
      isImportant: true,
    },
    {
      id: "leadership",
      label: "Leadership",
      path: "/leadership",
      icon: FaUserTie,
      isImportant: true,
    },
    {
      id: "trial-resources",
      label: "Trial Resources",
      path: "/trial-resources",
      icon: FaBook,
    },
  ];

  // --- Styling (Inline Style Object - UPDATED for Tabs) ---
  const colors = {
    primary: "#58DBB9",
    teal: "#58DBB9",
    secondary: "#4EBAA1",
    jade: "#4EBAA1",
    electricBlue: "#0066FF",
    ash: "#3D4550",
    slate: "#20242A",
    cloudGrey: "#EEF2F6",
    tabActiveBg: "#E3F2FD",
    tabImportantBg: "#fafafa", // Very light gray for important inactive bg
    info: "#3b82f6",
    infoBg: "rgba(59, 130, 246, 0.1)",
  };
  const primaryGradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.electricBlue} 100%)`;

  const styles = {
    // Container and Header styles remain the same...
    container: {
      fontFamily: '"DM Sans", sans-serif',
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "24px",
      color: colors.ash,
    },
    header: {
      background: primaryGradient,
      color: "white",
      padding: "30px",
      borderRadius: "0.75rem",
      marginBottom: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    headerTitle: { fontSize: "2.5rem", fontWeight: "700", margin: "0 0 8px 0" },
    headerSubtitle: {
      fontSize: "1.25rem",
      opacity: 0.9,
      fontWeight: "400",
      marginTop: "8px",
      marginBottom: 0,
    },

    // ** UPDATED Tab Styles **
    // Increased marginBottom, slightly stronger shadow
    tabsContainer: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "white",
      border: `1px solid ${colors.cloudGrey}`,
      borderRadius: "0.75rem",
      marginBottom: "32px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.07)",
    },
    // Base style for NavLink - Increased padding and font size
    tabLink: {
      display: "flex",
      alignItems: "center",
      gap: "10px", // Slightly more space between icon and text
      padding: "20px 36px", // Significantly increased padding
      cursor: "pointer",
      borderRight: `1px solid ${colors.cloudGrey}`,
      fontSize: "1.2rem", // Larger font size
      color: colors.ash,
      textDecoration: "none",
      transition: "background-color 0.2s ease, color 0.2s ease",
      whiteSpace: "nowrap",
      fontWeight: "500", // Slightly bolder
    },
    // Style for the icon within the tab link
    tabIcon: {
      fontSize: "1.3em", // Icon size relative to text
      marginBottom: "-2px", // Fine-tune vertical alignment if needed
      flexShrink: 0, // Prevent icon shrinking
    },
    // Style for active tab
    tabLinkActive: {
      backgroundColor: colors.tabActiveBg,
      color: colors.electricBlue,
      fontWeight: "600", // Make active bolder
      borderBottom: `3px solid ${colors.electricBlue}`, // Thicker border
    },
    // Style for *important* but *inactive* tab
    tabLinkImportantInactive: {
      backgroundColor: colors.tabImportantBg, // Subtle background highlight
      fontWeight: "500", // Slightly bolder than normal inactive
      color: colors.slate, // Slightly darker text than default inactive
    },

    // Card, Grid, FeatureCard, Timeline, etc., styles remain the same...
    card: {
      backgroundColor: "white",
      borderRadius: "0.75rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "24px",
      marginBottom: "24px",
      borderTop: `3px solid ${colors.primary}`,
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: colors.slate,
      marginTop: 0,
      marginBottom: "16px",
      paddingBottom: "16px",
      borderBottom: `1px solid ${colors.cloudGrey}`,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
      marginBottom: "24px",
    },
    featureCard: {
      backgroundColor: "white",
      borderRadius: "0.75rem",
      padding: "24px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      borderTop: `3px solid ${colors.primary}`,
    },
    featureIcon: {
      backgroundColor: colors.tabActiveBg,
      color: colors.electricBlue,
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      fontSize: "24px",
      flexShrink: 0,
    },
    featureTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: colors.slate,
      marginBottom: "8px",
    },
    featureDescription: {
      fontSize: "0.875rem",
      color: colors.ash,
      lineHeight: "1.5",
      marginBottom: 0,
      flexGrow: 1,
    },
    timelineContainer: {
      position: "relative",
      paddingLeft: "28px",
      marginTop: "24px",
    },
    timelineLine: {
      position: "absolute",
      left: "8px",
      top: "5px",
      bottom: "5px",
      width: "2px",
      backgroundColor: colors.cloudGrey,
    },
    timelineItem: { position: "relative", marginBottom: "24px" },
    timelinePoint: {
      position: "absolute",
      left: "0",
      top: "4px",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: colors.primary,
      border: "3px solid white",
      boxShadow: "0 0 0 2px rgba(88, 219, 185, 0.2)",
    },
    timelineContent: {
      backgroundColor: "#f8fafc",
      borderRadius: "0.5rem",
      padding: "16px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    timelineTitle: {
      fontWeight: "600",
      marginBottom: "8px",
      color: colors.slate,
      fontSize: "1rem",
    },
    timelineText: {
      fontSize: "0.875rem",
      color: colors.ash,
      lineHeight: "1.6",
      margin: 0,
    },
    sectionTitle: {
      fontSize: "1.75rem",
      fontWeight: "600",
      color: colors.slate,
      marginBottom: "16px",
      marginTop: "24px",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.7",
      marginBottom: "16px",
      color: colors.ash,
    },
    list: {
      listStylePosition: "inside",
      paddingLeft: "8px",
      marginBottom: "16px",
      fontSize: "1rem",
      lineHeight: "1.7",
      color: colors.ash,
    },
    listItem: { marginBottom: "8px" },
    strong: { fontWeight: "600", color: colors.slate },
    heading3: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: colors.slate,
      marginTop: "24px",
      marginBottom: "12px",
    },
    tableContainer: { overflowX: "auto", marginBottom: "24px" },
    table: { width: "100%", borderCollapse: "collapse", minWidth: "600px" },
    th: {
      backgroundColor: colors.cloudGrey,
      padding: "12px 16px",
      textAlign: "left",
      fontWeight: "500",
      color: colors.slate,
      fontSize: "0.875rem",
      borderBottom: `1px solid #cbd5e1`,
    },
    td: {
      padding: "12px 16px",
      borderBottom: `1px solid ${colors.cloudGrey}`,
      color: colors.ash,
      fontSize: "0.875rem",
      verticalAlign: "top",
    },
    alert: {
      padding: "16px",
      borderRadius: "0.375rem",
      marginBottom: "24px",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      backgroundColor: colors.infoBg,
      borderLeft: `4px solid ${colors.info}`,
      color: colors.slate,
    },
    alertIcon: {
      fontSize: "1.25rem",
      color: colors.info,
      marginTop: "2px",
      flexShrink: 0,
    },
    alertText: { margin: 0, lineHeight: "1.6" },
    footer: {
      background: primaryGradient,
      color: "white",
      padding: "16px 24px",
      textAlign: "center",
      marginTop: "40px",
      borderRadius: "0.75rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontSize: "0.95rem",
      fontWeight: "500",
    },
  };

  // --- Animation Variants --- (Keep as before)
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 },
  };
  const pageTransition = { type: "tween", ease: "easeInOut", duration: 0.3 };

  React.useEffect(() => {
    // Apply background color to the entire page
    document.body.style.backgroundColor = "#F5F7FA";
    document.body.style.margin = "0";

    // Clean up function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    };
  }, []);

  // --- App Render ---
  return (
    <div style={styles.container}>
      {/* Header uses its specific styles */}
      <HeaderComponent
        headerStyle={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="TalkTalk Trial - Info Portal"
        subtitle="INTERNAL USE ONLY | RouteThis Professional Services Team"
      />
      {/* Tabs now uses the new/updated styles */}
      <TabsComponent
        tabs={tabsConfig} // Pass config with icons/flags
        containerStyle={styles.tabsContainer}
        linkStyle={styles.tabLink}
        iconStyle={styles.tabIcon} // Pass icon style
        activeLinkStyle={styles.tabLinkActive}
        importantInactiveStyle={styles.tabLinkImportantInactive} // Pass important style
      />
      {/* Main content section remains the same, passing down styles */}
      <main style={{ position: "relative", marginTop: "32px" }}>
        {" "}
        {/* Increased marginTop */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {" "}
                  <HomeContent styles={styles} navigate={navigate} />{" "}
                </motion.div>
              }
            />
            <Route
              path="/agent-training"
              element={
                <motion.div
                  key="agent"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {" "}
                  <AgentTrainingContent styles={styles} />{" "}
                </motion.div>
              }
            />
            <Route
              path="/leadership"
              element={
                <motion.div
                  key="lead"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {" "}
                  <LeadershipContent styles={styles} />{" "}
                </motion.div>
              }
            />
            <Route
              path="/trial-resources"
              element={
                <motion.div
                  key="resources"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {" "}
                  <TrialResourcesContent styles={styles} />{" "}
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <div style={styles.card}>
                  <h2 style={styles.cardTitle}>Page Not Found</h2>
                  <p style={styles.paragraph}>
                    The page you requested could not be found.
                  </p>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <footer style={styles.footer}>Prepared by: Randy Panté</footer>
    </div>
  );
}

export default App;
