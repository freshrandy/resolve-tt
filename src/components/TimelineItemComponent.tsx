import React from "react";

// Receive styles as props
const TimelineItemComponent = ({
  itemStyle,
  pointStyle,
  contentStyle,
  titleStyle,
  textStyle,
  title,
  children,
}) => {
  return (
    <div style={itemStyle}>
      <div style={pointStyle}></div>
      <div style={contentStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={textStyle}>{children}</div>
      </div>
    </div>
  );
};

export default TimelineItemComponent;