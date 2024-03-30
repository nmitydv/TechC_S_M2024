import { Link } from 'react-router-dom';
import { routesConstant } from '../../routes/AppRoutesConstants';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <Link to={routesConstant.Home.path} className="nav-link">
        <img src={logo} alt="Logo" className="navbar-logo ml-5" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={routesConstant.Home.path} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={routesConstant.About.path} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={routesConstant.Portfolio.path} className="nav-link">
            Portfolio
          </Link>
        </li>
      </ul>
      <button className="navbar-button">Button</button>
    </nav>
  );
};

export default NavbarComponent;
