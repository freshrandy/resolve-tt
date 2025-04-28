import React from "react";

// Receive styles as props
const HeaderComponent = ({
  headerStyle,
  titleStyle,
  subtitleStyle,
  title,
  subtitle,
}) => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
    </header>
  );
};

export default HeaderComponent;
