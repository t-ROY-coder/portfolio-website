import React, { useState } from "react";
import { ProjectData } from "../assets/ProjectData";

function Projects() {
  const [IsHovering, setIsHovering] = useState(null);

  return (
    <>
      <div className="container proj-container">
        <div class="card">
          <div class="card-header">
            <ion-icon name="git-branch"></ion-icon>&emsp;Some of my Work...
          </div>
          <div class="card-body section-container">
            <div className="row thumbs">
              {ProjectData.map((e, i) => {
                if (i === IsHovering) {
                  return (
                    <div className="col-lg-4">
                      <div
                        className="card"
                        onMouseEnter={() => setIsHovering(i)}
                        onMouseLeave={() => setIsHovering(null)}
                      >
                        <div className="card-body">
                          <h3 class="card-title section-title">{e.title}</h3>
                          <p>{e.time}</p>
                          <a href={e.link} target="_blank">
                            <button type="button" class="btn btn-primary">
                              Visit Website{" "}
                              <ion-icon name="open-outline"></ion-icon>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-lg-4">
                      <div
                        className="card"
                        onMouseEnter={() => setIsHovering(i)}
                        onMouseLeave={() => setIsHovering(null)}
                      >
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
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
