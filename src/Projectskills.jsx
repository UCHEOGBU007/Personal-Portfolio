// import styles from "./Project.module.css";
// import React, { useState } from "react";
// import CardComponent from "./CardComponent.jsx"; // Component for "Project"
// import SkillsComponent from "./SkillsComponent.jsx"; // Component for "Skills"
// import { GiSkills } from "react-icons/gi";
// import { FaProjectDiagram } from "react-icons/fa";

// export default function Projectskills() {
//   const [view, setView] = useState(""); // Initial state

//   return (
//     <div className={styles.project} id="projects">
//       <button
//         className={styles.skills}
//         onClick={() => setView("skills")} // Set view to "skills"
//       >
//         Click here for Skills <GiSkills />
//       </button>
//       <button
//         className={styles.projectstyle}
//         onClick={() => setView("project")} // Set view to "project"
//       >
//         Click here for Projects <FaProjectDiagram />
//       </button>
//       {/* Conditional rendering*/}
//       <div style={{ color: "white" }}>
//         {view === "project" ? (
//           <CardComponent />
//         ) : view === "skills" ? (
//           <SkillsComponent />
//         ) : (
//           <SkillsComponent />
//         )}
//       </div>
//     </div>
//   );
// }

import styles from "./Project.module.css";
import React, { useState } from "react";
import CardComponent from "./CardComponent.jsx";
import SkillsComponent from "./SkillsComponent.jsx";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Projectskills() {
  // Set "project" as the default state so it's visible on load
  const [view, setView] = useState("project");

  return (
    <section className={styles.sectionContainer} id="projects">
      <div className={styles.tabWrapper}>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${view === "project" ? styles.activeTab : ""}`}
            onClick={() => setView("project")}
          >
            <FaProjectDiagram /> <span>Featured Projects</span>
          </button>

          <button
            className={`${styles.tabButton} ${view === "skills" ? styles.activeTab : ""}`}
            onClick={() => setView("skills")}
          >
            <GiSkills /> <span>Technical Skills</span>
          </button>
        </div>
      </div>

      {/* Content Area with smooth transition */}
      <div className={styles.contentArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === "project" ? <CardComponent /> : <SkillsComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
