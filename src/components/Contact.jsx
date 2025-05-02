import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xmcsft6',        // ✅ Your Service ID
      'template_trvgswd',       // ✅ Your Template ID
      form.current,
      'pJeHR4q9VfKA2z6lk'       // ✅ Your Public Key
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert("✅ Message sent successfully!");
        e.target.reset(); // clear form after successful submission
      },
      (error) => {
        console.error('FAILED...', error);
        alert("❌ Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="text-center mb-4 design">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-info w-100">Send Message</button>
            </form>
            <div className="social-links text-center mt-4">
              <a href="#" className="me-3 text-dark">LinkedIn</a>
              <a href="#" className="me-3 text-dark">GitHub</a>
              <a href="https://www.youtube.com/@AshokvAshu" className="text-dark">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
