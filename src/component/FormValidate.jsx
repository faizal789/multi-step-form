export const validateForm = (data) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const numberRegex = /^[0-9]+$/;

  function isValidInput(Regex, input) {
    return Regex.test(input);
  }

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!isValidInput(emailRegex, data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.phone) {
    errors.phone = "Phone number is required";
  } else if (!isValidInput(numberRegex, data.phone)) {
    errors.phone = "Phone number is invalid";
  }

  return errors;
};
