import React from "react";
import Page1 from "../../../assets/img/Page-1.png";
import backgroundImg from "../../../assets/img/Rectangle 107.png";

import "./style.css";

const SectionSix = () => {
  return (
    <>
      <section
        id="section6"
        className="section6 p-0 md:p-5 lg:p-8 min-h-[300px] "
      >
        <div className="flex flex-col align-middle justify-center text-center">
          <h5>User Guide to Hire Dedicated Software Developers</h5>
        </div>

        <div class="sectionSix-container">
          <div class="left-box">
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn active">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
            <div class="left-boxIn">
              <span>Best-in-class project management</span>
            </div>
          </div>

          <div class="right-box">
            <div className="rightBox-Content">
              <h5>Benefits of Hiring Developers</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            <div class="right-boxIn">
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Client-centric approach</span>
              </div>
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Best-in-class project management</span>
              </div>
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Global quality standards</span>
              </div>
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Time-zone compatibility</span>
              </div>
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Cutting-edge infrastructure</span>
              </div>
              <div class="ri-boxIn">
                <span>
                  <img src={Page1} alt="img" />
                </span>
                <span>Agile adaptability</span>
              </div>
            </div>
            <div class="right-boxImg">
              <img src={backgroundImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSix;
