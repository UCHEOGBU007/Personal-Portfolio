import styles from "./Cards.module.css";
import { GrGithub } from "react-icons/gr";
import { IoLogoRss } from "react-icons/io";

// project card and description

export default function CardComponent() {
  return (
    <section className={styles.container}>
      {/* react todo list project card */}
      <div className={styles.card}>
        <img
          className={styles.workimages}
          src="/Todolist.png"
          alt="project picture "
        />
        <h4>REACT Todo-list</h4>
        <p>
          This is a react Todo-list project, thereby, using function react hook
          (useState) to manipulate virtual Dom to list the input items.However,
          styling with Vanilla css Modules useability.
        </p>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <a href="https://github.com/UCHEOGBU007/React-Todo-list-.git">
            <GrGithub
              style={{
                color: "#EEEEEE",
                background: "#393E46",
                fontSize: "xx-large",
              }}
            />
          </a>
          <a href="https://react-todo-list-eta-tan.vercel.app/">
            <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
          </a>
        </div>
      </div>
      {/* Banggair project card  */}
      <div className={styles.card}>
        <img
          className={styles.workimages}
          src="/Banggai.png"
          alt="project picture "
        />
        <h4>Banggai Proposal page</h4>
        <p>
          This is a proposal landing page,utilizing the Front-end
          technologies,such as: Html5 for structuring and SEO Principle, Vanilla
          Css3 for styling and vanilla javascript for responsive.
        </p>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <a href="https://github.com/UCHEOGBU007/bangai-tour-and-travel-new-.git">
            <GrGithub
              style={{
                color: "#EEEEEE",
                background: "#393E46",
                fontSize: "xx-large",
              }}
            />
          </a>
          <a href="https://ucheogbu007.github.io/bangai-tour-and-travel-new-/">
            <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
          </a>
        </div>
      </div>

      {/* Admin dashboard project card */}
      <div className={styles.card}>
        <img
          className={styles.workimages}
          src="/Admin.png"
          alt="project picture "
        />
        <h4>Admin Dashboard</h4>
        <p>
          This is a static Admin Dashboard designed with Html5,css3.Moreover,
          this dashboard is resposive and compatible for any device.
        </p>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <a href="https://github.com/UCHEOGBU007/Dashboard.git">
            <GrGithub
              style={{
                color: "#EEEEEE",
                background: "#393E46",
                fontSize: "xx-large",
              }}
            />
          </a>
          <a href="https://ucheogbu007.github.io/Dashboard/">
            <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
          </a>
        </div>
      </div>

      {/* yayasan project card */}
      <div className={styles.card}>
        <img
          className={styles.workimages}
          src="/Yayasan.png"
          alt="project picture "
        />
        <h4>Yayasan Proposal page</h4>
        <p>
          Yayasan project is a proposal base project,utilizing the Front-end
          technologies,such as: Html5 for structuring and SEO Principle, Vanilla
          Css3 for styling and vanilla javascript for responsive.
        </p>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <a href="https://github.com/UCHEOGBU007/yayasan-project.git">
            <GrGithub
              style={{
                color: "#EEEEEE",
                background: "#393E46",
                fontSize: "xx-large",
              }}
            />
          </a>
          <a href="https://ucheogbu007.github.io/yayasan-project/">
            <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
          </a>
        </div>
      </div>

      {/* little lemon project  */}

      {/* <div className={styles.card}>
        <img
          className={styles.workimages}
          src="/Littlelemon1.png"
          alt="project picture"
        />
        <h4>Little lemon restaurant </h4>
        <p>
          Little Lemon is a React-based web app for online dining reservations
          and food ordering. It features global state management via Context
          API, seamless multi-page navigation with React Router, and modular,
          reusable CSS styling.
        </p>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <a href="https://github.com/UCHEOGBU007/Little-lemon-Capstone-project.git">
            <GrGithub
              style={{
                color: "#EEEEEE",
                background: "#393E46",
                fontSize: "xx-large",
              }}
            />
          </a>
          <a href="https://little-lemon-capstone-project-one.vercel.app/">
            <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
          </a>
        </div>
      </div> */}
    </section>
  );
}
