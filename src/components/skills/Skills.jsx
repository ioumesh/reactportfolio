import React from "react";
import SkillCard from "./SkillCard";
import "./skills.css";
import { Skill } from "./data";
const Skills = () => {
  return (
    <div className="skillsContainer" id="Skills">
      <h1 className="skillsTitle">Skills & Tools</h1>
      <div className="skillsWrapper">
        {Skill.map((item) => {
          return <SkillCard src={item.src} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
