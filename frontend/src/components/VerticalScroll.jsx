import React from 'react'
import UiUxDesign from "../assets/UIUXDesign.svg";
import ideaImg from "../assets/Rectangle.svg";
import ideaIcon from "../assets/ideaIcon.svg";
import researchIcon from "../assets/ResearchIcon.svg"
import designIcon from '../assets/DesignIcon.svg';
import developmentIcon from "../assets/DevelopmentIcon.svg";
import rectangle from "../assets/ResearchRectangle.svg";
import ContentCreation from "../assets/ContentCreation.svg";
import "../pages_css/HomePage.css";
import "./VerticalScroll.css";

const VerticalScroll = () => {
  return (
   <>
     <div className="col-12 idea_ctn mt-4">
              <div className="d-flex">
                <div className="col-6 p-5 align-content-center">
                  <div className="p-3">
                    <div className="idea_icon_bg">
                      <img className="idea_icon" src={ideaIcon} />
                    </div>
                    <h2 className="fw-bold mt-3">Idea</h2>
                    <p className="text-secondary mt-3 inside_text">
                      We meet with your team to know more about your project
                      idea and goals. After that, our team will work together to
                      create an action plan and proposal for your project.
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-center idea_card_img p-5 ">
                  <img className="" src={ideaImg} />
                </div>
              </div>
            </div>


            <div className="col-12 idea_ctn mt-5">
              <div className="d-flex">
                <div className="col-6 p-5 align-content-center">
                  <div className="p-3">
                    <div className="research_icon_bg">
                      <img className="research_icon" src={researchIcon} />
                    </div>
                    <h2 className="fw-bold mt-3">Research</h2>
                    <p className="text-secondary mt-3 inside_text">
                      We will share with you a detailed questionnaire to do an
                      in-depth analysis of your business. Once with that
                      information, we will able to create a design that is
                      tailor-made to reach your business goals.
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-center research_card_img p-5 ">
                  <img className="" src={rectangle} />
                </div>
              </div>
            </div>

            <div className="col-12 idea_ctn mt-5">
              <div className="d-flex">
                <div className="col-6 p-5 align-content-center">
                  <div className="p-3">
                    <div className="design_icon_bg">
                      <img className="research_icon" src={designIcon} />
                    </div>
                    <h2 className="fw-bold mt-3">Design</h2>
                    <p className="text-secondary mt-3 inside_text">
                      We are going to design a mockup or prototypeof your website, and present it to you.
                      Once with the initial mockup, we will start the revision process to perfect it.
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-center Design_card_img p-5 ">
                  <img className="" src={UiUxDesign} />
                </div>
              </div>
            </div>

            <div className="col-12 idea_ctn mt-5">
              <div className="d-flex">
                <div className="col-6 p-5 align-content-center">
                  <div className="p-3">
                    <div className="Development_icon_bg">
                      <img className="research_icon" src={developmentIcon} />
                    </div>
                    <h2 className="fw-bold mt-3">Development</h2>
                    <p className="text-secondary mt-3 inside_text">
                      We will share with you a detailed questionnaire to do an
                      in-depth analysis of your business. Once with that
                      information, we will able to create a design that is
                      tailor-made to reach your business goals.
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-center Development_card_img p-5 ">
                  <img className="" src={ContentCreation} />
                </div>
              </div>
            </div>
   </>
  )
}

export default VerticalScroll