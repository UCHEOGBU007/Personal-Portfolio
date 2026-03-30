// import { useState } from "react";
// import { BsFillSendFill } from "react-icons/bs";
// import styles from "./Contact.module.css";
// import { motion } from "framer-motion";
// import { useForm, ValidationError } from "@formspree/react";

// export default function Contactform() {
//   // Form state management
//   const [state, handleSubmit] = useForm("mdkeljpy"); // Replace 'mdkeljpy' with your actual Formspree ID
//   const [data, setData] = useState({
//     Name: "",
//     email: "",
//     message: "",
//   });

//   // Main component structure with animations and form handling
//   return (
//     <div className={styles.container} id="contact">
//       {/* Container for the entire form */}
//       <div className={styles.container2}>
//         <motion.div
//           className={styles.contactIcon}
//           initial={{ opacity: 0, x: -200 }} // Starting animation state
//           whileInView={{ opacity: 1, x: 0 }} // Ending animation state
//           viewport={{ once: true }} // Animation runs only once
//           transition={{ duration: 1, delay: 2 }} // Animation duration and delay
//         >
//           <h5>
//             GOT A PROJECT IN <br />
//             <span style={{ color: "#00adb5" }}>MIND?</span>{" "}
//           </h5>
//           <img src="/Contact.png" alt="contact steps" />
//         </motion.div>
//         <div className={styles.form}>
//           <motion.form
//             onSubmit={(e) => {
//               e.preventDefault(); // Prevent default form submission behavior

//               // Pass form data to Formspree's handleSubmit function
//               handleSubmit({
//                 name: data.Name,
//                 email: data.email,
//                 message: data.message,
//               });

//               // Reset form state and show a success message if submission succeeds
//               if (state.succeeded) {
//                 alert("Form submitted successfully!");
//                 setData({
//                   Name: "",
//                   email: "",
//                   message: "",
//                 });
//               }
//             }}
//             initial={{ opacity: 0, x: 300 }} // Starting animation state
//             whileInView={{ opacity: 1, x: 0 }} // Ending animation state
//             viewport={{ once: true }} // Animation runs only once
//             transition={{ duration: 1, delay: 1 }} // Animation duration and delay
//           >
//             {/* Input for name */}
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Name"
//               value={data.Name}
//               onChange={(e) => setData({ ...data, Name: e.target.value })}
//               required
//             />
//             {/* Validation error for name */}
//             <ValidationError prefix="Name" field="name" errors={state.errors} />

//             <input
//               type="email"
//               value={data.email}
//               onChange={(e) => setData({ ...data, email: e.target.value })}
//               id="email"
//               name="email"
//               placeholder="Email"
//               required
//             />
//             {/* Validation error for email */}
//             <ValidationError
//               prefix="Email"
//               field="email"
//               errors={state.errors}
//             />
//             <br />
//             <textarea
//               value={data.message} // Bind input value to state
//               onChange={(e) => setData({ ...data, message: e.target.value })} // Update state on input change
//               name="Message"
//               id="Message"
//               placeholder="Type your message here"
//               required
//             ></textarea>
//             <ValidationError
//               prefix="Message"
//               field="message"
//               errors={state.errors}
//             />
//             <br />
//             <button
//               type="submit"
//               className={styles.submit}
//               disabled={state.submitting}
//             >
//               Submit <BsFillSendFill />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import styles from "./Contact.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contactform() {
  const [state, handleSubmit] = useForm("mdkeljpy");
  const [data, setData] = useState({ Name: "", email: "", message: "" });

  // Clear form when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      setData({ Name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <section className={styles.container} id="contact">
      <div className={styles.container2}>
        {/* Left Side: Branding & Image */}
        <motion.div
          className={styles.contactIcon}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h5 className={styles.title}>
            GOT A PROJECT IN <br />
            <span className={styles.highlight}>MIND?</span>
          </h5>
          <img
            src="/Contact.png"
            alt="contact steps"
            className={styles.vectorImg}
          />
        </motion.div>

        {/* Right Side: Form */}
        <div className={styles.formWrapper}>
          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Thanks for reaching out!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={data.Name}
                    onChange={(e) => setData({ ...data, Name: e.target.value })}
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <BsFillSendFill />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
