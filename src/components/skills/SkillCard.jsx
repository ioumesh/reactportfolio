import React from "react";
import "./skillcard.css";
const SkillCard = ({ src, text }) => {
  return (
    <div className="skillCardContainer">
      <div className="skillContent">
        <img align="left" alt="HTML5" width="40px" src={src} />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SkillCard;
