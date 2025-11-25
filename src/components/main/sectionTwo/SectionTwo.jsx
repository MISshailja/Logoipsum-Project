import React from "react";
import { FaCheck } from "react-icons/fa6";
import developer from "../../../assets/img/2844250 1.png";
import developer2 from "../../../assets/img/2517913 1.png";
import RightBg from "../../../assets/img/image 7.png";
import topLeftBg from "../../../assets/img/image 6.png";
import RightBg2 from "../../../assets/img/image 9.png";
import topLeftBg2 from "../../../assets/img/image 8.png";

import "./style.css";

const SectionTwo = () => {
  return (
    <>
      <section
        id="section2"
        className="p-0 md:p-5 lg:p-8 bg-white min-h-[300px] flex items-center justify-center flex-col"
      >

<div className="topRightBg">
  <img src={RightBg} alt="img" />
</div>



<div className="topRightBg2">
  <img src={RightBg2} alt="img" />
</div>

        <div className="flex flex-col align-middle justify-center text-center">
          <h2>Why Hire Developers From Our Name</h2>
          <p className="sectionTwo-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        <div className="sectionTwo-firstdiv">
          <div className="highQuality">
            <div className="img-container">
              <img src={developer} alt="img" />
            </div>
          </div>

          <div className="highQuality">
            <h3 className="high-Quality">High Quality/Cost Ratio</h3>

            <div className="highQuality-para">
              <div className="highQuality-para-one">
                <div className="para-one">
                  <span className="checkd">
                    <FaCheck />
                  </span>
                </div>
                <div className="para-one">
                  <h3>Hire SiliCon Valley Caliber At Half The Cost</h3>
                  <p>
                    Top 1% Pre-Vetted, In-house & Dedicated Software Programmers{" "}
                  </p>
                </div>
              </div>

              <div className="highQuality-para-one">
                <div className="para-one">
                  <span className="checkd unchkd">
                    <FaCheck />
                  </span>
                </div>
                <div className="para-one">
                  <h3>Hire SiliCon Valley Caliber At Half The Cost</h3>
                  <p>
                    Top 1% Pre-Vetted, In-house & Dedicated Software
                    ProgrammersHire the Top 1.5% of{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionTwo-firstdiv">
          <div className="highQuality">
            <h3 className="high-Quality">Rigorous Vetting</h3>

            <div className="highQuality-para">
              <div className="highQuality-para-one">
                <div className="para-one">
                  <span className="checkd">
                    <FaCheck />
                  </span>
                </div>
                <div className="para-one">
                  <h3>5+ hours of tests and interviews</h3>
                  <p>
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="highQuality-para-one">
                <div className="para-one">
                  <span className="checkd unchkd">
                    <FaCheck />
                  </span>
                </div>
                <div className="para-one">
                  <h3>Seniority tests</h3>
                  <p>
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="highQuality">
            <div className="img-container">
              <img src={developer2} alt="img" />
            </div>
          </div>
        </div>


<div className="topLeftBg">
  <img src={topLeftBg} alt="img" />
</div>

<div className="topLeftBg2">
  <img src={topLeftBg2} alt="img" />
</div>
      </section>
    </>
  );
};

export default SectionTwo;
