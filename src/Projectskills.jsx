import styles from "./Project.module.css";
import React, { useState } from "react";
import CardComponent from "./CardComponent.jsx"; // Component for "Project"
import SkillsComponent from "./SkillsComponent.jsx"; // Component for "Skills"
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projectskills() {
  const [view, setView] = useState("project and skills"); // Initial state

  return (
    <div className={styles.project} id="projects">
      <button
        className={styles.skills}
        onClick={() => setView("skills")} // Set view to "skills"
      >
        Skills <GiSkills />
      </button>
      <button
        className={styles.projectstyle}
        onClick={() => setView("project")} // Set view to "project"
      >
        Project <FaProjectDiagram />
      </button>
      {/* Conditional rendering*/}
      <div style={{ color: "white" }}>
        {view === "project" ? (
          <CardComponent />
        ) : view === "skills" ? (
          <SkillsComponent />
        ) : (
          <SkillsComponent />
          // <p style={{ fontSize: "1.5rem", marginTop: "30px", opacity: "0.6" }}>
          //   Click on
          //   <span style={{ color: "#00ADB5", fontStyle: "italic" }}>
          //     "Skills"
          //   </span>{" "}
          //   OR{" "}
          //   <span style={{ color: "#00ADB5", fontStyle: "italic" }}>
          //     "Project"
          //   </span>
          //   button
          // </p>
        )}
      </div>
    </div>
  );
}
