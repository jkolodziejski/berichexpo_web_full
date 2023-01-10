import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { H4 } from "../StyledComponents/StyledComponents";
import "../styles/Navbar/Navbar.css";

const NavbarMobile = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="navbar-mobile">
      <div className="logo-icon">
        <img src={Logo} alt="logo" style={{ width: "20%" }} />
        <svg
          width="38"
          height="30"
          viewBox="0 0 38 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleNav}
        >
          <rect
            x="38"
            width="6"
            height="38"
            rx="3"
            transform="rotate(90 38 0)"
            fill="#2EA944"
          />
          <rect
            x="38"
            y="12"
            width="6"
            height="38"
            rx="3"
            transform="rotate(90 38 12)"
            fill="#2EA944"
          />
          <rect
            x="38"
            y="24"
            width="6"
            height="38"
            rx="3"
            transform="rotate(90 38 24)"
            fill="#2EA944"
          />
        </svg>
      </div>
      <div className={openNav ? "mobile-menu open-mobile" : "mobile-menu"}>
        <div className="items">
          <button
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => {
              toggleNav();
              navigate("/");
              window.scroll(0, 0);
            }}
          >
            <H4>Home</H4>
          </button>
          <button
            className={location.pathname === "/ourPortfolio" ? "active" : ""}
            onClick={() => {
              toggleNav();
              navigate("/ourPortfolio");
              window.scroll(0, 0);
            }}
          >
            <H4>Our portfolio</H4>
          </button>
          <button
            className={location.pathname === "/howWeWork" ? "active" : ""}
            onClick={() => {
              toggleNav();
              navigate("/howWeWork");
              window.scroll(0, 0);
            }}
          >
            <H4>How we work</H4>
          </button>
          <button
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={() => {
              toggleNav();
              navigate("/contact");
              window.scroll(0, 0);
            }}
          >
            <H4>Contact</H4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
