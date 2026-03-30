// import styles from "./Cards.module.css";
// import { GrGithub } from "react-icons/gr";
// import { IoLogoRss } from "react-icons/io";

// // project card and description

// export default function CardComponent() {
//   return (
//     <section className={styles.container}>
//       {/* react todo list project card */}
//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Todolist.png"
//           alt="project picture "
//         />
//         <h4>REACT Todo-list</h4>
//         <p>
//           This is a react Todo-list project, thereby, using function react hook
//           (useState) to manipulate virtual Dom to list the input items.However,
//           styling with Vanilla css Modules useability.
//         </p>

//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/React-Todo-list-.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://react-todo-list-eta-tan.vercel.app/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* Banggair project card  */}
//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Banggai.png"
//           alt="project picture "
//         />
//         <h4>Banggai Proposal page</h4>
//         <p>
//           This is a proposal landing page,utilizing the Front-end
//           technologies,such as: Html5 for structuring and SEO Principle, Vanilla
//           Css3 for styling and vanilla javascript for responsive.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/bangai-tour-and-travel-new-.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://ucheogbu007.github.io/bangai-tour-and-travel-new-/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* T-solusion Startup Website  */}

//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Tsolusions.png"
//           alt="project picture"
//         />
//         <h4> Start up Website</h4>
//         <p>
//           This is a startup website,utilizing Modern technologies,such as: Html5
//           for structuring and SEO Principle, Tailwind for styling and
//           React/Typescript for type safety, Formspree for receiving form
//           submissions and emailjs for form notification to client.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/t-solusion.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://www.tsolusions.com/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* Admin dashboard project card */}
//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Admin.png"
//           alt="project picture "
//         />
//         <h4>Admin Dashboard</h4>
//         <p>
//           This is a static Admin Dashboard designed with Html5,css3.Moreover,
//           this dashboard is resposive and compatible for any device.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/Dashboard.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://ucheogbu007.github.io/Dashboard/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* yayasan project card */}
//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Yayasan.png"
//           alt="project picture "
//         />
//         <h4>Yayasan Proposal page</h4>
//         <p>
//           Yayasan project is a proposal base project,utilizing the Front-end
//           technologies,such as: Html5 for structuring and SEO Principle, Vanilla
//           Css3 for styling and vanilla javascript for responsive.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/yayasan-project.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://ucheogbu007.github.io/yayasan-project/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* little lemon project  */}

//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Littlelemon1.png"
//           alt="project picture"
//         />
//         <h4>Little lemon restaurant </h4>
//         <p>
//           Little Lemon is a React-based web app for online dining reservations
//           and food ordering. It features global state management via Context
//           API, seamless multi-page navigation with React Router, and modular,
//           reusable CSS styling.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/Little-lemon-Capstone-project.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://little-lemon-capstone-project-one.vercel.app/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* Topnotch project */}
//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Topnotch.png"
//           alt="project picture"
//         />
//         <h4>Top Notch Barbing saloon </h4>
//         <p>
//           TopNotch Barber & Salon is a React-based web app designed for online
//           grooming appointments and service bookings. It leverages global state
//           management with the Context API, provides seamless multi-page
//           navigation through React Router, and incorporates modular, reusable
//           CSS styling for a clean and consistent user experience.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/Top-Notch-Salon.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://top-notch-salon.vercel.app/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* Top Notch Admin dashboard  */}

//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Topnotchadmin.png"
//           alt="project picture"
//         />
//         <h4>Top Notch Barbing saloon Admin dashboard</h4>
//         <p>
//           TopNotch Admin Dashboard is a React-based web application built for
//           managing customer bookings and salon operations. It integrates
//           seamlessly with backend APIs through Supabase, ensuring secure data
//           handling, Authentication and real-time updates.Designed to be fully
//           responsive, .
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/Top-Notch-Administration.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://top-notch-administration.vercel.app/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>

//       {/* Weather application  */}

//       <div className={styles.card}>
//         <img
//           className={styles.workimages}
//           src="/Weatherapp.png"
//           alt="project picture"
//         />
//         <h4>Weather Application</h4>
//         <p>
//           Weather Application is a React-based web app designed to provide
//           real-time weather updates and forecasts. It integrates external
//           weather APIs for accurate data retrieval, leverages TypeScript for
//           type safety and maintainable code, and employs modern React features
//           for a smooth, responsive user experience across all devices.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "space-between",
//             padding: 15,
//           }}
//         >
//           <a href="https://github.com/UCHEOGBU007/Weatherapp.git">
//             <GrGithub
//               style={{
//                 color: "#EEEEEE",
//                 background: "#393E46",
//                 fontSize: "xx-large",
//               }}
//             />
//           </a>
//           <a href="https://weatherapp-henna-alpha.vercel.app/">
//             <IoLogoRss style={{ color: "#00ADB5", fontSize: "xx-large" }} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import styles from "./Cards.module.css";
import { GrGithub } from "react-icons/gr";
import { IoLogoRss } from "react-icons/io";
import { motion } from "framer-motion";

export default function CardComponent() {
  const projects = [
    {
      title: "Top Notch Barbing saloon",
      img: "/Topnotch.png",
      desc: "An appointment booking app leveraging React Router for multi-page navigation and modular CSS for a consistent UI/UX.",
      github: "https://github.com/UCHEOGBU007/Top-Notch-Salon.git",
      demo: "https://top-notch-salon.vercel.app/",
    },
    {
      title: "Top Notch Admin dashboard",
      img: "/Topnotchadmin.png",
      desc: "A management tool integrated with Supabase for secure data handling, real-time updates, and user authentication.",
      github: "https://github.com/UCHEOGBU007/Top-Notch-Administration.git",
      demo: "https://top-notch-administration.vercel.app/",
    },
    {
      title: "Start up Website",
      img: "/Tsolusions.png",
      desc: "A modern startup site using Tailwind CSS, React/TypeScript for type safety, and Formspree/EmailJS for client notifications.",
      github: "https://github.com/UCHEOGBU007/t-solusion.git",
      demo: "https://www.tsolusions.com/",
    },
    {
      title: "Little lemon restaurant",
      img: "/Littlelemon1.png",
      desc: "A React web app for reservations featuring global state management via Context API and seamless navigation with React Router.",
      github:
        "https://github.com/UCHEOGBU007/Little-lemon-Capstone-project.git",
      demo: "https://little-lemon-capstone-project-one.vercel.app/",
    },
    {
      title: "Weather Application",
      img: "/Weatherapp.png",
      desc: "A real-time weather update app utilizing external APIs, TypeScript for type safety, and modern React features.",
      github: "https://github.com/UCHEOGBU007/Weatherapp.git",
      demo: "https://weatherapp-henna-alpha.vercel.app/",
    },
    {
      title: "REACT Todo-list",
      img: "/Todolist.png",
      desc: "A React project utilizing the useState hook to manipulate the virtual DOM and list input items. Styled with Vanilla CSS Modules for modularity.",
      github: "https://github.com/UCHEOGBU007/React-Todo-list-.git",
      demo: "https://react-todo-list-eta-tan.vercel.app/",
    },
    {
      title: "Banggai Proposal page",
      img: "/Banggai.png",
      desc: "A proposal landing page built with HTML5 for structure and SEO, Vanilla CSS3 for styling, and JavaScript for responsiveness.",
      github: "https://github.com/UCHEOGBU007/bangai-tour-and-travel-new-.git",
      demo: "https://ucheogbu007.github.io/bangai-tour-and-travel-new-/",
    },

    {
      title: "Admin Dashboard",
      img: "/Admin.png",
      desc: "A static, fully responsive Admin Dashboard designed with HTML5 and CSS3, ensuring compatibility across all modern devices.",
      github: "https://github.com/UCHEOGBU007/Dashboard.git",
      demo: "https://ucheogbu007.github.io/Dashboard/",
    },
    {
      title: "Yayasan Proposal page",
      img: "/Yayasan.png",
      desc: "A proposal-based project focusing on frontend fundamentals: HTML5 SEO principles, Vanilla CSS3, and responsive JavaScript.",
      github: "https://github.com/UCHEOGBU007/yayasan-project.git",
      demo: "https://ucheogbu007.github.io/yayasan-project/",
    },
  ];

  return (
    <section className={styles.container}>
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -10 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <img
            className={styles.workimages}
            src={project.img}
            alt={project.title}
          />

          <div className={styles.cardContent}>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>

            <div className={styles.iconWrapper}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <GrGithub className={styles.githubIcon} />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <IoLogoRss className={styles.linkIcon} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
