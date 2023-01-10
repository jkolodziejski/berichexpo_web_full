import Cover from "../../assets/images/projects/anuga_cologne/IMG_Project_1.jpeg";
import Img1 from "../../assets/images/projects/anuga_cologne/IMG_Project_2.jpeg";
import Img2 from "../../assets/images/projects/anuga_cologne/IMG_Project_4.jpeg";
import Img3 from "../../assets/images/projects/anuga_cologne/IMG_Project_6.jpeg";
import Vid1 from "../../assets/images/projects/anuga_cologne/VIDEO_Project_3.mp4";
import Vid2 from "../../assets/images/projects/anuga_cologne/VIDEO_Project_4.mp4";

const AnugaCologne = () => {
  return (
    <div className="anuga">
      <img src={Cover} alt="coverPhoto" />
      <div className="title">
        <div className="text">
          <h1>ANUGA FOODTEC Cologne</h1>
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
            Our client used a concept from previous fairs (FACHPACK), but with
            some functional changes.
          </h3>
        </div>
        <img className="picture" src={Img1} alt="img1" />
      </div>
      <div className="section2">
        <video src={Vid1} controls muted />
        <img className="picture" src={Img2} alt="img2" />
        <video src={Vid2} controls muted />
      </div>
      <div className="section3">
        <img className="picture" src={Img3} alt="img3" />
      </div>
    </div>
  );
};

export default AnugaCologne;
