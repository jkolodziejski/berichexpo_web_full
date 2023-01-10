import {
  BoldP,
  H1,
  H4,
  NormalColumn,
  NormalRow,
  PrimaryButton,
  RowSpaceBetween,
} from "../../components/StyledComponents/StyledComponents";
import HomeMain from "../../assets/images/home_page_main.png";
import Cytat from "../../assets/images/photo_Grzegosz_cytat.png";
import "../Styles/Home.css";
import Icon1 from "../../assets/icons/1.svg";
import Icon2 from "../../assets/icons/2.svg";
import Icon3 from "../../assets/icons/3.svg";
import Icon4 from "../../assets/icons/4.svg";
import Icon5 from "../../assets/icons/5.svg";
import Icon6 from "../../assets/icons/6.svg";
import Icon7 from "../../assets/icons/7.svg";
import Icon8 from "../../assets/icons/8.svg";
import Icon9 from "../../assets/icons/9.svg";
import Icon10 from "../../assets/icons/10.svg";
import Icon11 from "../../assets/icons/11.svg";
import Grzegorz from "../../assets/images/photo_Grzegorz.png";
import Marcin from "../../assets/images/photo_Marcin.png";
import Stanislau from "../../assets/images/photo_Stanislau.png";
import IMG_ANUGA from "../../assets/images/IMG_ANUGA.jpeg";
import IMG_FACHPACK from "../../assets/images/IMG_FACHPACK.jpeg";
import IMG_SIRHA_tiny from "../../assets/images/IMG_SIRHA_tiny.jpeg";
import IMG_ESMO from "../../assets/images/IMG_ESMO.jpeg";
import ppduo from "../../assets/images/review/ppduo.png";
import spiro from "../../assets/images/review/spiro.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
SwiperCore.use([Navigation, Pagination]);

const reviews = [
  {
    id: 1,
    img: spiro,
    text: "Thank you so much for stepping in at the last moment to offer your support and expertise.  No other production company was prepared to undertake such a challenging build and installation with such short turnaround times, however Berich raised itself to the task and pulled it off with competence and professionalism, while still managing to produce very high standards of fit and finish with excellent attention to detail. ",
    author: "Trevor Smith",
    position: "Senior Account Manager",
  },
  {
    id: 2,
    img: ppduo,
    text: "Berich Sp. z o.o. built our exhibition stand on time and with attention to details. Their work resulted in a modern and visually-attractive construction that reflected our company's character and presented our business offerings in a creative yet minimalistic way. I highly recommend Berich Sp. z o.o. company due to their customer-centric way of thinking, reliability and high quality design. ",
    author: "Anna Baran",
    position: "Chief Executive Officer",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="section1" style={{ gap: "4rem" }}>
        <div className="text" style={{ gap: "1rem" }}>
          <h1>We build your advantage</h1>
          <h4 style={{ fontWeight: "10" }}>
            Our experts will translate any of your ideas into reality.
          </h4>
          <PrimaryButton
            onClick={() => {
              navigate("/contact");
              window.scroll(0, 0);
            }}
          >
            <BoldP>Get in touch</BoldP>
          </PrimaryButton>
        </div>
        <img src={HomeMain} alt="homeImage" />
      </div>
      <div className="ceo-wrapper">
        <div className="text">
          <svg
            width="47"
            height="38"
            viewBox="0 0 47 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.848 0L13.68 17.568H19.44V37.008H0V17.28L5.184 0H16.848ZM43.92 0L40.752 17.568H46.512V37.008H27.072V17.28L32.256 0H43.92Z"
              fill="white"
            />
          </svg>
          <div>
            <h4>
              We transform every good{" "}
              <b>
                idea into a perfect design. We transform each perfect design
                into a personal and yet professional stand. This is how we work,
                this is how we create.
              </b>
            </h4>
            <h4>
              This is how we build your <b>advantage!</b>
            </h4>
          </div>
        </div>
        <img src={Cytat} alt="cyta" />
        <div className="by">
          <h4>Marcin Kołodziejski</h4>
          <h5>Chief Executive Officer</h5>
        </div>
      </div>
      <div className="howWeWork">
        <div className="title">
          <h2>How we work</h2>
          <div className="divider" />
        </div>
        <h4>
          Building your advantage in 5 steps with us. You can see the detailed
          information by clicking on the button.
        </h4>
        <PrimaryButton
          onClick={() => {
            navigate("/howWeWork");
            window.scroll(0, 0);
          }}
        >
          <BoldP>See more</BoldP>
        </PrimaryButton>
        <div className="items">
          <div className="item">
            <img src={Icon1} alt="icon 1" />
            <p>Briefing</p>
          </div>
          <div className="item">
            <img src={Icon2} alt="icon 2" />
            <p>Tech & financial analysis</p>
          </div>
          <div className="item">
            <img src={Icon3} alt="icon 3" />
            <p>Design</p>
          </div>
          <div className="item">
            <img src={Icon4} alt="icon 4" />
            <p>Production and logistics</p>
          </div>
          <div className="item">
            <img src={Icon5} alt="icon 5" />
            <p>Final assembly</p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="title">
          <h2>Team</h2>
          <div className="divider" />
        </div>
        <div className="items">
          <div className="item">
            <img src={Grzegorz} alt="Grzegorz" />
            <div>
              <h5>Grzegorz Sworowski</h5>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="item">
            <img src={Marcin} alt="Grzegorz" />
            <div>
              <h5>Marcin Kołodziejski</h5>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="item">
            <img src={Stanislau} alt="Grzegorz" />
            <div>
              <h5>Stanislau Ivaniuchenka</h5>
              <p>Graphic designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-work">
        <div className="title">
          <h2>Our work</h2>
          <div className="divider" />
        </div>
        <div className="row">
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
          <div className="img-wrapper">
            <img src={IMG_ESMO} alt="shira" />
          </div>
        </div>

        <div className="row-reverse">
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
          <div className="img-wrapper">
            <img src={IMG_SIRHA_tiny} alt="shira" />
          </div>
        </div>
        <div className="row">
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
          <div className="img-wrapper">
            <img src={IMG_FACHPACK} alt="shira" />
          </div>
        </div>
        <div className="row-reverse">
          <div className="text">
            <h3>
              ANUGA FOODTEC, Cologne
              <b>2021</b>
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
          <div className="img-wrapper">
            <img src={IMG_ANUGA} alt="shira" />
          </div>
        </div>
      </div>
      <div className="our-offers">
        <div className="title">
          <h2>We also offer</h2>
          <div className="divider" />
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon6} alt="Icon 6" />
            <p>3D visuals and technical drawings</p>
          </div>
          <div className="item">
            <img src={Icon7} alt="Icon 7" />
            <p>Professional project management </p>
          </div>
          <div className="item">
            <img src={Icon8} alt="Icon 8" />
            <p>Electrical and AV equipment supply</p>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon9} alt="Icon 8" />
            <p>Storage after the show</p>
          </div>
          <div className="item">
            <img src={Icon10} alt="Icon 8" />
            <p>Furniture manufacture and rental</p>
          </div>
          <div className="item">
            <img src={Icon11} alt="Icon 8" />
            <p>Graphics production and installation</p>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="title">
          <h2>Reviews</h2>
          <div className="divider" />
        </div>
        <Swiper className="general-swiper" navigation>
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="swiper-custom">
              <img alt="logo" src={review.img}></img>
              <p className="text">{review.text}</p>
              <h4 className="by">{review.author}</h4>
              <p className="position">{review.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
