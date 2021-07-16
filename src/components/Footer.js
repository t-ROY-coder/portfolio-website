import React from "react";
import logo from "../assets/img/ROY_logo.png";

function Footer() {
  return (
    <>
      <footer class="navbar-expand-lg navbar-custom">
        <div className="footer-content">
          <img className="logo" src={logo} alt="logo" />
          <div className="footer-text section-container">
            <p>Developed by:</p>
            <h4>Tanumon Roy</h4>
            <a href="https://github.com/t-ROY-coder" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/tanumon-roy-6b2109193/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#contact">
              <ion-icon name="mail"></ion-icon>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
