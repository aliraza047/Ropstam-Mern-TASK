import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

const signUpValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });

  try {
    schema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const categoryValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
  });

  try {
    schema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const carValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const schema = yup.object().shape({
    color: yup.string(),
    model: yup.string(),
    registrationNo: yup.string().required("Registration number is required"),
    category: yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid category ID"),
  });

  try {
    schema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

export { signUpValidation, categoryValidation, carValidation };
