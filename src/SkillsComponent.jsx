import styles from "./SkillsComponent.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoIosGitMerge } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { motion, spring } from "framer-motion";
import { SiExpo } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export default function SkillsComponent() {
  // skills containerstarts here

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* HTML5 SKILL TAG */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, x: -200 }}
      >
        <FaHtml5 style={{ fontSize: "5rem", color: "#E4080A" }} />
        <figcaption>HTML5</figcaption>
        <meter value="90" min="0" max="95"></meter>
      </motion.figure>

      {/* CSS3 SKILL TAG */}

      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, y: -400, type: "spring" }}
      >
        <FaCss3 style={{ fontSize: "5rem", color: "#264de4" }} />
        <figcaption>CSS3</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      {/* TAILWIND SKILL TAG  */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1, y: 300, type: "spring" }}
      >
        <RiTailwindCssFill style={{ fontSize: "5rem", color: "#06b6d4" }} />
        <figcaption>TAILWIND</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      {/* JAVASCRIPT SKILL TAG */}
      <figure>
        <IoLogoJavascript style={{ fontSize: "5rem", color: "#F0DB4F" }} />
        <figcaption>JAVASCRIPT</figcaption>
        <meter value="70" min="0" max="95"></meter>
      </figure>

      {/* REACT JS SKILL TAG */}
      <figure>
        <FaReact style={{ fontSize: "5rem", color: "#61DBFB" }} />
        <figcaption> REACT JS</figcaption>
        <meter value="65" min="0" max="95"></meter>
      </figure>

      {/* GIT &GITHUB SKILL TAG */}
      <figure>
        <IoIosGitMerge style={{ fontSize: "5rem", color: "#F1502F" }} />
        <figcaption>GIT & GITHUB</figcaption>
        <meter value="90" min="0" max="95"></meter>
      </figure>
      <figure>
        <SiTypescript style={{ fontSize: "5rem", color: "#1c5b83" }} />
        <figcaption>TypeScript</figcaption>
        <meter value="50" min="0" max="95"></meter>
      </figure>

      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1, y: 300, type: "spring" }}
      >
        <FaFigma style={{ fontSize: "5rem", color: "#98fbcb" }} />
        <figcaption>UI&UX (Figma)</figcaption>
        <meter value="80" min="0" max="95"></meter>
      </motion.figure>

      <figure>
        <SiExpo style={{ fontSize: "5rem", color: "#ebe6e5" }} />
        <figcaption>React-Native ( Expo)</figcaption>
        <meter value="60" min="0" max="95"></meter>
      </figure>
    </motion.section>
  );
}
