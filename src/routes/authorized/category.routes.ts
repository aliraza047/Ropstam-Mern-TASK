import express from "express";
const router = express.Router({ mergeParams: true });
import { Category } from "../../controllers";
import { validationCatches, catchAsyncErrors } from "../../utils/tryCatch";
import { categoryValidation } from "../../utils/validation";

router.get("/getAllCategory", Category.getAllCategories);
router.get("/getById/:id", Category.getCategoryById);
router.post(
  "/add",
  validationCatches(categoryValidation),
  catchAsyncErrors(Category.addCategory)
);
router.patch(
  "/update/:id",
  validationCatches(categoryValidation),
  catchAsyncErrors(Category.updateCategory)
);
router.delete("/delete/:id", catchAsyncErrors(Category.deleteCategory));

export default router;
