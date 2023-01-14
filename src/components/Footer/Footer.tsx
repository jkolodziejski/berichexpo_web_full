import "../styles/Footer/Footer.css";
import Logo from "../../assets/images/logo-left+slogan.svg";
import { H4 } from "../StyledComponents/StyledComponents";
import { useLocation, useNavigate } from "react-router-dom";
import facebook from "../../assets/icons/facebook_icon.png";
import instagram from "../../assets/icons/instagram_icon.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="footer">
      <div className="content">
        <div className="logo-text">
          <img
            src={Logo}
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
            alt="Logo"
          />
          <div className="text">
            <H4 className="green">Berich Sp. z o. o.</H4>
            <H4 className="white">ul. Os. Przemysława 25/11-12</H4>
            <H4 className="white">61-064 Poznań/Poland</H4>
            <H4 className="white">NIP/Tax ID: PL7822579745</H4>
          </div>
        </div>
        <div className="right">
          <div className="nav">
            <button
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => {
                navigate("/");
                window.scroll(0, 0);
              }}
            >
              <H4>Home</H4>
            </button>
            <button
              className={location.pathname === "/ourPortfolio" ? "active" : ""}
              onClick={() => {
                navigate("/ourPortfolio");
                window.scroll(0, 0);
              }}
            >
              <H4>Our portfolio</H4>
            </button>
            <button
              className={location.pathname === "/howWeWork" ? "active" : ""}
              onClick={() => {
                navigate("/howWeWork");
                window.scroll(0, 0);
              }}
            >
              <H4>How we work</H4>
            </button>
            <button
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => {
                navigate("/contact");
                window.scroll(0, 0);
              }}
            >
              <H4>Contact</H4>
            </button>
          </div>
          <div className="contact-icons">
            <div className="icon-text">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.145 3.66795C21.7795 1.30248 18.6343 -0.000132302 15.2892 1.00786e-08C14.741 1.00786e-08 14.2969 0.444304 14.2969 0.99234C14.2969 1.54038 14.7412 1.98468 15.2892 1.98468C18.1043 1.98455 20.7509 3.08075 22.7416 5.07139C24.7323 7.06202 25.8285 9.70879 25.8284 12.524C25.8284 13.072 26.2726 13.5163 26.8207 13.5163C27.3688 13.5163 27.8131 13.072 27.8131 12.5241C27.8132 9.17862 26.5106 6.03343 24.145 3.66795Z"
                  fill="#2EA944"
                />
                <path
                  d="M20.0629 12.5243C20.0629 13.0724 20.5072 13.5167 21.0554 13.5166C21.6034 13.5166 22.0476 13.0722 22.0476 12.5242C22.0473 8.79831 19.0155 5.76664 15.2893 5.76611C15.2892 5.76611 15.2893 5.76611 15.2892 5.76611C14.7412 5.76611 14.297 6.21028 14.2969 6.75832C14.2969 7.30636 14.741 7.75066 15.2891 7.75079C17.9212 7.75119 20.0626 9.89253 20.0629 12.5243Z"
                  fill="#2EA944"
                />
                <path
                  d="M17.8672 17.5839C16.3546 17.5055 15.584 18.6305 15.2145 19.1708C14.905 19.6232 15.0209 20.2407 15.4733 20.5502C15.9257 20.8597 16.5432 20.7437 16.8526 20.2914C17.2893 19.653 17.4871 19.5525 17.7554 19.5652C18.6142 19.6662 21.9968 22.1449 22.3355 22.92C22.4205 23.1483 22.4173 23.372 22.3261 23.6442C21.971 24.6982 21.3831 25.4388 20.6258 25.786C19.9063 26.1159 19.0242 26.086 18.0753 25.6999C14.5324 24.2558 11.4371 22.2406 8.87556 19.71C8.8745 19.7089 8.87344 19.708 8.87251 19.7069C6.34721 17.1479 4.33567 14.0566 2.89399 10.5191C2.50778 9.56947 2.47787 8.68721 2.80773 7.96783C3.15491 7.21048 3.8956 6.62262 4.94867 6.26789C5.22176 6.17633 5.4451 6.17342 5.67122 6.25757C6.44909 6.59748 8.92769 9.9799 9.02771 10.8291C9.042 11.1075 8.94079 11.3051 8.30291 11.741C7.8504 12.0501 7.7341 12.6676 8.04331 13.1201C8.35239 13.5726 8.96976 13.6887 9.4224 13.3797C9.96303 13.0105 11.0877 12.242 11.0096 10.7243C10.9236 9.13893 7.83968 4.94053 6.36613 4.39872C5.71078 4.15447 5.02144 4.15023 4.31648 4.38681C2.73032 4.92095 1.58477 5.87333 1.00365 7.14088C0.440003 8.37059 0.457865 9.79731 1.05592 11.2676C2.59881 15.0533 4.75748 18.3657 7.47186 21.1132C7.47847 21.1199 7.48522 21.1265 7.4921 21.133C10.2376 23.8424 13.5462 25.9971 17.3269 27.5381C18.0839 27.846 18.8295 28.0001 19.5426 28.0001C20.2139 28.0001 20.8567 27.8636 21.4529 27.5902C22.7206 27.0092 23.6728 25.8638 24.2073 24.2766C24.4434 23.573 24.4396 22.8839 24.1972 22.2316C23.6535 20.7541 19.4551 17.6701 17.8672 17.5839Z"
                  fill="#2EA944"
                />
              </svg>
              <H4 className="white">+48 783 825 245</H4>
            </div>
            <div className="icon-text">
              <svg
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2711 4.17712L14.2038 12.1672L5.13457 4.17701C4.77345 3.85886 4.223 3.89383 3.90497 4.25471C3.58706 4.61572 3.62167 5.16617 3.98279 5.48431L13.628 13.982C13.7926 14.1269 13.9983 14.1994 14.2039 14.1994C14.4095 14.1994 14.6153 14.1269 14.7799 13.9819L24.4232 5.4842C24.7841 5.16617 24.8188 4.6156 24.5008 4.2546C24.1825 3.89394 23.6322 3.8591 23.2711 4.17712Z"
                  fill="#2EA944"
                />
                <path
                  d="M25.5897 0.475098H2.81657C1.37558 0.475098 0.203125 1.64743 0.203125 3.08854V16.911C0.203125 18.3521 1.37558 19.5245 2.81657 19.5245H25.5897C27.0307 19.5245 28.2031 18.3521 28.2031 16.911V3.08854C28.2031 1.64755 27.0307 0.475098 25.5897 0.475098ZM26.4608 16.911C26.4608 17.3913 26.0701 17.7822 25.5897 17.7822H2.81657C2.33616 17.7822 1.94542 17.3913 1.94542 16.911V3.08854C1.94542 2.60825 2.33616 2.2174 2.81657 2.2174H25.5897C26.0701 2.2174 26.4608 2.60825 26.4608 3.08854V16.911Z"
                  fill="#2EA944"
                />
              </svg>
              <H4 className="white">berich@berich.com.pl</H4>
            </div>
            <div className="icons">
              <img
                src={facebook}
                alt="facebook"
                onClick={() =>
                  window.open("https://www.facebook.com/BerichExpo/")
                }
              />
              <img
                src={instagram}
                alt="instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/berichexpo/")
                }
              />
            </div>
          </div>
          <div className="buttons">
            <H4
              className="white"
              onClick={() =>
                window.open(
                  "https://berich.com.pl/graphis/RODO/Informacja%20o%20przetwarzaniu%20danych%20osobowych%20-%20Berich%20Sp.%20z%20o.o..pdf"
                )
              }
            >
              Privacy policy
            </H4>
            <H4
              className="white"
              onClick={() =>
                window.open(
                  "https://berich.com.pl/graphis/RODO/Privacy%20policy-%20-%20Berich%20Sp.%20z%20o.o..pdf"
                )
              }
            >
              Cookies policy
            </H4>
            <H4 className="green">© Copyright 2022 - Berich Expo </H4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
