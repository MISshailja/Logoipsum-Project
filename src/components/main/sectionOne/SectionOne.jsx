import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";

const SectionOne = () => {
  return (
    <>
      <section
        id="section1"
        className="relative p-0 md:p-5 lg:p-8 min-h-[300px] md:min-h-[400px] lg:min-h-[600px] flex flex-col md:flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Two responsive divs */}
        <div className="firstdiv">
          {/* First div - larger */}
          <div className="firstdiv-content">
            <h1 className="hire-dedicated">Hire Dedicated</h1>
            <h1 className="developers">DEVELOPERS</h1>
            <p className="top-paragraph">
              Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
            </p>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <hr />
            <div className="firstdiv-button-container">
              <div className="firstdiv-button">
                View More{" "}
                <span>
                <GoArrowUpRight />
                </span>
              </div>

              <div className="firstdiv-button border-[#2DC67D] bg-transparent! text-[#233A41]">
                Get in Touch <span><GoArrowUpRight /></span>
              </div>
            </div>
          </div>

          <div className="seconddiv-content">
            <div className="form-container">
              <div className="create-team">
                <h1>Create Your Team</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div className="create-team-form">
                <div className="form-boxes">
                  <span>Full Name</span>
                  <input placeholder="Enter you name" />
                </div>
                <div className="form-boxes">
                  <span>Email Address</span>
                  <input placeholder="Enter you Email" />
                </div>
                <div className="form-boxes">
                  <span>Phone No</span>
                  <input placeholder="Enter you Number" />
                </div>
                <div className="form-boxes">
                  <span>Country</span>
                  <input placeholder="Enter you Country" />
                </div>
                <div className="form-boxes">
                  <span>Project Brief</span>
                  <textarea
                    className="h-[108px]"
                    placeholder="Enter you Project Brief"
                  />
                </div>

                <div className="create-team-button">
                  Hire Software Developer <span>/</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
