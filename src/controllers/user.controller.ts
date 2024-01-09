import { Request, Response } from "express";
import User from "../models/user.model";
import sendMail from "../utils/mailer";
import bcryptjs from "bcryptjs";
import StatusCodes from "http-status-codes";
import { HTTPError, HTTPResponse } from "../utils/response";
import {
  getJWTToken,
  getEncryptedPassword,
  generateRandomPassword,
} from "../utils/utils";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;
  let response, error;
  let user = await User.findOne({ email });
  if (user) {
    error = new HTTPError("Email Already registered!", StatusCodes.CONFLICT);
    return res.status(StatusCodes.CONFLICT).json(error);
  }
  const randomPassword: string = generateRandomPassword(6);
  console.log("randomPassword", randomPassword); // Change 10 to the desired password length
  user = new User({
    ...req.body,
  });
  user.password = await getEncryptedPassword(randomPassword);
  await user.save();
  user.password = undefined;
  let emailBody =
    "Wellcome to our platform. Your pin to retrive your account is <b>" +
    randomPassword +
    "</b>. Don't share it with anyone.";
  await sendMail("WellCome Email", emailBody, email);
  response = new HTTPResponse("Signed up successfully", { user });
  return res.status(StatusCodes.CREATED).json(response);
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { password, email } = req.body;
  let error;
  const user = await User.findOne({ email });
  if (!user) {
    error = new HTTPError("Invalid email", StatusCodes.NOT_FOUND);
    return res.status(StatusCodes.NOT_FOUND).json(error);
  }
  const passwordMatch = await bcryptjs.compare(password, user.password);
  if (!passwordMatch) {
    error = new HTTPError("Invalid password", StatusCodes.CONFLICT);
    return res.status(StatusCodes.CONFLICT).json(error);
  }
  user.password = undefined;
  const token = await getJWTToken({ _id: user["_id"] });
  let response = new HTTPResponse("Login successfull", { user, token });
  return res.status(StatusCodes.OK).json(response);
};
