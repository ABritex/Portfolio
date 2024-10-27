import React from "react";
import "../../styles/components/Content.css";

function ContentDisplay({ activeCategory, activeDescription }) {
  return <div className="content-display">{activeDescription}</div>;
}

export default ContentDisplay;
