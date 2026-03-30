import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Visual Content */}
        <div className={styles.imageWrapper}>
          <img
            className={styles.doodle}
            src="/doodleitems.png"
            alt="Coding elements"
          />
          <img
            className={styles.illustration}
            src="/workinging.png"
            alt="Developer working illustration"
          />
        </div>
        {/* Text Content */}
        <article className={styles.content}>
          <h3 className={styles.title}>
            About <span className={styles.highlight}>me</span>
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.description}
          >
            My name is <strong>Uchenna Leonard Ogbu</strong>, a passionate
            Frontend Web and mobile app Developer with 3 years of hands-on
            experience. I specialize in crafting seamless, user-friendly web
            experiences using{" "}
            <strong>
              Reactjs,React-Native, JavaScript (ES6+),Typescript,Tailwindcss and
              Figma
            </strong>
            .
            <br />
            <br />
            I’m dedicated to staying ahead of modern trends, focusing on
            responsive design, performance optimization, and accessibility. I
            thrive in collaborative environments, using Git to turn creative
            ideas into impactful digital realities.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
