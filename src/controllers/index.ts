import { signUp, login } from "./user.controller";

import {
  addCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "./category.controller";
import {
  addCar,
  getCarById,
  getAllCars,
  updateCar,
  deleteCar,
} from "./car.controller";

export const User = {
  signUp,
  login,
};

export const Category = {
  addCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
};

export const Car = {
  addCar,
  getCarById,
  getAllCars,
  updateCar,
  deleteCar,
};
