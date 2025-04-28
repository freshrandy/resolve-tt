import React from "react";
// Import specific icons needed
import { IconType } from "react-icons"; // Import IconType for prop typing (optional)
import React from "react";
import { motion } from "framer-motion";

// Receive styles and other props
const FeatureCardComponent = ({
  cardStyle,
  iconStyle,
  titleStyle,
  descriptionStyle,
  icon: IconComponent,
  title,
  description,
  onClick,
  ariaLabel,
}) => {
  return (
    <motion.div
      style={cardStyle}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && onClick && onClick()}
      aria-label={ariaLabel || title}
      whileHover={{ y: -3, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" }} // Keep hover animation
    >
      <div style={iconStyle}>{IconComponent && <IconComponent />}</div>
      <div>
        <div style={titleStyle}>{title}</div>
        <div style={descriptionStyle}>{description}</div>
      </div>
    </motion.div>
  );
};

export default FeatureCardComponent;
