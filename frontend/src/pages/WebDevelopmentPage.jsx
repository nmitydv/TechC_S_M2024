import React from "react";
import WebDevelopment from "../assets/web-development.svg";
import "../pages/WebDesign.css";
import { HiArrowRight } from "react-icons/hi";

const WebDevelopmentPage = () => {
  return (
    <>
      <div className="col-7 webDesign_ctn p-0">
        <div className="d-flex">
          <div className="col-6 p-4 align-content-center">
            <div className="p-5">
              <h2 className="fw-bold">Web Development</h2>
              <p className="text-secondary mt-3 inside_text">
                We develop fast, perfectly responsive, and SEO-optimized
                websites built with the best development practice of 2023.
              </p>
              <span className="learn_title ">
                {" "}
                LEARN MORE <HiArrowRight />
              </span>
            </div>
          </div>
          <div className="col d-flex justify-content-end  webDevelopment_img_section">
            <img className="" src={WebDevelopment} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
