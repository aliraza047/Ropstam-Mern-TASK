import { Request, Response } from "express";
import Car from "../models/car.model";
import StatusCodes from "http-status-codes";
import { HTTPError, HTTPResponse } from "../utils/response";

export const addCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdBy = req.user["_id"];
  let car = new Car({
    ...req.body,
    createdBy,
  });
  await car.save();
  let response = new HTTPResponse("Car created successfully!", car);
  return res.status(StatusCodes.CREATED).json(response);
};

export const getCarById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let _id = req.params.id;
  const car = await Car.findById(_id).populate(
    "createdBy category",
    "-password"
  );
  let response = new HTTPResponse("Success", car);
  res.status(StatusCodes.OK).json(response);
};

export const getAllCars = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdBy = req.user["_id"];
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const cars = await Car.find({ createdBy })
    .skip(skip)
    .limit(limit)
    .lean()
    .populate("createdBy category", "-password");
  const totalCarCount = await Car.countDocuments({ createdBy });

  let response = new HTTPResponse("Success", { cars, count: totalCarCount });
  res.status(StatusCodes.OK).json(response);
};

export const updateCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let response;
  const { id } = req.params;
  const createdBy = req.user["_id"];
  const data = req.body;

  const updatedCar = await Car.findOneAndUpdate({ _id: id, createdBy }, data, {
    new: true,
  });
  if (updatedCar) {
    response = new HTTPResponse("Car updated successfully!", updatedCar);
    res.status(StatusCodes.OK).json(response);
  } else {
    response = new HTTPError(
      "Car with that ID not found!",
      StatusCodes.CONFLICT
    );
    res.status(StatusCodes.CONFLICT).json(response);
  }
};

export const deleteCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let response;
  const { id } = req.params;
  const createdBy = req.user["_id"];
  const deletedCar = await Car.findOneAndDelete({ _id: id, createdBy });
  if (deletedCar) {
    response = new HTTPResponse("Car deleted successfully!", deletedCar);
    res.status(StatusCodes.OK).json(response);
  } else {
    response = new HTTPError(
      "Car with that ID not found!",
      StatusCodes.CONFLICT
    );
    res.status(StatusCodes.CONFLICT).json(response);
  }
};
