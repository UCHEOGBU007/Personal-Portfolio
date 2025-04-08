import React from "react";
import styles from "./Mainsection.module.css";
import { FaDownload } from "react-icons/fa";
import { HiReply } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Mainsection() {
  return (
    // MAIN SECTION
    <div>
      <main id="main">
        <div className={styles.mainarticles}>
          <div className={styles.articlescard}>
            {/* INTRODUCTION ABOUT  MY NICHE  */}
            <div className={styles.introcontainer}>
              <h2 className={styles.cardintro}>Creative Front-end </h2>
              <h2 className={styles.webdevelopment}>Web developer</h2>
            </div>
            <div className={styles.playcard1}>
              <a href="mailto:ucheogbu0070@gmail.com?subject=Needs your Service&body=I would like to hire you for a job">
                <button className={styles.button1}>
                  Hire me <HiReply />
                </button>
              </a>
              {/* DOWNLOAD RESUME FILE */}
              <a href="./assets/images/Resume.pdf" download>
                <button className={styles.button2}>
                  {" "}
                  Download Resume <FaDownload />
                </button>
              </a>
            </div>
          </div>
          {/*  IMPORTED CODIN ICONS */}
          <motion.div
            className={styles.articlecard2}
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
          >
            <img
              src="/doodlesround.png"
              className={styles.condingicons}
              alt=" codingicons"
            />
            <img
              src="/Group2346.png"
              className={styles.codinsit}
              alt=" codingicons"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
