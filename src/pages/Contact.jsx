

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.css";

function Contact(){

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_ipo7npt",     // service ID
      "template_zkbg9xx",    // template ID
      form.current,
      "UzNqEuft8pYEz1k8U"   // public key
    )

    .then(
      () => {
        alert("Message Sent Successfully!")
      },
      () => {
        alert("Failed to send message.")
      }
    )
  }

  return(


    // <section className="contact-container">
    //   <h2>Contact Me</h2>

    //   <form ref={form} onSubmit={sendEmail}>

    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       required
    //     />

    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       required
    //     />

    //     <textarea
    //       name="message"
    //       placeholder="Message"
    //       required
    //     ></textarea>

    //     <button type="submit">
    //       Send Message
    //     </button>

    //   </form>
    // </section>



<section className="contact-container">

  <h2>Contact Me</h2>

  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>

  </form>

</section>

  )
}

export default Contact