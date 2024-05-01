import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Title */}
        <div className="footer-logo-title">
          
          
          <h1 className="footer-title">SoulSync</h1>
        </div>
        
        {/* Products or Services */}
        <div className="footer-services">
          <div className="services">
            <ul>
              <li><a href="/activities">Divine Activities for all Generations</a></li>
              <li><a href="/pomodoro">Pomodoro Spiritual Break</a></li>
            </ul>
          </div>
          
          <div className="services">
            <ul>
              <li><a href="/meditation">Augmented Reality Meditation</a></li>
              <li><a href="/shlok">Read a Shlok</a></li>
            </ul>
          </div>
          
          <div className="services">
            <ul>
              <li><a href="/events">Iskcon Events</a></li>
              <li><a href="/rejuvenate">Rejuvenate</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact or Copyright */}
        <div className="contact-copyright">
          <p>Made with ❤️</p>
          <p>For inquiries, please email us at: info@soulsync.com</p>
          <p>&copy; <span id="copyright-year"></span> SoulSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;