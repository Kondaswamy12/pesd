import express from "express";
import {
  updateRole,
  addCourse,
  getTeachers,
  getCourses,
  addBatch,
  getDashboardCounts,
  deleteCourse,
  getBatches,
  deleteBatch,
  getCourseById,
  updateCourse,
  getBatchById,
  updateBatch,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect, adminOnly);
router.post("/update-role", protect, adminOnly, updateRole);
router.post("/add-course", protect, adminOnly, addCourse);
router.get("/teachers", protect, adminOnly, getTeachers);
router.get("/courses", protect, adminOnly, getCourses);
router.get("/course/:courseId", protect, adminOnly, getCourseById);
router.put(
  "/update-course/:editCourseId",
  protect,
  adminOnly,
  updateCourse
);
router.get("/batches", protect, adminOnly, getBatches);
router.post("/add-batch", protect, adminOnly, addBatch);
router.get("/batch/:batchId", protect, adminOnly, getBatchById);
router.put(
  "/update-batch/:editBatchId",
  protect,
  adminOnly,
  updateBatch
);
router.get(
  "/dashboard-counts",
  protect,
  adminOnly,
  getDashboardCounts
);
router.delete(
  "/delete-course/:courseId",
  protect,
  adminOnly,
  deleteCourse
);
router.delete(
  "/delete-batch/:batchId",
  protect,
  adminOnly,
  deleteBatch
);

export default router;
