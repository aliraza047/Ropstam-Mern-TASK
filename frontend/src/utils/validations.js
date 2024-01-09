import * as yup from "yup";

export const signUpValSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
export const loginValSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const categorySchema = yup.object({
  title: yup.string().required("Category Name is required"),
});
export const carSchema = yup.object({
  color: yup.string().required("Car color is required"),
  model: yup.string().required("Car modle is required"),
  maker: yup.string().required("Car maker is required"),
  registrationNo: yup.string().required("Registration number is required"),
  category: yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid category ID"),
});
