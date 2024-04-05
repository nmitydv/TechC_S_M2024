import React from "react";
import "../pages/WebDesign.css";
import { HiArrowRight } from "react-icons/hi";
import ContentCreation from "../assets/ContentCreation.svg";
const ContentCreationPage = () => {
  return (
    <>
      <div className=" col-7 webDesign_ctn">
        <div className="d-flex">
          <div className="col-6 p-5 align-content-center">
            <div className="p-5">
              <h2 className="fw-bold">Content Creation</h2>
              <p className="text-secondary mt-3 inside_text">
                We design website that looks amazing, convey the right brand
                message and are highly oriented for conversation.
              </p>
              <span className="learn_title ">
                {" "}
                LEARN MORE <HiArrowRight />
              </span>
            </div>
          </div>
          <div className="col d-flex justify-content-evenly ContentCreation_img_section">
            <img className="" src={ContentCreation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreationPage;
