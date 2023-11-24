import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'


import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StepOne></StepOne>}></Route>
        <Route path="/page/2" element={<StepTwo></StepTwo>}></Route>
        <Route path="/page/3" element={<StepThree></StepThree>}></Route>
        <Route path="/page/4" element={<StepFour></StepFour>}></Route>
        <Route path="/page/5" element={<StepFive></StepFive>}></Route>
      </Routes>
    </AnimatePresence>
    
  );
};

export default AnimatedRoutes;
