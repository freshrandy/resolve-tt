import React from "react"; // Removed useState as tab state is handled by router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import the refactored components
import HeaderComponent from "./components/HeaderComponent";
import TabsComponent from "./components/TabsComponent";
import HomeContent from "./components/content/HomeContent";
import AgentTrainingContent from "./components/content/AgentTrainingContent";
import LeadershipContent from "./components/content/LeadershipContent";
import TrialResourcesContent from "./components/content/TrialResourcesContent";
import SupportContent from "./components/content/SupportContent";

// --- Main App Component ---
function App() {
  const location = useLocation(); // For animations
  const navigate = useNavigate(); // For navigation actions (if needed in content)

  // --- Configuration Data ---
  // Define tabs configuration here or import from constants file
  const tabsConfig = [
    { id: "home", label: "Overview", path: "/" },
    { id: "agent-training", label: "Agent Training", path: "/agent-training" },
    { id: "leadership", label: "Leadership", path: "/leadership" },
    {
      id: "trial-resources",
      label: "Trial Resources",
      path: "/trial-resources",
    },
    { id: "support", label: "Support", path: "/support" },
  ];

  // --- Styling (Inline Style Object - Central Definition) ---
  // This object defines all styles used by child components
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
    info: "#3b82f6",
    infoBg: "rgba(59, 130, 246, 0.1)",
  };
  const primaryGradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.electricBlue} 100%)`;

  const styles = {
    container: {
      fontFamily: '"DM Sans", sans-serif',
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#F5F7FA",
      minHeight: "100vh",
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
    tabsContainer: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "white",
      border: `1px solid ${colors.cloudGrey}`,
      borderRadius: "0.75rem",
      marginBottom: "24px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    },
    tabLink: {
      display: "block",
      padding: "12px 24px",
      cursor: "pointer",
      borderRight: `1px solid ${colors.cloudGrey}`,
      fontSize: "1rem",
      color: colors.ash,
      textDecoration: "none",
      transition: "background-color 0.2s ease, color 0.2s ease",
      whiteSpace: "nowrap",
    },
    tabLinkActive: {
      backgroundColor: colors.tabActiveBg,
      color: colors.electricBlue,
      fontWeight: "500",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "0.75rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "24px",
      marginBottom: "24px",
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
      lineHeight: "1.5",
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
      lineHeight: "1.6",
      marginBottom: "16px",
      color: colors.ash,
    },
    list: {
      listStylePosition: "inside",
      paddingLeft: "8px",
      marginBottom: "16px",
      fontSize: "1rem",
      lineHeight: "1.6",
      color: colors.ash,
    },
    listItem: { marginBottom: "8px" },
    strong: { fontWeight: "600" },
    heading3: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: colors.slate,
      marginTop: "20px",
      marginBottom: "8px",
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
    alertText: { margin: 0 },
  };

  // --- Animation Variants ---
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 },
  };
  const pageTransition = { type: "tween", ease: "easeInOut", duration: 0.3 };

  // --- App Render ---
  return (
    <div style={styles.container}>
      {/* Render Header - Pass relevant styles */}
      <HeaderComponent
        headerStyle={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="TalkTalk Resolve Training Portal"
        subtitle="WiFi Diagnostics & Support Solution"
      />

      {/* Render Tabs - Pass tabs config and relevant styles */}
      <TabsComponent
        tabs={tabsConfig}
        containerStyle={styles.tabsContainer}
        linkStyle={styles.tabLink}
        activeLinkStyle={styles.tabLinkActive}
      />

      {/* Main content area with routing and animations */}
      <main style={{ position: "relative", marginTop: "24px" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Pass the 'styles' object down to content components */}
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
              path="/support"
              element={
                <motion.div
                  key="support"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {" "}
                  <SupportContent styles={styles} />{" "}
                </motion.div>
              }
            />
            {/* Optional 404 */}
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
    </div>
  );
}

export default App;
