import React, { useState } from "react";
import { Colors } from "../assets/Colors";
import logo from "../assets/img/ROY_logo.png";

const Navbar = () => {
  const [DarkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setDarkMode(!DarkMode);
    changeColors();
  };
  const changeColors = () => {
    document.documentElement.style.setProperty(
      "--bg-color",
      DarkMode ? Colors.darkBgColor : Colors.lightBgColor
    );
    document.documentElement.style.setProperty(
      "--section-color",
      DarkMode ? Colors.darkSectionColor : Colors.lightSectionColor
    );
    document.documentElement.style.setProperty(
      "--mute-color",
      DarkMode ? Colors.darkMuteColor : Colors.lightMuteColor
    );
    document.documentElement.style.setProperty(
      "--mute-highlight-color",
      DarkMode ? Colors.darkMuteHighlightColor : Colors.lightMuteHighlightColor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      DarkMode ? Colors.darkTextColor : Colors.lightTextColor
    );
    document.documentElement.style.setProperty(
      "--highlight-color",
      DarkMode ? Colors.darkHighlightColor : Colors.lightHighlightColor
    );
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ion-icon name="menu"></ion-icon>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  <ion-icon name="person"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  <ion-icon name="stats-chart"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#exp">
                  <ion-icon name="briefcase"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={handleDarkMode}>
                  <ion-icon name="moon"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
