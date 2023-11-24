import { useDispatch, useSelector } from "react-redux";
import { nextTwo } from "../features/step/stepSlice";
import { motion } from "framer-motion";
import { changeValue, setFormErrors } from "../features/form/formSlice";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../component/FormValidate";
const StepOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formPage1, errors } = useSelector((store) => store.form);

  function handleChange(field, value) {
    dispatch(changeValue({ page: "formPage1", field, value }));
  }

  function handleClick() {
    const validationErrors = validateForm(formPage1);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(nextTwo());
      navigate("/page/2");
    } else {
      dispatch(setFormErrors(validationErrors));
    }
  }

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative max-lg:static h-full w-full">
        <h1 className="my-2">Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className="mt-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-marine-blue-primary flex justify-between"
            >
              <span>Name</span>
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  {errors.name}
                </span>
              )}
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              className={`${
                errors.name ? "border border-red-600" : ""
              } w-full h-10 rounded-md px-3 border`}
              name="name"
              value={formPage1.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-marine-blue-primary flex justify-between"
            >
              <span>Email Address</span>
              {errors.email && (
                <span className="text-red-600 font-semibold">
                  {errors.email}
                </span>
              )}
            </label>
            <input
              id="email"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className={`${
                errors.email ? "border border-red-600" : ""
              } w-full h-10 rounded-md px-3 border`}
              name="email"
              value={formPage1.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-marine-blue-primary flex justify-between"
            >
              <span>Phone Number</span>
              {errors.phone && (
                <span className="text-red-600 font-semibold">
                  {errors.phone}
                </span>
              )}
            </label>
            <input
              id="phone"
              type="text"
              placeholder="e.g. +1 234 567 890"
              className={`${
                errors.phone ? "border border-red-600" : ""
              } w-full h-10 rounded-md px-3 border`}
              name="phone"
              value={formPage1.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>
        <div className="max-lg:flex bg-white max-lg:w-screen w-full h-16 absolute bottom-0 left-0 items-center justify-end pr-7">
          <button
            onClick={handleClick}
            className="btn hover:opacity-80 transition-transform hover:scale-105 absolute bottom-0 right-0 max-lg:static"
          >
            Next Step
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default StepOne;
