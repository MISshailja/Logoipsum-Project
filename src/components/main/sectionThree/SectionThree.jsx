import React from "react";
import { FaCheck } from "react-icons/fa6";
import tech1 from "../../../assets/img/web-settings 1.png";
import tech2 from "../../../assets/img/web-settings6.png";
import tech3 from "../../../assets/img/web-settings 3.png";
import tech4 from "../../../assets/img/web-settings 4.png";
import tech5 from "../../../assets/img/web-settings2.png";
import tech6 from "../../../assets/img/web-settings 5.png";

import "./style.css";

const SectionThree = () => {
  return (
    <>
      <section
        id="section3"
        className="p-0 md:p-5 lg:p-8 bg-white min-h-[300px] flex items-center flex-col"
      >
        <div className="flex flex-col align-middle justify-center text-center">
          <h2>Our Diverse Technology Competency</h2>
          <p className="sectionTwo-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        <div className="Diverse-Technology">
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech1} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>Backend Development</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech2} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>Fronted Development</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech3} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>Mobile Development</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech4} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>Blockchain, Ai/ML</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech5} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>DevOps & Low-Code</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
          <div className="development-boxes">
            <div className="development-boxes-content">
              <div className="boxes-content">
                <img src={tech6} alt="img" />
              </div>
              <div className="boxes-content">
                <h3>E-commerce & CMS</h3>
              </div>
              <div className="boxes-content">
                <div className="boxes-content-tech">
                  <span>NET</span>
                  <span>C/C++</span>
                  <span>Django</span>
                  <span>Firebase</span>
                  <span>Golang</span>
                  <span>Symfony</span>
                  <span>Laravel</span>
                  <span>Node</span>
                  <span>PHP</span>
                  <span>Python</span>
                  <span>Ruby on Rails</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
