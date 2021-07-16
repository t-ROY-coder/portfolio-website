import React, { useState } from "react";
import { SkillsData } from "../assets/SkillsData";
import StarRatings from "react-star-ratings";

function Skills() {
  const outputDOM = [];
  const [IsHovering, setIsHovering] = useState(null);

  const makeDOM = () => {
    SkillsData.forEach((e, i) => {
      outputDOM.push(
        <div className="col-lg-3">
          <h3 class="card-title section-title">
            {e.icon}
            <br />
            {e.title}
          </h3>
          <div className="section-text">
            <ul>
              {e.list.map((item, j) => {
                if (IsHovering === item.name) {
                  return (
                    <li
                      key={j}
                      onMouseEnter={() => setIsHovering(item.name)}
                      onMouseLeave={() => setIsHovering(null)}
                    >
                      <p>
                        {item.name}
                        <div className="rating">
                          <StarRatings
                            rating={item.rating}
                            starRatedColor="#7289da"
                            starEmptyColor="#36393e"
                            numberOfStars={5}
                            name="rating"
                            starDimension="1.5rem"
                            starSpacing="0.5rem"
                          />
                        </div>
                      </p>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={j}
                      onClick={() =>
                        setIsHovering(IsHovering === null ? item.name : null)
                      }
                      // onMouseLeave={() => setIsHovering(null)}
                    >
                      <p>{item.name}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      );
    });
    return outputDOM;
  };

  return (
    <>
      <div className="container skills-section" id="skills">
        <div class="card">
          <div class="card-header">
            <ion-icon name="construct"></ion-icon>&emsp;Technical Skills
          </div>
          <div class="card-body section-container">
            <div className="row">{makeDOM()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
