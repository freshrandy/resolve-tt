import React from "react";
import { NavLink } from "react-router-dom";

// Receive additional style props
const TabsComponent = ({
  tabs,
  containerStyle,
  linkStyle, // Base style for the link
  iconStyle, // Style specifically for the icon span
  activeLinkStyle, // Style added when link is active
  importantInactiveStyle, // Style added when link is important but NOT active
}) => {
  return (
    <nav style={containerStyle}>
      {tabs.map((tab) => {
        // Destructure icon from tab config
        const IconComponent = tab.icon;

        return (
          <NavLink
            key={tab.id}
            to={tab.path}
            // Function to determine the final style object
            style={({ isActive }) => {
              let combinedStyle = { ...linkStyle }; // Start with base

              if (isActive) {
                // If active, merge base with active style
                combinedStyle = { ...combinedStyle, ...activeLinkStyle };
              } else if (tab.isImportant) {
                // If NOT active BUT is important, merge base with important style
                combinedStyle = { ...combinedStyle, ...importantInactiveStyle };
              }
              // Add hover effect (simple background change) - Note: true :hover is better with CSS classes
              // This inline approach won't work perfectly for hover, but demonstrates the idea
              // combinedStyle[':hover'] = { backgroundColor: '#f0f0f0' }; // This doesn't work directly inline

              return combinedStyle;
            }}
            end={tab.path === "/"}
            // Add title attribute for tooltips on hover (optional)
            title={tab.label}
          >
            {/* Render Icon if it exists */}
            {IconComponent && (
              <span style={iconStyle}>
                <IconComponent />
              </span>
            )}
            {/* Render Label */}
            {tab.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default TabsComponent;
