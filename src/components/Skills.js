import React from "react";
import { SkillsData } from "../assets/SkillsData";

function Skills() {
  return (
    <>
      <div className="container skills-container">
        <div class="card">
          <div class="card-header">Skills</div>
          <div class="card-body section-container">
            <div className="row">
              <div className="col-lg-3">
                <h3 class="card-title section-title">
                  <ion-icon name="language-outline"></ion-icon>
                  <br />
                  Languages
                </h3>
                <div className="section-text">
                  <ul>
                    {SkillsData.languages.map((e, i) => {
                      return (
                        <li>
                          <p>{e}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <h3 class="card-title section-title">
                  <ion-icon name="book-outline"></ion-icon>
                  <br />
                  Concepts
                </h3>
                <div className="section-text">
                  <ul>
                    {SkillsData.concepts.map((e, i) => {
                      return (
                        <li>
                          <p>{e}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <h3 class="card-title section-title">
                  <ion-icon name="hammer-outline"></ion-icon>
                  <br />
                  Dev-Tools
                </h3>
                <div className="section-text">
                  <ul>
                    {SkillsData.devTools.map((e, i) => {
                      return (
                        <li>
                          <p>{e}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <h3 class="card-title section-title">
                  <ion-icon name="library-outline"></ion-icon>
                  <br />
                  Libraries
                </h3>
                <div className="section-text">
                  <ul>
                    {SkillsData.libraries.map((e, i) => {
                      return (
                        <li>
                          <p>{e}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
