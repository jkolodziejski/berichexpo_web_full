import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/Footer/FooterMobile";
import Navbar from "./components/Navbars/Navbar";
import NavbarMobile from "./components/Navbars/NavbarMobile";
import { AppWrapper } from "./components/StyledComponents/StyledComponents";
import Home from "./pages/Home/Home";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import OurPortfolio from "./pages/OurPortfolio/OurPortfolio";
import OurWorkRoutes from "./routes/OurWorkRoutes";

const App = () => {
  return (
    <>
      <AppWrapper className="TextField-radius">
        <Navbar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howWeWork" element={<HowWeWork />} />
          <Route path="/ourPortfolio" element={<OurPortfolio />} />
          <Route path="/ourwork/*" element={<OurWorkRoutes />} />
        </Routes>
        <Contact />
      </AppWrapper>
      <br />
      <br />
      <Footer />
      <FooterMobile />
    </>
  );
};

export default App;
