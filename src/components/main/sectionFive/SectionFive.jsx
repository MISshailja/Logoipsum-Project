import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import pik1 from "../../../assets/img/pik1.png";
import pik2 from "../../../assets/img/pik2.png";
import pik3 from "../../../assets/img/pik3.png";
import pik4 from "../../../assets/img/pik4.png";

import "./style.css";

const SectionFive = () => {
  return (
    <>
      <section
        id="section5"
        className="p-0 md:p-5 lg:p-8 bg-white min-h-[300px] flex items-center flex-col"
      >
        <div className="flex flex-col align-middle justify-center text-center">
          <h2>Our Hiring Process</h2>
          <p className="sectionTwo-para">
            Take a look at our simple and straightforward process to hire
            software developers from ValueCoders.
          </p>
        </div>

        <div className="sectionFive-Content">
          <div className="hiringProcess-box-one">
            <span><GoArrowRight /></span>
            
            <div className="hiringProcess-box">
              <div className="centeredImg">
                <img src={pik1} alt="img" />
              </div>
            </div>
            <div className="centeredMb">
              <h4>Inquiry</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>

          <div className="hiringProcess-box-one">
              <span><GoArrowRight /></span>
            <div className="hiringProcess-box">
              <div className="centeredImg">
                <img src={pik2} alt="img" />
              </div>
            </div>
            <div className="centeredMb">
              <h4>Select Developers</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>

          <div className="hiringProcess-box-one">
              <span><GoArrowRight /></span>
            <div className="hiringProcess-box">
              <div className="centeredImg">
                <img src={pik3} alt="img" />
              </div>
            </div>
            <div className="centeredMb">
              <h4>Team Integration</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>

          <div className="hiringProcess-box-one">
              <span><GoArrowRight /></span>
            <div className="hiringProcess-box">
              <div className="centeredImg">
                <img src={pik4} alt="img" />
              </div>
            </div>
            <div className="centeredMb">
              <h4>Team Scaling</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
