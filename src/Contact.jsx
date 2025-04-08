import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs"; // Import the "Send" icon
import styles from "./Contact.module.css"; // Import CSS for styling
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useForm, ValidationError } from "@formspree/react"; // Import Formspree tools

export default function Contactform() {
  // Form state management
  const [state, handleSubmit] = useForm("mdkeljpy"); // Replace 'mdkeljpy' with your actual Formspree ID
  const [data, setData] = useState({
    Name: "",
    email: "",
    message: "",
  });

  // Main component structure with animations and form handling
  return (
    <div className={styles.container} id="contact">
      {/* Container for the entire form */}
      <div className={styles.container2}>
        <motion.div
          className={styles.contactIcon}
          initial={{ opacity: 0, x: -200 }} // Starting animation state
          whileInView={{ opacity: 1, x: 0 }} // Ending animation state
          viewport={{ once: true }} // Animation runs only once
          transition={{ duration: 1, delay: 2 }} // Animation duration and delay
        >
          <h5>
            GOT A PROJECT IN <br />
            <span style={{ color: "#00adb5" }}>MIND?</span>{" "}
          </h5>
          <img src="/Contact.png" alt="contact steps" />
        </motion.div>
        <div className={styles.form}>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior

              // Pass form data to Formspree's handleSubmit function
              handleSubmit({
                name: data.Name,
                email: data.email,
                message: data.message,
              });

              // Reset form state and show a success message if submission succeeds
              if (state.succeeded) {
                alert("Form submitted successfully!");
                setData({
                  Name: "",
                  email: "",
                  message: "",
                });
              }
            }}
            initial={{ opacity: 0, x: 300 }} // Starting animation state
            whileInView={{ opacity: 1, x: 0 }} // Ending animation state
            viewport={{ once: true }} // Animation runs only once
            transition={{ duration: 1, delay: 1 }} // Animation duration and delay
          >
            {/* Input for name */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={data.Name}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
              required
            />
            {/* Validation error for name */}
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            {/* Validation error for email */}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <br />
            <textarea
              value={data.message} // Bind input value to state
              onChange={(e) => setData({ ...data, message: e.target.value })} // Update state on input change
              name="Message"
              id="Message"
              placeholder="Type your message here"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <br />
            <button
              type="submit"
              className={styles.submit}
              disabled={state.submitting}
            >
              Submit <BsFillSendFill />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
