import express from "express";
const router = express.Router({ mergeParams: true });
import { Car } from "../../controllers";
import { validationCatches, catchAsyncErrors } from "../../utils/tryCatch";
import { carValidation } from "../../utils/validation";

router.get("/getAllCars", Car.getAllCars);
router.get("/getById/:id", Car.getCarById);
router.post(
  "/add",
  validationCatches(carValidation),
  catchAsyncErrors(Car.addCar)
);
router.patch(
  "/update/:id",
  validationCatches(carValidation),
  catchAsyncErrors(Car.updateCar)
);
router.delete("/delete/:id", catchAsyncErrors(Car.deleteCar));

export default router;
