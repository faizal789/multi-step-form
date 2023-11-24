const TotalBill = ({ formData }) => {
  const totalCount = () => {
    let total = 0;
    if (formData.checkboxPlanValue) {
      if (formData.formPage2.plan.name === "Arcade") {
        total += 90;
      } else if (formData.formPage2.plan.name === "Advanced") {
        total += 120;
      } else if (formData.formPage2.plan.name === "Pro") {
        total += 150;
      }
      if (formData.formPage3.checkboxes.onlineService) {
        total += 10;
      }
      if (formData.formPage3.checkboxes.largerStorage) {
        total += 20;
      }
      if (formData.formPage3.checkboxes.customizableProfile) {
        total += 20;
      }
    } else {
      if (formData.formPage2.plan.name === "Arcade") {
        total += 9;
      } else if (formData.formPage2.plan.name === "Advanced") {
        total += 12;
      } else if (formData.formPage2.plan.name === "Pro") {
        total += 15;
      }
      if (formData.formPage3.checkboxes.onlineService) {
        total += 1;
      }
      if (formData.formPage3.checkboxes.largerStorage) {
        total += 2;
      }
      if (formData.formPage3.checkboxes.customizableProfile) {
        total += 2;
      }
    }
    return total;
  };
  return (
    <h1 className="text-2xl text-purplish-blue-primary">
      +${totalCount()}
      {formData.checkboxPlanValue ? "/yr" : "/mo"}
    </h1>
  );
};

export default TotalBill;
