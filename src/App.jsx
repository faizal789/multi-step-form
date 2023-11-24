import AnimatedRoutes from "./AnimatedRoutes";
import Sidebar from "./component/Sidebar";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/multi-step-form/">
      <main className="w-screen h-screen flex max-lg:items-start items-center justify-center bg-light-blue-primary max-lg:relative max-lg:z-0">
      <img src="./public/assets/images/bg-sidebar-mobile.svg" className="hidden max-lg:block absolute top-0 left-0 w-screen -z-10" alt="" />
        <div className="bg-white w-[900px] h-[590px] max-[470px]:w-[350px] max-lg:w-[450px] max-lg:h-fit flex max-lg:flex-col max-lg:items-center max-lg:justify-center rounded-lg p-3 max-lg:p-7 max-lg:mt-32">
          <Sidebar></Sidebar>
          <div className="flex flex-col items-end justify-between py-7 px-16 max-lg:px-0 max-lg:py-0 w-8/12 max-lg:w-full">
            <AnimatedRoutes></AnimatedRoutes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
