import React from "react";

import { GoArrowUpRight } from "react-icons/go";
import pictures1 from "../../../assets/img/bg-11.png";

import "./style.css";

const SectionFour = () => {
  return (
    <>
      <section
        id="section4"
        className="p-0 md:p-5 lg:p-8 bg-white min-h-[300px] flex items-center flex-col"
      >
        <div className="sectionFour-firstdiv">
         
          <div className="sectionFr">
             <h3 className="softWareDevops">
            Why Hire Software Developers<br/>in India?
          </h3>
            <div className="img-container pt-12">
              <img src={pictures1} alt="img" />
            </div>
          </div>

          <div className="sectionFr">
            <div className="sectionFr-para">
              <ul>
                <li>English Speaking Programmers <span><GoArrowUpRight /></span></li>
                <li>English Speaking Programmers <span><GoArrowUpRight /></span></li>
                <li>Flexible Work Hours <span><GoArrowUpRight /></span></li>
                <li>Rapid Onboarding Process <span><GoArrowUpRight /></span></li>
                <li>Expertise in Top Technologies <span><GoArrowUpRight /></span></li>
                <li>Reliable Partner Credentials <span><GoArrowUpRight /></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
