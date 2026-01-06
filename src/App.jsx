import { useState } from "react";
import Header from "./Header.jsx";
import Mainsection from "./Mainsection.jsx";
import About from "./About.jsx";
import Projectskills from "./Projectskills.jsx";
import Contactform from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Cients from "./Clients.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    // all components container
    <>
      <Header />
      <Mainsection />
      <About />
      <Projectskills />
      <Cients />
      <Contactform />
      <hr />
      <Footer />
    </>
  );
}

export default App;
