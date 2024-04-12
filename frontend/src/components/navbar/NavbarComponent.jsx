import { Link } from "react-router-dom";
import { routesConstant } from "../../routes/AppRoutesConstants";
import logo from "../../assets/logo.svg";
import { IoArrowForwardCircle } from "react-icons/io5";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa6";
import GetStartedBtn from "../GetStartedBtn";

const NavbarComponent = () => {
  return (
    <>
      <div className="navbar w-100">
        <div className="container">
          <div className="navbar_logo">
            <Link to={routesConstant.Home.path} className="nav-link">
              <img src={logo} alt="Logo" className="navbar-logo ml-5 ms-5" />
            </Link>
          </div>
          <div className="d-flex justify-content-between rightNav align-items-center">
            <div className="d-flex">
              <div className="col-3 align-content-center">
                <a>
                  {" "}
                  <Link to={routesConstant.Home.path} className="nav-link">
                    Home{" "}
                  </Link>
                </a>
              </div>
              <div className="col-3 align-content-center text-dark">
                <a>
                  <Link to={routesConstant.About.path} className="nav-link">
                    About
                  </Link>
                </a>
              </div>
              <div className="col-3 align-content-center">
                <a>
                  <Link to={routesConstant.Portfolio.path} className="nav-link">
                    Portfolio
                  </Link>
                </a>
              </div>
              <div className="dropdown align-content-center">
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                >
                  Service
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* <button className="getStarted_btn ps-4 d-flex justify-content-between align-items-center">
                Get Started
                <div className="innerCircle">
                  <FaArrowRight />
                </div>
              </button> */}
              <GetStartedBtn/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
