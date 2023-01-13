import "../Styles/HowWeWork.css";
import IMG_How_we_work_1 from "../../assets/images/how_we_work/IMG_How we work_1.png";
import IMG_How_we_work_2 from "../../assets/images/how_we_work/IMG_How we work_2.png";
import IMG_How_we_work_3 from "../../assets/images/how_we_work/IMG_How we work_3.png";
import IMG_How_we_work_4 from "../../assets/images/how_we_work/IMG_How we work_4.png";
import IMG_How_we_work_5 from "../../assets/images/how_we_work/IMG_How we work_5.png";
import IMG_How_we_work_6 from "../../assets/images/how_we_work/IMG_How we work_6.png";
import IMG_How_we_work_7 from "../../assets/images/how_we_work/IMG_How we work_7.png";
import IMG_How_we_work_8 from "../../assets/images/how_we_work/IMG_How we work_8.png";
import IMG_How_we_work_main from "../../assets/images/how_we_work/IMG_How we work_main.jpeg";

import arrow1 from "../../assets/images/how_we_work/arrow_How we work/arrow_how we work_1.svg";
import arrow2 from "../../assets/images/how_we_work/arrow_How we work/arrow_how we work_2.svg";
import arrow3 from "../../assets/images/how_we_work/arrow_How we work/arrow_how we work_3.svg";
import arrow4 from "../../assets/images/how_we_work/arrow_How we work/arrow_how we work_4.svg";
import {
  BoldP,
  PrimaryButton,
} from "../../components/StyledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";

const HowWeWork = () => {
  const navigate = useNavigate();
  return (
    <div className="how-we-work">
      <div className="section1" style={{ gap: "4rem" }}>
        <div className="text">
          <h1>Building your advantage in 5 steps with us</h1>
          <div className="divider" />
        </div>
        <div className="img-wrapper">
          <img src={IMG_How_we_work_main} alt="homeImage" />
        </div>
      </div>
      <div className="steps">
        <div className="step1">
          <div className="text-arrow">
            <h1 className="number">01</h1>
            <div className="title">
              <h2>Briefing</h2>
              <div className="divider" />
              <h4>
                We get to know you, your brand and your expectations. We ask
                questions to bring out all of the values of your brand{" "}
              </h4>
            </div>
            <img className="arrow" src={arrow1} alt="arrow" />
          </div>
          <img className="absoluteImg" src={IMG_How_we_work_1} alt="1" />
        </div>
        <div className="step2">
          <div className="text-arrow">
            <h1 className="number">02</h1>
            <div className="title">
              <h2>Tech & financial analysis</h2>
              <div className="divider" />
              <h4>
                We tailor the solutions according to your budget. We make sure
                with the authorities the stand meets all the technical rules,
                trade fair guidelines and safety regulations.{" "}
              </h4>
            </div>
            <img className="arrow" src={arrow2} alt="arrow" />
          </div>
          <img className="absoluteImg" src={IMG_How_we_work_2} alt="1" />
        </div>
        <div className="step3">
          <div className="text">
            <h1 className="number">03</h1>
            <div className="title">
              <h2>Briefing</h2>
              <div className="divider" />
              <h4>
                Equipped with knowledge and ideas we start to design. No matter
                how exceptional ideas you have, our designers will put them into
                life.
              </h4>
            </div>
          </div>
          <div className="images">
            <img
              src={IMG_How_we_work_3}
              style={{ position: "relative" }}
              alt="howWeWork3"
            />
            <div className="black-dot-1" />
            <div className="black-dot-2" />
            <div className="black-dot-3" />
            <div className="black-dot-4" />
            <div className="black-dot-5" />
            <img src={IMG_How_we_work_4} alt="howWeWork4" />
            <img
              className="on-top-img"
              src={IMG_How_we_work_1}
              alt="howWeWork1"
            />
          </div>
          <img className="arrow" src={arrow3} alt="arrow" />
          {/* <div className="text-arrow">
            <h1 className="number">03</h1>
            <div className="title">
              <h2>Briefing</h2>
              <div className="divider" />
              <h4>
                Equipped with knowledge and ideas we start to design. No matter
                how exceptional ideas you have, our designers will put them into
                life.
              </h4>
            </div>
            <img className="arrow" src={arrow3} alt="arrow" />
          </div>
          <img className="absoluteImg" src={IMG_How_we_work_1} alt="1" /> */}
        </div>
        <div className="step4">
          <div className="text-arrow">
            <h1 className="number">04</h1>
            <div className="title">
              <h2>Production & Logistics</h2>
              <div className="divider" />
              <h4>
                Our stands are manufactured on modern CNC machines which
                guarantees the highest quality of every signle element.
              </h4>
            </div>
            <img className="arrow" src={arrow4} alt="arrow" />
          </div>
          <img className="absoluteImg" src={IMG_How_we_work_5} alt="5" />
        </div>
        <div className="step5">
          <div className="text">
            <h1 className="number">05</h1>
            <div className="title">
              <h2>Final assembly</h2>
              <div className="divider" />
              <div className="text-button-wrapper">
                <h4>
                  Each projecr is taken care of with by a team of experienced
                  professionals (carpenters, electricians, AV and IT technicans)
                  There is always a dedicated Project Manager on site.
                </h4>
                <PrimaryButton
                  onClick={() => {
                    navigate("/ourwork/sirhaLyon");
                    window.scroll(0, 0);
                  }}
                >
                  <BoldP>See more</BoldP>
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="images">
            <img src={IMG_How_we_work_6} alt="howWeWork3" />
            <img src={IMG_How_we_work_7} alt="howWeWork4" />
            <img src={IMG_How_we_work_8} alt="howWeWork1" />
          </div>
          {/* <div className="text-arrow">
            <h1 className="number">03</h1>
            <div className="title">
              <h2>Briefing</h2>
              <div className="divider" />
              <h4>
                Equipped with knowledge and ideas we start to design. No matter
                how exceptional ideas you have, our designers will put them into
                life.
              </h4>
            </div>
            <img className="arrow" src={arrow3} alt="arrow" />
          </div>
          <img className="absoluteImg" src={IMG_How_we_work_1} alt="1" /> */}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
