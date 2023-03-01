import {
  BoldP,
  PrimaryButton,
} from "../../components/StyledComponents/StyledComponents";
import "../Styles/OurPortfolio.css";
import HomeMain from "../../assets/images/home_page_main.png";
import IMG_ANUGA from "../../assets/images/IMG_ANUGA.jpeg";
import IMG_FACHPACK from "../../assets/images/IMG_FACHPACK.jpeg";
import IMG_SIRHA_tiny from "../../assets/images/IMG_SIRHA_tiny.jpeg";
import IMG_ESMO from "../../assets/images/IMG_ESMO.jpeg";
/*import IMG_FIE from "../../assets/images/IMG_FIE.jpeg";*/
import { useNavigate } from "react-router-dom";

const OurPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="our-portfolio">
      <div className="section1" style={{ gap: "4rem" }}>
        <div className="text">
          <h1>Our Portfolio</h1>
          <div className="divider" />
        </div>
        <div className="img-wrapper">
          <img src={HomeMain} alt="homeImage" />
        </div>
      </div>
      <div className="our-work">
        <div className="row-reverse">
          <div className="text">
            <h3>
              ESMO Congress, Paris <b>2022</b>
            </h3>
            <h4>
              A large and functional space for SANOFI during the European
              Society for Medical Oncology Assotiacion Congress.
            </h4>
            <PrimaryButton
              onClick={() => {
                navigate("/ourwork/esmoParis");
                window.scroll(0, 0);
              }}
            >
              <BoldP>Learn more</BoldP>
            </PrimaryButton>
          </div>
          <div
            className="img-wrapper left"
            onClick={() => {
              navigate("/ourwork/esmoParis");
              window.scroll(0, 0);
            }}
          >
            <img src={IMG_ESMO} alt="ESMO" />
          </div>
        </div>
        {/*
        <div className="row">
          <div className="text">
            <h3>
               FI Europe , Paris <b>2022</b>
            </h3>
            <h4>
            A simple practical space for IMCD, the leading global distributor of specialty chemicals and food ingredients. (Food Ingredients Europe Fair)
            </h4>
            <PrimaryButton
              onClick={() => {
                navigate("/ourwork/fieParis");
                window.scroll(0, 0);
              }}
            >
              <BoldP>Learn more</BoldP>
            </PrimaryButton>
          </div>
          <div className="img-wrapper right">
            <img
              src={IMG_FIE}
              alt="shira"
              onClick={() => {
                navigate("/ourwork/fieParis");
                window.scroll(0, 0);
              }}
            />
          </div>
        </div>
            */}
        <div className="row">
          <div className="text">
            <h3>
              ANUGA FOODTEC, Cologne <b>2022</b>
            </h3>
            <h4>
              International trade fair for food technology. Another smart stand
              as part of constant cooperation with our client.
            </h4>
            <PrimaryButton
              onClick={() => {
                navigate("/ourwork/AnugaFoodtec");
                window.scroll(0, 0);
              }}
            >
              <BoldP>Learn more</BoldP>
            </PrimaryButton>
          </div>
          <div
            className="img-wrapper right"
            onClick={() => {
              navigate("/ourwork/AnugaFoodtec");
              window.scroll(0, 0);
            }}
          >
            <img src={IMG_ANUGA} alt="ANUGA" />
          </div>
        </div>
        <div className="row-reverse">
          <div className="text">
            <h3>
              FACHPACK, Nuremberg <b>2021</b>
            </h3>
            <h4>
              Smart stand for our regular customer at the European trade fair
              for packaging, technology and processing.
            </h4>
            <PrimaryButton
              onClick={() => {
                navigate("/ourwork/fachpackNuremberg");
                window.scroll(0, 0);
              }}
            >
              <BoldP>Learn more</BoldP>
            </PrimaryButton>
          </div>
          <div
            className="img-wrapper left"
            onClick={() => {
              navigate("/ourwork/fachpackNuremberg");
              window.scroll(0, 0);
            }}
          >
            <img src={IMG_FACHPACK} alt="FACHPACK" />
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h3>
              SIRHA, Lyon <b>2021</b>
            </h3>
            <h4>
              A prestigious culinary fair and a stand for one of the largest
              caviar producers in the world.
            </h4>
            <PrimaryButton
              onClick={() => {
                navigate("/ourwork/sirhaLyon");
                window.scroll(0, 0);
              }}
            >
              <BoldP>Learn more</BoldP>
            </PrimaryButton>
          </div>
          <div
            className="img-wrapper right"
            onClick={() => {
              navigate("/ourwork/sirhaLyon");
              window.scroll(0, 0);
            }}
          >
            <img src={IMG_SIRHA_tiny} alt="shira" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
