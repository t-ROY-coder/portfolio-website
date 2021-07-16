import React from "react";
import logo from "../assets/img/ROY_logo.png";

const Navbar = () => {
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
            <span class="navbar-toggler-icon"></span>
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
                <a class="nav-link">
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
