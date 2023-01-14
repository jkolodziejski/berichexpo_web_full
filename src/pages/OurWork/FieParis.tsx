import Cover from "../../assets/images/projects/fie_paris/IMG_Project_1.jpeg";
import Img1 from "../../assets/images/projects/fie_paris/IMG_Project_2.jpeg";
import Img2 from "../../assets/images/projects/fie_paris/IMG_Project_3.jpeg";
import Img3 from "../../assets/images/projects/fie_paris/IMG_Project_4.jpeg";
import Img4 from "../../assets/images/projects/fie_paris/IMG_Project_5.jpeg";

const FieParis = () => {
  return (
    <div className="esmoParis">
      <img src={Cover} alt="coverPhoto" />
      <div className="title">
        <div className="text">
          <h1>ESMO Congress, Paris</h1>
          <div className="divider" />
        </div>
        <h2 className="number">2022</h2>
      </div>
      <div className="section1">
        <div className="text">
          <div className="title">
            <h2>About project</h2>
            <div className="divider" />
          </div>
          <h3>
          The stand was mainly made out of wood. It had a kitchen area and two private meeting rooms.
          </h3>
        </div>
        <img className="picture" src={Img1} alt="img1" />
      </div>
      <div className="section2">
        <div className="text">
          <div className="title">
            <h2>Challenge</h2>
            <div className="divider" />
          </div>
          <h3>
          We were able to meet our client's high standards by successfully installing multiple high voltage electric systems and devices in the kitchen area.
          </h3>
        </div>
        <img className="picture" src={Img3} alt="img3" />
        <img
          className="picture"
          style={{ width: "30%" }}
          src={Img2}
          alt="img2"
        />
      </div>
      <div className="section3">
        <div className="text">
          <div className="title">
            <h2>Execution</h2>
            <div className="divider" />
          </div>
          <h3>
          We used simple shapes and materials to create a comfortable modern and practical space for our client. 
          </h3>
        </div>
        <img className="picture" src={Img4} alt="img4" />
      </div>
    </div>
  );
};

export default FieParis;
