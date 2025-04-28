import React from "react";
import { NavLink } from "react-router-dom";

// Receive styles and tabs config as props
const TabsComponent = ({
  tabs,
  containerStyle,
  linkStyle,
  activeLinkStyle,
}) => {
  return (
    <nav style={containerStyle}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
          end={tab.path === "/"}
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default TabsComponent;
