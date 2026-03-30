// import { RxHamburgerMenu } from "react-icons/rx";
// import styles from "./Header.module.css";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [nav, setNav] = useState(false);
//   const toggle = () => {
//     setNav(!nav);
//   };

//   return (
//     <header className={styles.header}>
//       <motion.nav
//         className={styles.container}
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.5,
//           delay: 0.5,
//           stiffness: 100,
//           type: "spring",
//           damping: 10,
//         }}
//       >
//         <div>
//           <img
//             className={styles.logo}
//             src="/Boldlogo.jpg"
//             alt="My profile logo"
//           />
//         </div>
//         <ul className={`${styles.ul} ${nav ? styles.active : ""}`}>
//           <li>
//             <a href="#">HOME</a>
//           </li>
//           <li>
//             <a href="#About">ABOUT</a>
//           </li>
//           <li>
//             <a href="#contact">CONTACT</a>
//           </li>
//         </ul>
//         <div className={styles.icon} onClick={toggle}>
//           <RxHamburgerMenu />
//         </div>
//       </motion.nav>
//     </header>
//   );
// }

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"; // Added Close icon
import styles from "./Header.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  // Close menu when a link is clicked
  const closeMenu = () => setNav(false);

  return (
    <header className={styles.header}>
      <motion.nav
        className={styles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div>
          <img
            className={styles.logo}
            src="/Boldlogo.jpg"
            alt="My profile logo"
          />
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.ul} ${nav ? styles.active : ""}`}>
          <li>
            <a href="#" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#About" onClick={closeMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
        </ul>

        {/* Toggle Icon */}
        <div className={styles.icon} onClick={toggle}>
          {nav ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </motion.nav>
    </header>
  );
}
