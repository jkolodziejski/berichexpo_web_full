import Cover from "../../assets/images/projects/sirha_lyon/IMG_Project_1.jpeg";
import Img1 from "../../assets/images/projects/sirha_lyon/IMG_Project_2.jpeg";
import Img2 from "../../assets/images/projects/sirha_lyon/IMG_Project_3.jpeg";
import Img3 from "../../assets/images/projects/sirha_lyon/IMG_Project_4.jpeg";
import Img4 from "../../assets/images/projects/sirha_lyon/IMG_Project_5.jpeg";

const SirhaLyon = () => {
  return (
    <div className="sirhaLyon">
      <img src={Cover} alt="coverPhoto" />
      <div className="title">
        <div className="text">
          <h1>SIRHA Lyon</h1>
          <div className="divider" />
        </div>
        <h2 className="number">2021</h2>
      </div>
      <div className="section1">
        <div className="text">
          <div className="title">
            <h2>About project</h2>
            <div className="divider" />
          </div>
          <h3>
            The stand is made of melamine boards. Suspensions: printed fabric
            and 50 spray painted balls high gloss finish. Logos are made of
            plexi glass, laser cut out.
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
            Enhancing the company - producer of the highest quality caviar as a
            premium brand. For this reason, the emphasis was on a marble decor,
            black and white colors with golden accents.
          </h3>
        </div>
        <img className="picture" src={Img2} alt="img2" />
        <img className="picture" src={Img3} alt="img3" />
      </div>
      <div className="section3">
        <div className="text">
          <div className="title">
            <h2>Execution</h2>
            <div className="divider" />
          </div>
          <h3>
            The stand was embedded in classic trends and simple geometric forms.
            We have created a place where every business partner feels a good
            and trusting atmosphere. At the same time, we emphasize the modern
            character of the brand.
          </h3>
        </div>
        <img className="picture" src={Img4} alt="img4" />
      </div>
    </div>
  );
};

export default SirhaLyon;
