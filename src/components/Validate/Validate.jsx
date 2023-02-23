
export const validate = (values) => {
  let errors = { name: "", email: "", phone: "", exp: "", msg:"" };
  if (!values.name) errors.name = "Name is required";
  else if (/[`~!@#$%^&*()_|+\-=?;:'",.<>0-9\{\}\[\]\\\/]/gi.test(values.name))
    errors.name = "Name should not contain special characters and numbers";
  if (!values.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Email address is not valid";
  if (!values.phone) errors.phone = "Phone number is required";
  else if (values.phone.length !== 10)
    errors.phone = "Phone number should be 10 digit number";
  if (!values.exp) errors.exp = "Experience is required";
  else if (values.exp.length < 10 || values.exp.length > 150)
    errors.exp = "Experience should be 10 to 150 characters long";
  if (!values.msg) errors.msg = "Message is required";
  else if (values.msg.length < 10 || values.msg.length > 150)
    errors.msg = "Message should be 10 to 150 characters long";
  return errors;
};
