import { motion } from "framer-motion";

const StepFive = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex justify-center items-center"
    >  
      <div className="flex flex-col gap-4">
        <img
          className="mx-auto"
          src={`${baseUrl}./images/icon-thank-you.svg`}
          width={100}
          alt="icon thank you"
        />
        <h1 className="text-center">Thank you!</h1>
        <p className="text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </motion.div>
  );
};

export default StepFive;
