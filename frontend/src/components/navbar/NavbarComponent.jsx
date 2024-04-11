import { Link } from "react-router-dom";
import { routesConstant } from "../../routes/AppRoutesConstants";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import GetStartedBtn from "../GetStartedBtn";

const NavbarComponent = () => {
  return (
    //     <nav className="navbar">
    //   <Link to={routesConstant.Home.path} className="nav-link">
    //     <img src={logo} alt="Logo" className="navbar-logo ml-5" />
    //   </Link>
    //   <ul className="navbar-nav d-flex align-items-center"> {/* Using flexbox */}
    //     <li className="nav-item">
    //       <Link to={routesConstant.Home.path} className="nav-link">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to={routesConstant.About.path} className="nav-link">
    //         About
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to={routesConstant.Portfolio.path} className="nav-link">
    //         Portfolio
    //       </Link>
    //     </li>
    //   </ul>
    //   <button className="navbar-button">Button</button>
    // </nav>

    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid mx-5">
        <div className="collapse navbar-collapse mx-2 " id="navbarNavAltMarkup">
          <div className="col navbar-nav ">
            <div className="col-6">
              {/* <span class="navbar-toggler-icon"> */}
              <Link to={routesConstant.Home.path} className="nav-link">
                <img src={logo} alt="Logo" className="navbar-logo ml-5 ms-5" />
              </Link>
              {/* </span> */}
            </div>

            <div className="col-1 align-content-center">
              <a>
                {" "}
                <Link to={routesConstant.Home.path} className="nav-link">
                  Home{" "}
                </Link>
              </a>
            </div>
            <div className="col-1 align-content-center">
              <a>
                <Link to={routesConstant.About.path} className="nav-link">
                  About
                </Link>
              </a>
            </div>
            <div className="col-1 align-content-center">
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
            <GetStartedBtn/>
            {/* <div className=" col-2 ms-2 btn_space align-content-center d-flex justify-content-end ">
              <button className="getStarted_btn ps-4 ">Get Started</button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavbarComponent;
