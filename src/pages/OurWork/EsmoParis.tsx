import Cover from "../../assets/images/projects/esmo_paris/IMG_Project_1.jpeg";
import Img1 from "../../assets/images/projects/esmo_paris/IMG_Project_2.jpeg";
import Img2 from "../../assets/images/projects/esmo_paris/IMG_Project_3.jpeg";
import Img3 from "../../assets/images/projects/esmo_paris/IMG_Project_4.jpeg";
import Img4 from "../../assets/images/projects/esmo_paris/IMG_Project_5.jpeg";

const EsmoParis = () => {
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
            The structure had multiple glass walls and doors, nine televisions,
            over thirty five LED lamps, nine tables and more than eighty-five
            chairs.
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
            The biggest challenge of this project was building a 250 square
            meters space in less than 24 hours.
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
            We emphasized the modern character of the company by using materials
            inspired by the architecture of modern offices. This allowed us to
            create a space where every business partner can feel comfortable in
            a trusting environment.
          </h3>
        </div>
        <img className="picture" src={Img4} alt="img4" />
      </div>
    </div>
  );
};

export default EsmoParis;
