import styles from "./Cards.module.css";
import { GrGithub } from "react-icons/gr";
import { IoLogoRss } from "react-icons/io";
import { motion } from "framer-motion";

export default function CardComponent() {
  const projects = [
    {
      title: "POS Software",
      img: "/possoftware.png",
      desc: "A comprehensive Point of Sale (POS) software built with React, TypeScript, Tailwind CSS, useContext and supabase. featuring real-time inventory management and sales analytics.",
      github: "https://github.com/UCHEOGBU007/POSSOFTWARE-.git",
      demo: "https://possoftware-inky.vercel.app/",
    },
    {
      title: "Gaura Tour and Travel",
      img: "/gauratour1.png",
      desc: "A travel booking platform designed to provide users with a seamless experience for planning and managing their trips.",
      github: "https://github.com/UCHEOGBU007/Gaura-Journeys.git",
      demo: "https://gaura-journeys.vercel.app/",
    },
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
      title: " Courier Service Website",
      img: "/couriercompany.png",
      desc: "A courier service website built with modern web technologies for efficient package tracking and management.",
      github: "https://github.com/UCHEOGBU007/Courier-Service-Website.git",
      demo: "https://swiftcourier-opal.vercel.app/",
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
            loading="lazy"
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
