import React from "react";
import { ProjectData } from "../assets/ProjectData";

function Projects() {
  return (
    <>
      <div className="container skills-container">
        <div class="card">
          <div class="card-header">
            <ion-icon name="git-branch"></ion-icon>&emsp;Some of my Work...
          </div>
          <div class="card-body section-container">
            <div className="row thumbs">
              {ProjectData.map((e, i) => {
                return (
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 class="card-title section-title">{e.title}</h3>
                        <p>{e.time}</p>
                        <h6 class="card-subtitle mb-2 text-muted">
                          {e.description}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
