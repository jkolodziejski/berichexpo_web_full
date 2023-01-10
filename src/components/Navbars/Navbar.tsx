import { H4, RowSpaceBetween } from "../StyledComponents/StyledComponents";
import Logo from "../../assets/images/logo.svg";
import "../styles/Navbar/Navbar.css";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBarWrapper = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <RowSpaceBetween>
        <img src={Logo} alt="logo" style={{ width: "20%" }} />
        <NavBarWrapper>
          <li className="navbar-item">
            <button
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => {
                navigate("/");
                window.scroll(0, 0);
              }}
            >
              <H4>Home</H4>
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={location.pathname === "/ourPortfolio" ? "active" : ""}
              onClick={() => {
                navigate("/ourPortfolio");
                window.scroll(0, 0);
              }}
            >
              <H4>Our portfolio</H4>
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={location.pathname === "/howWeWork" ? "active" : ""}
              onClick={() => {
                navigate("/howWeWork");
                window.scroll(0, 0);
              }}
            >
              <H4>How we work</H4>
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => {
                navigate("/contact");
                window.scroll(0, 0);
              }}
            >
              <H4>Contact</H4>
            </button>
          </li>
        </NavBarWrapper>
      </RowSpaceBetween>
    </div>
  );
};

export default Navbar;
