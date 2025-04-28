import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section className="contact card-box">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:oliverospaulinekaye03@gmail.com">oliverospaulinekaye03@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Pauline-Oliveros/" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        {submitted && <p className="success-message">Thank you for your message! We'll get back to you soon.</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
