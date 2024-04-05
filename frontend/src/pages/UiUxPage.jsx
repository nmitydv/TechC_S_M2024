import React from "react";
import "../pages/WebDesign.css";
import UiUxDesign from "../assets/UIUXDesign.svg";
import { HiArrowRight } from "react-icons/hi";
const UiUxPage = () => {
  return (
    <>
      <div className=" col-7 webDesign_ctn">
        <div className="d-flex">
          <div className="col-6 p-5 align-content-center">
            <div className="p-5">
              <h2 className="fw-bold">UI/UX Design</h2>
              <p className="text-secondary mt-3 inside_text">
                We design intuitive web & mobile apps focused on driving user
                engagement and increasing users retention.
              </p>
              <span className="learn_title ">
                {" "}
                LEARN MORE <HiArrowRight />
              </span>
            </div>
          </div>
          <div className="col d-flex justify-content-evenly webDesign_img_section">
            <img className="" src={UiUxDesign} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UiUxPage;
