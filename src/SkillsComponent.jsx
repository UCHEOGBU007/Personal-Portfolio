// import styles from "./SkillsComponent.module.css";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io";
// import { IoIosGitMerge } from "react-icons/io";
// import { FaReact } from "react-icons/fa";
// import { motion, spring } from "framer-motion";
// import { SiTypescript } from "react-icons/si";
// import { SiExpo } from "react-icons/si";

// export default function SkillsComponent() {
//   // skills containerstarts here

//   return (
//     <motion.section
//       className={styles.container}
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* HTML5 SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1, x: -200 }}
//       >
//         <FaHtml5 style={{ fontSize: "5rem", color: "#E4080A" }} />
//         <figcaption>HTML5</figcaption>
//         <meter value="90" min="0" max="95"></meter>
//       </motion.figure>

//       {/* CSS3 SKILL TAG */}

//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, delay: 1, y: -400, type: "spring" }}
//       >
//         <FaCss3 style={{ fontSize: "5rem", color: "#264de4" }} />
//         <figcaption>CSS3</figcaption>
//         <meter value="80" min="0" max="95"></meter>
//       </motion.figure>

//       {/* TAILWIND SKILL TAG  */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2.5, delay: 1, y: 300, type: "spring" }}
//       >
//         <RiTailwindCssFill style={{ fontSize: "5rem", color: "#06b6d4" }} />
//         <figcaption>TAILWIND</figcaption>
//         <meter value="80" min="0" max="95"></meter>
//       </motion.figure>

//       {/* JAVASCRIPT SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 2.5,
//           delay: 1,
//           y: 300,
//           type: { spring: spring() },
//         }}
//       >
//         <IoLogoJavascript style={{ fontSize: "5rem", color: "#F0DB4F" }} />
//         <figcaption>JAVASCRIPT</figcaption>
//         <meter value="70" min="0" max="95"></meter>
//       </motion.figure>

//       {/* REACT JS SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2.5, delay: 1, y: 300, type: "spring" }}
//       >
//         <FaReact style={{ fontSize: "5rem", color: "#61DBFB" }} />
//         <figcaption> REACT JS</figcaption>
//         <meter value="65" min="0" max="95"></meter>
//       </motion.figure>

//       {/* GIT &GITHUB SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2.5, delay: 1, y: -200, type: "spring" }}
//       >
//         <IoIosGitMerge style={{ fontSize: "5rem", color: "#F1502F" }} />
//         <figcaption>GIT & GITHUB</figcaption>
//         <meter value="90" min="0" max="95"></meter>
//       </motion.figure>

//       {/* Typescript SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 2.5,
//           delay: 1,
//           y: -200,
//           type: { spring: spring() },
//         }}
//       >
//         <SiTypescript style={{ fontSize: "5rem", color: "#3178C6" }} />
//         <figcaption>Typescript</figcaption>
//         <meter value="50" min="0" max="95"></meter>
//       </motion.figure>

//       {/* React-Native SKILL TAG */}
//       <motion.figure
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 2.5,
//           delay: 1,
//           y: -200,
//           type: { spring: spring() },
//         }}
//       >
//         <SiExpo style={{ fontSize: "5rem", color: "#ffff" }} />
//         <figcaption>React-Native (IOS & Android)</figcaption>
//         <meter value="70" min="0" max="100"></meter>
//       </motion.figure>
//     </motion.section>
//   );
// }

import styles from "./SkillsComponent.module.css";
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoIosGitMerge } from "react-icons/io";
import { SiTypescript, SiExpo } from "react-icons/si";
import { motion } from "framer-motion";

export default function SkillsComponent() {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* HTML5 SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <FaHtml5 style={{ fontSize: "5rem", color: "#E4080A" }} />
        <figcaption>HTML5</figcaption>
        <meter value="90" min="0" max="95"></meter>
      </motion.figure>

      {/* CSS3 SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        <FaCss3 style={{ fontSize: "5rem", color: "#264de4" }} />
        <figcaption>CSS3</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      {/* TAILWIND SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      >
        <RiTailwindCssFill style={{ fontSize: "5rem", color: "#06b6d4" }} />
        <figcaption>TAILWIND</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      {/* JAVASCRIPT SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      >
        <IoLogoJavascript style={{ fontSize: "5rem", color: "#F0DB4F" }} />
        <figcaption>JAVASCRIPT</figcaption>
        <meter value="70" min="0" max="95"></meter>
      </motion.figure>

      {/* REACT JS SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        <FaReact style={{ fontSize: "5rem", color: "#61DBFB" }} />
        <figcaption>REACT JS</figcaption>
        <meter value="65" min="0" max="95"></meter>
      </motion.figure>

      {/* GIT & GITHUB SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
      >
        <IoIosGitMerge style={{ fontSize: "5rem", color: "#F1502F" }} />
        <figcaption>GIT & GITHUB</figcaption>
        <meter value="90" min="0" max="95"></meter>
      </motion.figure>

      {/* Typescript SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
      >
        <SiTypescript style={{ fontSize: "5rem", color: "#3178C6" }} />
        <figcaption>Typescript</figcaption>
        <meter value="50" min="0" max="95"></meter>
      </motion.figure>

      {/* UI & UX Figma SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
      >
        <FaFigma style={{ fontSize: "5rem", color: "#98fbcb" }} />
        <figcaption>UI & UX (Figma)</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      {/* React-Native SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
      >
        <SiExpo style={{ fontSize: "5rem", color: "#ebe6e5" }} />
        <figcaption>React-Native (Expo)</figcaption>
        <meter value="60" min="0" max="95"></meter>
      </motion.figure>
    </motion.section>
  );
}
