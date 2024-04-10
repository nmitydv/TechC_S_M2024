import React from "react";
import image from "../assets/image.svg";
import "../pages_css/HomePage.css";
import NavbarComponent from "../components/navbar/NavbarComponent";
import VideoIcon from "../assets/sound_sampler.svg";
import { HiArrowRight } from "react-icons/hi";
import webDesign from "../assets/web-design.svg";
import WebDevelopment from "../assets/web-development.svg";
import "../pages/WebDesign.css";
import ideaImg from "../assets/Rectangle.svg";
import ideaIcon from "../assets/ideaIcon.svg";
import rectangle from "../assets/ResearchRectangle.svg";
import homePage from "../assets/HomePage.svg";
import GymImage from "../assets/GymImage.svg";
import lomaya from "../assets/Lomaya.svg";
import Incscale from "../assets/IncScale.svg";
import Rectangle1 from "../assets/Rectangle1.svg";
import Rectangle2 from "../assets/Rectangle2.svg";
import Rectangle3 from "../assets/Rectangle3.svg";
import Rectangle4 from "../assets/Rectangle4.svg";
import Rectangle5 from "../assets/Rectangle5.svg";
import BrowseIcon from "../assets/business_center.svg";
import leftIllustration from "../assets/LefftIllustration.svg";
import rightIllustration from "../assets/RightIllustration.svg";
import AcademicWeb from "../assets/AcademicWeb.svg";
import digital from "../assets/Digital.svg";
// import "../components/navbar/Navbar.css";

const HomePage = () => {
  return (
    <>
      <div className="">
        <NavbarComponent />

        <div className="">
          <div className="d-flex justify-content-center mt-5 first_screen">
            <div className="text_ctn align-content-center">
              <h5 className="heading_title">WEB DESIGN & DEVELOPMENT AGENCY</h5>
              <span className="title_text">
                We create amazing websites for world class tech companies
              </span>
              <p className="subtitle_text ">
                Our team of designers & developers creates amazing websites for
                startup, big companies and outselves.
              </p>
              <div className="mt-3 align-content-center">
                <button className="get_btn">Get Started</button>
                <button className="watch_video mx-3">
                  Watch Video
                  <img className="mx-2" src={VideoIcon} />
                </button>
              </div>
            </div>
            <div className="img_section d-flex justify-content-end ">
              <img src={image} />
            </div>
          </div>

          <div className="second_screen p-5 ">
            <div className="d-flex justify-content-between">
              <div className="col-5">
                {" "}
                <span className="text-white ms-5">OUR SERVICES</span>
                <h1 className="text-white ms-5">
                  High-impact design & development service
                </h1>
              </div>
              <div className="align-content-end">
                <button className="getInTouch_btn me-4">
                  Get In touch <HiArrowRight />
                </button>
              </div>
            </div>
            <div className="d-flex cards_area mx-5 mt-5 justify-content-between">
              <div className=" col-7 webDesign_ctn">
                <div className="d-flex">
                  <div className="col-6 p-5 align-content-center">
                    <div className="">
                      <h2 className="fw-bold">Web Design</h2>
                      <p className="text-secondary mt-3 inside_text">
                        We design website that looks amazing, convey the right
                        brand message and are highly oriented for conversion.
                      </p>
                      <span className="learn_title">
                        {" "}
                        LEARN MORE <HiArrowRight />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end webDesign_img_section">
                    <img className="" src={webDesign} />
                  </div>
                </div>
              </div>

              {/* <div className="col-7 webDesign_ctn">
                <div className="d-flex">
                  <div className="col-6 p-5 align-content-center">
                    <div className="p-5">
                      <h2 className="fw-bold">Web Development</h2>
                      <p className="text-secondary mt-3 inside_text">
                        We develop fast, perfectly responsive, and SEO-optimized
                        websites built with the best development practice of
                        2023.
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
              </div> */}
            </div>
          </div>

          <div className="third_screen container pt-5">
            <div className=" d-flex justify-content-between ">
              <div className="col-5 ">
                <h5 className="heading_title">WHY WORK WITH US </h5>
                <span className="title_text">
                  We take you by hand on each step of the process
                </span>
                <p className="subtitle_text ">
                  With hundreds of successful project, we have defined a simple
                  (but effective) process to take you from idea to launch!
                </p>
              </div>
              <div className="mt-3 align-content-end">
                <button className="get_btn">Get Started</button>
              </div>
            </div>

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
                      <img className="research_icon" src={ideaIcon} />
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
          </div>

          <div className="fourth_screen mt-5">
            <div className="text-center ">
              <span className="heading_title">PAST PROJECTS</span>
              <h1 className="mt-2 fw-bold">Let our work speak for itself</h1>
              <p className="text-secondary">
                Want to discover what we can do? Take a look at some of the
                amazing websites that have been created by our team of talented
                designers and developers.
              </p>
            </div>
            <div className="img_area d-flex justify-content-between mt-5">
              <img src={homePage} />
              <img src={GymImage} />
              <img src={lomaya} />
              <img src={Incscale} />
            </div>
            <div className="img_area d-flex justify-content-between mt-5">
              <img src={Rectangle1} />
              <img src={Rectangle2} />
              <img src={Rectangle3} />
              <img src={Rectangle4} />
              <img src={Rectangle5} />
            </div>
            <div className="mt-5 text-center">
              <button className="get_btn">Get Started</button>
              <button className="browse_btn mx-3">
                Browse our portfolio
                <img className="mx-2 " src={BrowseIcon} />
              </button>
            </div>
          </div>

          <div className="fift_screen d-flex justify-content-between container">
            <div className="col-2">
              <img className="leftIllustration" src={leftIllustration} />
            </div>
            <div className="fift_screen_textctn text-center mt-5 ">
              <h1 className="fw-bold text-center">
                Ready to create an amazing website for your company ?
              </h1>
              <p className="fift_screen_para text-center text-secondary">
                Our amazing team of designers & developers is ready to help you
                take your website to the next level. Send us a message today!
              </p>
              <button className="get_btn mt-5">Get Started</button>
            </div>
            <div>
              <img src={rightIllustration} />
            </div>
          </div>

          <div className="sixth_screen container">
            <div className="text-center upper_text ">
              <span className="heading_title ">OUR PRODUCTS</span>
              <h1 className="mt-2 fw-bold">Products by Amourtech</h1>
              <p className="text-secondary">
                At BRIX Agency we don't just produce work for our client. We
                also design, develop and create digital products used and loved
                by thousands.
              </p>
            </div>
            <div className="col-12 idea_ctn mt-5">
              <div className="d-flex">
                <div className="col-6 p-5 align-content-center">
                  <div className="p-3">
                    <div className="Academic_icon_bg">
                      <img className="Academic_icon" src={ideaIcon} />
                    </div>
                    <h2 className="fw-bold mt-3">Academic Web App</h2>
                    <p className="text-secondary mt-3 inside_text">
                      We are one of the biggest contributors to the Figma
                      community. In the last 24 months, we have published over
                      50 free figma cloneables, and over 300,000 users have
                      downloaded them since then.
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-center Academic_card_img p-5 ">
                  <img className="" src={AcademicWeb} />
                </div>
              </div>
            </div>
          </div>

          <div className="seventh_screen d-flex text-white">
            <div>
              <img src={digital} />
            </div>
            <div className="align-content-center p-5 mx-5">
              <h1 className="seventh_screen_text">
                Ready to create an amazing website for your company ?
              </h1>
              <p>
                Our amazing team of designers & developers is ready to help you
                take your website to the next level. Send us a message today!
              </p>
              <button className="getInTouch_btn me-4 mt-3">
                  Get In touch <HiArrowRight />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
