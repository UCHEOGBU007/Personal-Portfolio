import styles from "./Footer.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className={styles.list}>
        <a href="#">
          <IoHomeOutline style={{ marginRight: "0.5em" }} />
          Home
        </a>
        <a href="#About">
          <MdWifiCalling3 style={{ marginRight: "0.5em" }} />
          ABOUT ME
        </a>
        <a href="#contact">
          <RiContactsFill style={{ marginRight: "0.5em" }} />
          CONTACT
        </a>
      </div>
      <div className={styles.address}>
        <address>
          <a href="" className={styles.facebook}>
            <FaFacebookF />
          </a>
          <a href="" className={styles.instagram}>
            <FaInstagram />
          </a>
          <a href="">
            <CiLinkedin className={styles.linkedin} />
          </a>
          <a href="#">
            <FaXTwitter className={styles.twitter} />
          </a>
          <p
            style={{
              marginTop: "30px",
              fontSize: "1em",
              color: "#EEEEEE",
              opacity: "0.7",
              padding: "2px",
            }}
          >
            Copyrights &copy; {new Date().getFullYear()} Uchenna Leonard Ogbu.
            All rights reserved.
          </p>
        </address>
      </div>
    </footer>
  );
}
