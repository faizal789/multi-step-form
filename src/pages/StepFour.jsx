import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { prevThree } from "../features/step/stepSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TotalBill from "../component/totalBill";

const StepFour = () => {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.form);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <section className="relative h-full w-full max-lg:static">
        <h1 className="my-2">Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <div className="mt-7 flex flex-col gap-5">
          <div className="flex flex-col gap-5 bg-magnolia-neutral p-6 rounded-md">
            <div className="flex items-center justify-between border-b pb-6">
              <div>
                <h1 className="text-xl">
                  {formData.formPage2.plan.name} (
                  {formData.checkboxPlanValue ? "Yearly" : "Monthly"})
                </h1>
                <Link to="/page/2">
                  <p className="underline hover:text-purplish-blue-primary">Change</p>
                </Link>
              </div>
              <h1 className="text-xl">{formData.formPage2.plan.bill}</h1>
            </div>
            {formData.formPage3.checkboxes.onlineService && (
              <div className="flex items-end justify-between">
                <p>Online service</p>
                <span>{formData.checkboxPlanValue ? "+$10/yr" : "+$1/mo"}</span>
              </div>
            )}
            {formData.formPage3.checkboxes.largerStorage && (
              <div className="flex items-end justify-between">
                <p>Larger storage</p>
                <span>{formData.checkboxPlanValue ? "+$20/yr" : "+$2/mo"}</span>
              </div>
            )}
            {formData.formPage3.checkboxes.customizableProfile && (
              <div className="flex items-end justify-between">
                <p>Customizable profile</p>
                <span>{formData.checkboxPlanValue ? "+$20/yr" : "+$2/mo"}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center px-6">
            <p>Total (per {formData.checkboxPlanValue ? "year" : "month"})</p>
            <TotalBill formData={formData}></TotalBill>
          </div>
        </div>
        <div className="max-lg:flex bg-white max-lg:w-screen w-full h-16 absolute bottom-0 left-0 items-center justify-between px-7">
          <Link to="/page/3">
            <button
              onClick={() => dispatch(prevThree())}
              className="text-cool-gray-neutral hover:text-marine-blue-primary absolute bottom-0 left-0 py-2 max-lg:static"
            >
              Go Back
            </button>
          </Link>
          <Link to="/page/5">
            <button
              className="btn absolute hover:opacity-80 transition-transform hover:scale-105 bg-purplish-blue-primary bottom-0 right-0 max-lg:static"
            >
              Confirm
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default StepFour;
