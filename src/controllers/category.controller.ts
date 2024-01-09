import { Request, Response } from "express";
import Category from "../models/category.model";
import StatusCodes from "http-status-codes";
import { HTTPError, HTTPResponse } from "../utils/response";

export const addCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { title } = req.body;
  const createdBy = req.user["_id"];
  let category = await Category.findOne({ title, createdBy });
  if (category) {
    let error = new HTTPError(
      "Category with that title already exists!",
      StatusCodes.CONFLICT
    );
    return res.status(StatusCodes.CONFLICT).json(error);
  }
  category = new Category({
    ...req.body,
    createdBy,
  });
  await category.save();
  let response = new HTTPResponse("Category created successfully!", category);
  return res.status(StatusCodes.CREATED).json(response);
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let _id = req.params.id;
  const category = await Category.findById(_id).populate(
    "createdBy",
    "-password"
  );
  let response = new HTTPResponse("Success", category);
  res.status(StatusCodes.OK).json(response);
};

export const getAllCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdBy = req.user["_id"];
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const categories = await Category.find({ createdBy })
    .skip(skip)
    .limit(limit)
    .lean()
    .populate("createdBy", "-password");
  const totalCategoriesCount = await Category.countDocuments({ createdBy }); // Get total count of categories

  let response = new HTTPResponse("Success", {
    categories,
    count: totalCategoriesCount,
  });
  res.status(StatusCodes.OK).json(response);
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let response;
  const { id } = req.params;
  const createdBy = req.user["_id"];
  const data = req.body;

  const updatedCategory = await Category.findOneAndUpdate(
    { _id: id, createdBy },
    data,
    {
      new: true,
    }
  ).populate("createdBy", "-password");
  if (updatedCategory) {
    response = new HTTPResponse(
      "Category updated successfully!",
      updatedCategory
    );
    res.status(StatusCodes.OK).json(response);
  } else {
    response = new HTTPError(
      "Category with that ID not found!",
      StatusCodes.CONFLICT
    );
    res.status(StatusCodes.CONFLICT).json(response);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let response;
  const { id } = req.params;
  const createdBy = req.user["_id"];
  const deletedCategory = await Category.findOneAndDelete({
    _id: id,
    createdBy,
  });
  if (deletedCategory) {
    response = new HTTPResponse(
      "Category deleted successfully!",
      deletedCategory
    );
    res.status(StatusCodes.OK).json(response);
  } else {
    response = new HTTPError(
      "Category with that ID not found!",
      StatusCodes.CONFLICT
    );
    res.status(StatusCodes.CONFLICT).json(response);
  }
};
