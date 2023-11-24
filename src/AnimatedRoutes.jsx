import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'


import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";

const AnimatedRoutes = () => {
  const base = import.meta.env.BASE_URL
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={base} element={<StepOne></StepOne>}></Route>
        <Route path={`${base}/page/2`} element={<StepTwo></StepTwo>}></Route>
        <Route path={`${base}/page/3`} element={<StepThree></StepThree>}></Route>
        <Route path={`${base}/page/4`} element={<StepFour></StepFour>}></Route>
        <Route path={`${base}/page/5`} element={<StepFive></StepFive>}></Route>
      </Routes>
    </AnimatePresence>
    
  );
};

export default AnimatedRoutes;
