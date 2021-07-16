import React from "react";
import me from "../assets/img/me.JPG";
import Typical from "react-typical";

function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div class="card">
            <div class="card-header">
              <ion-icon name="person"></ion-icon>&emsp;About Me
            </div>
            <div class="card-body">
              <div className="row">
                <div className="profile-pic col-lg-4">
                  <img className="myPic" src={me} alt="Me" />
                </div>
                <div className="col-lg-8">
                  <div className="header-body">
                    <div className="header-text">
                      <h6 class="card-subtitle mb-2">Hello World!</h6>
                      <h1 class="card-title">I am Tanumon Roy</h1>
                      <h5 class="card-subtitle mb-2">
                        <Typical
                          steps={[
                            "And I'm a software developer",
                            4000,
                            "And I'm a student",
                            2000,
                            "And I'm a technical enthusiast",
                            2000,
                            "And I'm a gamer",
                            2000,
                          ]}
                          loop={Infinity}
                          wrapper="p"
                        />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
