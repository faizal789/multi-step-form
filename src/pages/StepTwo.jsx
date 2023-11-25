import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextThree, prevOne } from "../features/step/stepSlice";
import { motion } from "framer-motion";
import { changeValue, checkboxTogglePlan } from "../features/form/formSlice";

const StepTwo = () => {
  const dispatch = useDispatch();
  const { formPage2, checkboxPlanValue } = useSelector((store) => store.form);

  function handleChange(field, value) {
    dispatch(changeValue({ page: "formPage2", field, value }));
  }

  function handleCheckboxChange() {
    dispatch(
      changeValue({
        page: "formPage2",
        field: "plan",
        value: {
          name: "",
          bill: "",
        },
      })
    );
    dispatch(checkboxTogglePlan());
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <section className="relative h-full w-full max-lg:static">
        <h1 className="my-2">Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className="mt-7">
          <div className="flex max-lg:flex-col gap-2 justify-between">
            <div>
              <label className="cursor-pointer" htmlFor="arcade">
                <input
                  type="radio"
                  className="hidden peer"
                  name="plan"
                  id="arcade"
                  checked={
                    JSON.stringify(formPage2.plan) ===
                    JSON.stringify({
                      name: "Arcade",
                      bill: checkboxPlanValue ? "$90/yr" : "$9/mo",
                    })
                  }
                  onChange={() =>
                    handleChange("plan", {
                      name: "Arcade",
                      bill: checkboxPlanValue ? "$90/yr" : "$9/mo",
                    })
                  }
                />
                <div className="flex flex-col max-lg:flex-row max-lg:items-center justify-between py-4 pl-3 w-36 rounded-md h-40 border peer-checked:bg-magnolia-neutral peer-checked:border-purplish-blue-primary max-lg:w-full max-lg:h-fit max-lg:justify-start max-lg:gap-4">
                  <img
                    src="images/icon-arcade.svg"
                    width={35}
                    alt="icon"
                  />
                  <div>
                    <h1 className="text-lg">Arcade</h1>
                    <p className="text-sm">
                      {checkboxPlanValue ? "$90/yr" : "$9/mo"}
                    </p>
                    <span
                      style={{ display: checkboxPlanValue ? "block" : "" }}
                      className="hidden text-base font-medium text-marine-blue-primary"
                    >
                      2 months free
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label className="cursor-pointer" htmlFor="advanced">
                <input
                  type="radio"
                  className="hidden peer"
                  name="plan"
                  id="advanced"
                  checked={
                    JSON.stringify(formPage2.plan) ===
                    JSON.stringify({
                      name: "Advanced",
                      bill: checkboxPlanValue ? "$120/yr" : "$12/mo",
                    })
                  }
                  onChange={() =>
                    handleChange("plan", {
                      name: "Advanced",
                      bill: checkboxPlanValue ? "$120/yr" : "$12/mo",
                    })
                  }
                />
                <div className="flex flex-col max-lg:flex-row max-lg:items-center justify-between py-4 pl-3 w-36 rounded-md h-40 border peer-checked:bg-magnolia-neutral peer-checked:border-purplish-blue-primary max-lg:w-full max-lg:h-fit max-lg:justify-start max-lg:gap-4">
                  <img
                    src="images/icon-advanced.svg"
                    width={35}
                    alt="icon"
                  />
                  <div>
                    <h1 className="text-lg">Advanced</h1>
                    <p className="text-sm">
                      {checkboxPlanValue ? "$120/yr" : "$12/mo"}
                    </p>
                    <span
                      style={{ display: checkboxPlanValue ? "block" : "" }}
                      className="hidden text-base font-medium text-marine-blue-primary"
                    >
                      2 months free
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label className="cursor-pointer" htmlFor="pro">
                <input
                  type="radio"
                  className="hidden peer"
                  name="plan"
                  id="pro"
                  checked={
                    JSON.stringify(formPage2.plan) ===
                    JSON.stringify({
                      name: "Pro",
                      bill: checkboxPlanValue ? "$150/yr" : "$15/mo",
                    })
                  }
                  onChange={() =>
                    handleChange("plan", {
                      name: "Pro",
                      bill: checkboxPlanValue ? "$150/yr" : "$15/mo",
                    })
                  }
                />
                <div className="flex flex-col max-lg:flex-row max-lg:items-center justify-between py-4 pl-3 w-36 rounded-md h-40 border peer-checked:bg-magnolia-neutral peer-checked:border-purplish-blue-primary max-lg:w-full max-lg:h-fit max-lg:justify-start max-lg:gap-4">
                  <img
                    src="images/icon-pro.svg"
                    width={35}
                    alt="icon"
                  />
                  <div>
                    <h1 className="text-lg">Pro</h1>
                    <p className="text-sm">
                      {checkboxPlanValue ? "$150/yr" : "$15/mo"}
                    </p>
                    <span
                      style={{ display: checkboxPlanValue ? "block" : "" }}
                      className="hidden text-base font-medium text-marine-blue-primary"
                    >
                      2 months free
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center mt-7 bg-magnolia-neutral p-4 rounded-md">
            <div className="flex items-center gap-4">
              <span
                style={{
                  color:
                    checkboxPlanValue === false ? "hsl(213, 96%, 18%)" : "",
                }}
                className="text-cool-gray-neutral"
              >
                Monthly
              </span>
              <label htmlFor="billing" className="">
                <div className="flex items-center w-10 h-5 bg-marine-blue-primary rounded-full cursor-pointer">
                  <input
                    id="billing"
                    type="checkbox"
                    name="billing"
                    className="hidden peer"
                    checked={checkboxPlanValue}
                    onChange={handleCheckboxChange}
                  />
                  <div className="w-5 h-5 transition duration-200 bg-white rounded-full peer-checked:transition-transform peer-checked:translate-x-full"></div>
                </div>
              </label>
              <span
                style={{ color: checkboxPlanValue ? "hsl(213, 96%, 18%)" : "" }}
                className="text-cool-gray-neutral"
              >
                yearly
              </span>
            </div>
          </div>
        </div>
        <div className="max-lg:flex bg-white max-lg:w-screen w-full h-16 absolute bottom-0 left-0 items-center justify-between px-7">
          <Link to="/">
            <button
              onClick={() => dispatch(prevOne())}
              className="text-cool-gray-neutral hover:text-marine-blue-primary absolute bottom-0 left-0 py-2 max-lg:static"
            >
              Go Back
            </button>
          </Link>
          <Link to="/page/3">
            <button
              onClick={() => dispatch(nextThree())}
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

export default StepTwo;
