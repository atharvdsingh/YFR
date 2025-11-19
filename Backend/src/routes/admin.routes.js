import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";
import { listPendingPodcasts, approvePodcast, listPendingCategories, approveCategory } from "../controllers/admin.controller.js";

const router = express.Router();

// All admin routes should be protected with auth + role check
router.use(auth);
router.use(requireRole("admin"));

router.get("/podcasts/pending", listPendingPodcasts);
router.put("/podcasts/:id/approve", approvePodcast);

router.get("/categories/pending", listPendingCategories);
router.put("/categories/:id/approve", approveCategory);

export default router;
