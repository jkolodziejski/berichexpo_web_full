import { Route, Routes } from "react-router-dom";
import AnugaCologne from "../pages/OurWork/AnugaCologne";
import EsmoParis from "../pages/OurWork/EsmoParis";
import FatchpackNuremberg from "../pages/OurWork/FatchpackNuremberg";
import SirhaLyon from "../pages/OurWork/SirhaLyon";
import "../pages/Styles/OurWork.css";

const OurWorkRoutes = () => {
  return (
    <Routes>
      <Route path="/esmoParis" element={<EsmoParis />} />
      <Route path="/sirhaLyon" element={<SirhaLyon />} />
      <Route path="/fachpackNuremberg" element={<FatchpackNuremberg />} />
      <Route path="/AnugaFoodtec" element={<AnugaCologne />} />
    </Routes>
  );
};

export default OurWorkRoutes;
