import { TextField } from "@mui/material";
import {
  BoldP,
  H1,
  H2,
  H3,
  PrimaryButton,
  SmallP,
} from "../StyledComponents/StyledComponents";
import "../styles/Contact/Contact.css";
import phone from "../../assets/icons/phone_icon.png";
import email from "../../assets/icons/mail_icon.png";
import facebook from "../../assets/icons/facebook_icon.png";
import instagram from "../../assets/icons/instagram_icon.png";

import emailjs from "emailjs-com";
import Iframe from "react-iframe";

const Contact = () => {
  const sendEmail = (e: any) => {
    emailjs
      .sendForm(
        "berichexpo",
        "berichexpo_templates",
        e.target,
        "sxVb6_FDq8g4DxTO1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="title">
        <H2>Contact</H2>
        <div className="divider" />
      </div>
      <div className="body">
        <form className="form" onSubmit={sendEmail}>
          <h2>
            Fill up the form our team will get back to you within 24 Hours
          </h2>
          <div className="inputs">
            <h3>Email Address</h3>
            <TextField
              fullWidth
              label={"Email Address"}
              required
              type={"email"}
            />
            <h3>Message</h3>
            <TextField
              fullWidth
              multiline
              minRows={5}
              maxRows={5}
              label={"Message"}
              required
              type="text"
            />
          </div>
          <PrimaryButton type="submit">
            <BoldP>Send Message</BoldP>
          </PrimaryButton>
        </form>{" "}
        <div className="info">
          <H3 className="name">Berich Sp. z o. o.</H3>
          <H3 className="adddress">ul. Os. Przemysława 25/11-12</H3>
          <H3 className="adddress">61-064 Poznań/Poland</H3>
          <H3 className="adddress">NIP/Tax ID: PL7822579745</H3>
          <div className="icon-row">
            <img src={phone} />
            <H3>+48 783 825 245</H3>
          </div>
          <div className="icon-row">
            <img src={email} />
            <H3>berich@berich.com.pl</H3>
          </div>
          <div className="full-row">
            <div className="social-row">
              <img src={facebook} />
              <div
                className="social-column"
                onClick={() =>
                  window.open("https://www.facebook.com/BerichExpo/")
                }
              >
                <SmallP className="small">Facebook</SmallP>
                <BoldP>Berich Expo</BoldP>
              </div>
            </div>
            <div className="social-row">
              <img src={instagram} />
              <div
                className="social-column"
                onClick={() =>
                  window.open("https://www.instagram.com/berichexpo/")
                }
              >
                <SmallP className="small">instagram</SmallP>
                <BoldP>Berich Expo</BoldP>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Iframe
        url=""
        src="https://snazzymaps.com/embed/398051"
        width="100%"
        height="480px"
      ></Iframe>
    </div>
  );
};

export default Contact;
