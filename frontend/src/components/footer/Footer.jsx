import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { routesConstant } from "../../routes/AppRoutesConstants";
import "../components/Footer.css";
import instagram from "../assets/instagram 1.svg";
import facebook from "../assets/facebook 1.svg";
import twitter from "../assets/twitter 1.svg";
import linkedin from "../assets/linkedin 1.svg";
import whatsapp from "../assets/whatsapp 1.svg";
import { LiaCopyright } from "react-icons/lia";
const Footer = () => {
  return (
    <>
      <div className="footer_ctn">
        <div className="container">
          <div className="row">
            <div className="col-9 d-flex">
              <div className="col-5">
                <img className="" src={logo}></img>
              </div>
              <div className="col-6 d-flex p-4 text-dark footer_tags">
                <div className="col">
                  {" "}
                  <Link
                    to={routesConstant.Home.path}
                    className="nav-link"
                  >
                    Home{" "}
                  </Link>
                </div>
                <div className="col">
                  {" "}
                  <Link to={routesConstant.About.path} className="nav-link">
                    About
                  </Link>
                </div>
                <div className="col me-2">
                  {" "}
                  <Link to={routesConstant.Portfolio.path} className="nav-link">
                    Portfolio
                  </Link>
                </div>
                <div className="col mx-2">
                  {" "}
                  <Link to={routesConstant.Portfolio.path} className="nav-link">
                    Services
                  </Link>
                </div>
                <div className="col">
                  {" "}
                  <Link to={routesConstant.Portfolio.path} className="nav-link">
                    Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3 social_logo  d-flex mt-2 justify-content-between">
              <div className="mx-2 mt-1">
                <img src={instagram} />
              </div>
              <div className="mx-2 mt-1">
                <img src={facebook} />
              </div>
              <div className="mx-2 mt-1">
                <img src={twitter} />
              </div>
              <div className="mx-2 mt-1">
                <img src={linkedin} />
              </div>
              <div className="">
                <img src={whatsapp} />
              </div>
            </div>
          </div>
          <hr className="horizantal_line my-5 "></hr>
          <div className="text-center text-secondary">
            {" "}
            Copyright <LiaCopyright />
            2024 Amourtechcreations || All Right Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
