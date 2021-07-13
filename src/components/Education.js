import React from "react";

function Education() {
  return (
    <>
      <div className="container">
        <div class="card">
          <div class="card-header">Education</div>
          <div class="card-body section-container">
            <div className="row">
              <h3 class="card-title section-title">
                Bachelor's <ion-icon name="ribbon-outline"></ion-icon>
              </h3>
              <div className="section-subtitle">
                <h1>National Institute of Technology, Warangal</h1>
                <p>JULY 2017 - JUNE 2021</p>
              </div>
              <div className="section-text">
                <h6 class="card-subtitle mb-2 text-muted">
                  Bachelor of Technology
                </h6>
                <h5 class="card-subtitle mb-2 text-muted">
                  Electronics and Communication Engineering
                </h5>
                <p>7.49 CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
