import React from "react";
import { AcadList } from "../assets/AcadList";

function Education() {
  return (
    <>
      <div className="container edu-section">
        <div class="card">
          <div class="card-header">
            <ion-icon name="school"></ion-icon>&emsp;Academic Background
          </div>
          <div class="card-body section-container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <h3 class="card-title section-title">
                      <ion-icon name="ribbon-outline"></ion-icon>
                      <br />
                      {AcadList[0].title}
                    </h3>
                    <div className="section-subtitle">
                      <h1>{AcadList[0].subtitle}</h1>
                      <p>{AcadList[0].time}</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2 text-muted">
                        {AcadList[0].degree}
                      </h6>
                      <h5 class="card-subtitle mb-2 text-muted">
                        {AcadList[0].major}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <h3 class="card-title section-title">
                      <ion-icon name="ribbon-outline"></ion-icon>
                      <br />
                      {AcadList[1].title}
                    </h3>
                    <div className="section-subtitle">
                      <h1>{AcadList[1].subtitle}</h1>
                      <p>{AcadList[1].time}</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2 text-muted">
                        {AcadList[1].degree}
                      </h6>
                      <h5 class="card-subtitle mb-2 text-muted">
                        {AcadList[1].major}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <h3 class="card-title section-title">
                      <ion-icon name="ribbon-outline"></ion-icon>
                      <br />
                      {AcadList[2].title}
                    </h3>
                    <div className="section-subtitle">
                      <h1>{AcadList[2].subtitle}</h1>
                      <p>{AcadList[2].time}</p>
                    </div>
                    <div className="section-text">
                      <h6 class="card-subtitle mb-2 text-muted">
                        {AcadList[2].degree}
                      </h6>
                      <h5 class="card-subtitle mb-2 text-muted">
                        {AcadList[2].major}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
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
                data-bs-target="#carouselExampleIndicators"
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

export default Education;
