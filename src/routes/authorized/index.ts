import { Router } from "express";
import categoryRoutes from "./category.routes";
import carRoutes from "./car.routes";

const router = Router();

router.use("/category", categoryRoutes);
router.use("/car", carRoutes);

export default router;
