import React  from "react";
import './footer.css';
const Footer = () => {
return(
<>
<footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">eCommerce</h1>
          <p>
            Welcome to our eCommerce site. We offer the best products for the best prices.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@ecommerce.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 eCommerce | Designed by YourName
      </div>
    </footer>
</>
);
}

export default Footer;