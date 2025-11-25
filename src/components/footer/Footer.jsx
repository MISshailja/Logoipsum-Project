import React from "react";

import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/img/VectorLg.png";

import "./style.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-info">
              <Link to="/">
                <span className="block">
                  <img src={logo} alt="logo" />
                </span>
              </Link>
              <p className="footer-info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>

              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-rightIns">
                <h6>Quick Links</h6>
                <ul>
                  <li>Software Team</li>
                  <li>Technologies</li>
                  <li>Resources</li>
                  <li>Company</li>
                  <li>Contact us</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="footer-rightIns">
                <h6>Services</h6>
                <ul>
                  <li>Dedicated Development</li>
                  <li>Staff Augmentation Services</li>
                  <li>Software Development</li>
                  <li>Development Center</li>
                </ul>
              </div>
              <div className="footer-rightIns">
                <h6>Contact Us</h6>
                <ul className="contactFoter">
                  <li>
                    <span>
                      <MdPlace />
                    </span>
                    Envato, Level 13, 2 Elizabeth Victoria 3000 India
                  </li>
                  <li>
                    <span>
                      <MdEmail />
                    </span>
                    +91 861 944 1176
                  </li>
                  <li>
                    <span>
                      <FaPhone />
                    </span>
                    ezyoga@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>logoname. 2023. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
