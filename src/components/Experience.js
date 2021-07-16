import React from "react";

function Experience() {
  return (
    <>
      <div className="container exp-section" id="exp">
        <div class="card">
          <div class="card-header">
            <ion-icon name="briefcase"></ion-icon>&emsp;Experience
          </div>
          <div class="card-body section-container">
            <div className="row" hidden>
              <h3 class="card-title section-title">
                <ion-icon name="trending-up-outline"></ion-icon>
                <br />
                Program Associate B (SDE)
              </h3>
              <div className="section-subtitle">
                <h1>Wells Fargo</h1>
                <p>Aug 2021 - Present</p>
              </div>
              <div className="section-text">
                <h6 class="card-subtitle mb-2">Job Description</h6>
                <h5 class="card-subtitle mb-2 container">
                  Work as part of the Middleware /Webservices team to support
                  the functional and Automation testing in Agile model. And be
                  responsible for driving the software development process
                  towards quality centric methodologies.
                </h5>
              </div>
            </div>
            <div className="row">
              <h3 class="card-title section-title">
                <ion-icon name="trending-up-outline"></ion-icon>
                <br />
                Full-Stack Developer Intern
              </h3>
              <div className="section-subtitle">
                <h1>OpenNets</h1>
                <p>July 2020 - Aug 2020</p>
              </div>
              <div className="section-text">
                <h6 class="card-subtitle mb-2">Job Description</h6>
                <h5 class="card-subtitle mb-2 container">
                  Designed and created an interface to create, configure and
                  handle custom network topologies
                </h5>
              </div>
            </div>
            <h3 class="card-title section-title">
              <ion-icon name="medal-outline"></ion-icon>
              <br />
              Positions of Responsibility
            </h3>
            <div
              id="expCarousel"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#expCarousel"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#expCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#expCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="section-subtitle">
                      <h1>Associate Analyst</h1>
                      <p>Sep 2020 - June 2021</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2">Organisation</h6>
                      <h5 class="card-subtitle mb-2">
                        Big Data, Analytics and Consultancy Cell, NITW
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="section-subtitle">
                      <h1>Event Organiser, Youth Fest 2020 </h1>
                      <p>Jan 2020</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2">Organisation</h6>
                      <h5 class="card-subtitle mb-2">Robotics Club, NITW</h5>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="section-subtitle">
                      <h1>Executive Member</h1>
                      <p>Sep 2019 - June 2020</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2">Organisation</h6>
                      <h5 class="card-subtitle mb-2">Robotics Club, NITW</h5>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#expCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#expCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
