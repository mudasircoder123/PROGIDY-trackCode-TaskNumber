import React from "react";
import { useState } from "react";
import Navbar from "./Nav";
import './contact.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

return(
<>
<Navbar/>
<h1> hii from Contact</h1>
<div className="contact-us">
<h2>Contact Us</h2>
<form onSubmit={handleSubmit}>
 <label htmlFor="name">Name:</label>
<input type="text" id="name"name="name"value={formData.name} onChange={handleChange} required/>
 <label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
<label htmlFor="phone">Phone:</label>
<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
<label htmlFor="subject">Subject:</label>
<input  type="text"  id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
 <label htmlFor="message">Message:</label>
<textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange}  required></textarea>
<label htmlFor="attachment">Attachment:</label>
 <input type="file" id="attachment" name="attachment" onChange={handleChange}/>
<div className="captcha">
 {/* Include your CAPTCHA widget here */}
</div>
<button type="submit">Submit</button>
 </form>
 <div className="contact-info">
 <h3>Contact Information</h3>
 <p><strong>Email:</strong> support@example.com</p>
  <p><strong>Phone:</strong> +1 234 567 890</p>
  <p><strong>Address:</strong> 123 E-commerce St, City, Country</p>
 <p><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
 </div>
<div className="social-media">
<h3>Follow Us</h3>
 <a href="https://www.facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
 <a href="https://www.twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>
 <a href="https://www.instagram.com"><img src="instagram-icon.png" alt="Instagram" /></a>
 </div>
 <div className="faq">
  <h3>FAQs</h3>
<p><a href="faq.html">Visit our FAQ page</a> for answers to common questions.</p>
 </div>
 </div>
 </>
);
};

export default Contact;