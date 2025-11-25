import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import empy1 from "../../../assets/img/Vector 1.png";
import empy2 from "../../../assets/img/Vector 2.png";
import empy3 from "../../../assets/img/Vector 3.png";
import empy4 from "../../../assets/img/Vector 4.png";
import playButton from "../../../assets/img/PlayBtn.png";
import star from "../../../assets/img/Stars.png";

import "./style.css";

const SectionSeven = () => {
  return (
    <>
      <section
        id="section7"
        className="p-0 md:p-5 lg:p-8 bg-white min-h-[300px]  flex flex-col items-center justify-center text-center"
      >
        <div className="section7 text-center">
          <h6>What Our Clients Have to Say About Us</h6>
          <p className="sectionTwo-para">
          Take a look at our simple and straightforward process to hire software
          </p>
        </div>

        <div className="sectionSeven-Content">
          <div className="Section7-box-one">
          
            <div className="EMPYbox">
              <div className="centeredImg">
                <img src={empy1} alt="img" />
              </div>
                <div className="playButton">
                <img src={playButton} alt="img" />
              </div>
            </div>
            <div className="centeredMb7">
              <h4>Krish Bruynson</h4>
                 <p>
               Director, Storloft
              </p>
            </div>
             <div className="centeredMb7">
               <div className="centeredMb-star">
              <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
              </div>
            </div>
          </div>

          <div className="Section7-box-one">
          
            <div className="EMPYbox">
              <div className="centeredImg">
                <img src={empy2} alt="img" />
              </div>
              <div className="playButton">
                <img src={playButton} alt="img" />
              </div>
            </div>
            <div className="centeredMb7">
               <h4>Krish Bruynson</h4>
                 <p>
               Director, Storloft
              </p>
            </div>
             <div className="centeredMb7">
               <div className="centeredMb-star">
              <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
              </div>
            </div>
          </div>

            <div className="Section7-box-one">
          
            <div className="EMPYbox">
              <div className="centeredImg">
                <img src={empy3} alt="img" />
              </div>
                <div className="playButton">
                <img src={playButton} alt="img" />
              </div>
            </div>
            <div className="centeredMb7">
              <h4>Krish Bruynson</h4>
                <p>
               Director, Storloft
              </p>
            </div>

             <div className="centeredMb7">
               <div className="centeredMb-star">
              <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
              </div>
            </div>
          </div>

           <div className="Section7-box-one">
          
            <div className="EMPYbox">
              <div className="centeredImg">
                <img src={empy4} alt="img" />
              </div>
                <div className="playButton">
                <img src={playButton} alt="img" />
              </div>
            </div>
            <div className="centeredMb7">
              <h4>Krish Bruynson</h4>
              <p>
               Director, Storloft
              </p>
            </div>

            <div className="centeredMb7">
               <div className="centeredMb-star">
              <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
               <span>
                <img src={star} alt="img" />
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSeven;
