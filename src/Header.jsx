import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Header.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [nav, setNav] = useState(false);
  const toggle = () => {
    setNav(!nav);
  };

  return (
    <header className={styles.header}>
      <motion.nav
        className={styles.container}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          stiffness: 100,
          type: "spring",
          damping: 10,
        }}
      >
        <div>
          <img
            className={styles.logo}
            src="/Boldlogo.jpg"
            alt="My profile logo"
          />
        </div>
        <ul className={`${styles.ul} ${nav ? styles.active : ""}`}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#About">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className={styles.icon} onClick={toggle}>
          <RxHamburgerMenu />
        </div>
      </motion.nav>
    </header>
  );
}
