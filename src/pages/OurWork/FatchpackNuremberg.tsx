import Cover from "../../assets/images/projects/fachpack_nuremberg/IMG_Project_1.jpeg";
import Img1 from "../../assets/images/projects/fachpack_nuremberg/IMG_Project_2.jpeg";
import Img2 from "../../assets/images/projects/fachpack_nuremberg/IMG_Project_3.jpeg";
import Img3 from "../../assets/images/projects/fachpack_nuremberg/IMG_Project_4.jpeg";
import Img4 from "../../assets/images/projects/fachpack_nuremberg/IMG_Project_5.jpeg";

const FatchpackNuremberg = () => {
  return (
    <div className="fatchpack">
      <img src={Cover} alt="coverPhoto" />
      <div className="title">
        <div className="text">
          <h1>FACHPACK Nuremberg</h1>
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
            The stand is made of melamine boards, steel construction and spray
            painted elements Suspensions: printed fabric and spray painted steel
            profiles. Logos are made of plexi glass, laser cut out.
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
            The client's wish was to arrange the space in the concept of "a
            stand like a modern office". We had only 20 square meters to use for
            this task.
          </h3>
        </div>
        <img className="picture" src={Img3} alt="img3" />
        <img className="picture" src={Img2} alt="img2" />
      </div>
      <div className="section3">
        <div className="text">
          <div className="title">
            <h2>Execution</h2>
            <div className="divider" />
          </div>
          <h3>
            We have created a place where every business partner feels a good
            and trusting atmosphere. At the same time, we emphasize the modern
            character of the brand. The materials are inspired by the
            architecture of a modern office.
          </h3>
        </div>
        <img className="picture" src={Img4} alt="img4" />
      </div>
    </div>
  );
};

export default FatchpackNuremberg;
