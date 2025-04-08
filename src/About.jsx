import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section id="About">
        <article className={styles.aboutme}>
          <div className={styles.aboutcontainer}>
            <h3>
              About <span style={{ color: "#00adb5" }}>me</span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 1,
                stiffness: 100,
                type: "spring",
                damping: 10,
              }}
            >
              Hi!, I'm Leonard Ogbu, a passionate Frontend Web Developer
              dedicated to crafting seamless, user-friendly web experiences.
              With a strong foundation in HTML, CSS,JavaScript,Reactjs,Figma
              principles,Git & GITHUB and Restful Api. I specialize in
              responsive design, ensuring your website looks stunning on any
              device,I am deeply committed to staying up-to-date with the latest
              technologies and trends in web development, allowing me to
              implement innovative solutions that align with modern standards.
              Whether it's building intuitive user interfaces, optimizing
              performance, or enhancing accessibility, I strive to create user
              interface that leave a lasting impression. Collaboration excites
              me, and I thrive on working with creative teams to transform ideas
              into impactful digital experiences, using version control system
              such "Git" Let's build something incredible together!.
            </motion.p>
          </div>
        </article>
        <div className={styles.workingcontainer}>
          <img
            className={styles.codinsymbol}
            src="/doodleitems.png"
            alt="coding symbole"
          />
          <img
            className={styles.illustration2}
            src="/workinging.png"
            alt=" working illustration"
          />
        </div>
      </section>
    </>
  );
}
