import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextFour, prevTwo } from "../features/step/stepSlice";
import { motion } from "framer-motion";
import { checkboxToggleAddOns } from "../features/form/formSlice";
const StepThree = () => {
  const base = import.meta.env.BASE_URL
  const dispatch = useDispatch();
  const { formPage3, checkboxPlanValue } = useSelector((store) => store.form);

  function handleChange(name) {
    dispatch(checkboxToggleAddOns(name));
  }
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative w-full h-full max-lg:static">
        <h1 className="my-2">Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className="mt-7 flex flex-col gap-5">
          <label
            className={`${
              formPage3.checkboxes.onlineService
                ? " bg-magnolia-neutral border border-purplish-blue-primary"
                : ""
            } flex items-center justify-between py-3 px-6 border rounded-md cursor-pointer`}
          >
            <div className="flex items-center gap-6 ">
              <input
                type="checkbox"
                id="add-ons"
                className="scale-150 accent-purplish-blue-primary"
                checked={formPage3.checkboxes.onlineService}
                onChange={() => handleChange("onlineService")}
              />
              <div>
                <h1 className="text-xl">Online service</h1>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <span className="text-purplish-blue-primary">
              {checkboxPlanValue ? "+$10/yr" : "+$1/mo"}
            </span>
          </label>
          <label
            className={`${
              formPage3.checkboxes.largerStorage
                ? " bg-magnolia-neutral border border-purplish-blue-primary"
                : ""
            } flex items-center justify-between py-3 px-6 border rounded-md cursor-pointer`}
          >
            <div className="flex items-center gap-6 ">
              <input
                type="checkbox"
                id="add-ons"
                className="scale-150 accent-purplish-blue-primary"
                checked={formPage3.checkboxes.largerStorage}
                onChange={() => handleChange("largerStorage")}
              />
              <div>
                <h1 className="text-xl">Larger storage</h1>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <span className="text-purplish-blue-primary">
              {checkboxPlanValue ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>
          <label
            className={`${
              formPage3.checkboxes.customizableProfile
                ? " bg-magnolia-neutral border border-purplish-blue-primary"
                : ""
            } flex items-center justify-between py-3 px-6 border rounded-md cursor-pointer`}
          >
            <div className="flex items-center gap-6 ">
              <input
                type="checkbox"
                id="add-ons"
                className="scale-150 accent-purplish-blue-primary"
                checked={formPage3.checkboxes.customizableProfile}
                onChange={() => handleChange("customizableProfile")}
              />
              <div>
                <h1 className="text-xl">Customizable profile</h1>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <span className="text-purplish-blue-primary">
              {checkboxPlanValue ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>
        </div>
        <div className="max-lg:flex bg-white max-lg:w-screen w-full h-16 absolute bottom-0 left-0 items-center justify-between px-7">
          <Link to={`${base}/page/2`}>
            <button
              onClick={() => dispatch(prevTwo())}
              className="text-cool-gray-neutral hover:text-marine-blue-primary absolute bottom-0 left-0 py-2 max-lg:static"
            >
              Go Back
            </button>
          </Link>
          <Link to={`${base}/page/4`}>
            <button
              onClick={() => dispatch(nextFour())}
              className="btn absolute hover:opacity-80 transition-transform hover:scale-105 bottom-0 right-0 max-lg:static"
            >
              Next Step
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default StepThree;
