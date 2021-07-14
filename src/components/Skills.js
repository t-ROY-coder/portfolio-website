import React from "react";
import { SkillsData } from "../assets/SkillsData";
import StarRatings from "react-star-ratings";

function Skills() {
  return (
    <>
      <div className="container skills-section">
        <div class="card">
          <div class="card-header">
            <ion-icon name="construct"></ion-icon>&emsp;Technical Skills
          </div>
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
                        <li key={i}>
                          <p>
                            {e}
                            <div className="rating">
                              <StarRatings
                                rating={2.5}
                                starRatedColor="#7289da"
                                starEmptyColor="#aaa"
                                numberOfStars={5}
                                name="rating"
                                starDimension="1.5rem"
                                starSpacing="0.5rem"
                              />
                            </div>
                          </p>
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
