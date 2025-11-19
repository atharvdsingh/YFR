import express from "express";
import multer from "multer";
import auth from "../middlewares/auth.middleware.js";
import { listCategories, requestCategory } from "../controllers/category.controller.js";

const upload = multer({ dest: "/tmp/uploads" });

const router = express.Router();

router.get("/", listCategories);
router.post("/request", auth, upload.single("image"), requestCategory);

export default router;
