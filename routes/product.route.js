import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
  getSpecificProduct,
  editProduct,
  deleteProduct
} from "../controllers/product.controllers.js";

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getSpecificProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
