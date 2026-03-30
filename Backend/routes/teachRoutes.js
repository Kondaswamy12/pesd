import express from "express";
import { protect, teacherOnly } from "../middleware/authMiddleware.js";
import {
  assignTA,
  bulkUploadDocuments,
  completeExam,
  deassignTA,
  deleteExam,
  downloadIncentivesCSV,
  downloadPDF,
  downloadResultsCSV,
  flagEvaluations,
  getCompletedExamsForTeacher,
  getDashboardStats,
  getEnrolledStudents,
  getExamsForTeacher,
  getFlaggedEvaluationsForExam,
  getResultsAnalytics,
  getTeacherCoursesAndBatches,
  removeTicket,
  scheduleExam,
  sendEvaluation,
  studentsEnroll,
  updateEvaluation,
  updateExam,
} from "../controllers/teacherController.js";
import upload from "../utils/fileUpload.js";

const router = express.Router();

router.get("/dashboard-stats", protect, teacherOnly, getDashboardStats);
router.post("/assign-ta", protect, teacherOnly, assignTA);
router.post("/deassign-ta", protect, teacherOnly, deassignTA);
router.get(
  "/teacher-courses-batches",
  protect,
  teacherOnly,
  getTeacherCoursesAndBatches
);
router.post(
  "/students-enroll",
  protect,
  teacherOnly,
  upload.single("file"),
  studentsEnroll
);
router.get(
  "/enrolled-students",
  protect,
  teacherOnly,
  getEnrolledStudents
);
router.post(
  "/exam-schedule",
  protect,
  teacherOnly,
  upload.single("solutions"),
  scheduleExam
);
router.get("/teacher-exams", protect, teacherOnly, getExamsForTeacher);
router.put(
  "/update-exam/:id",
  protect,
  teacherOnly,
  upload.single("solutions"),
  updateExam
);
router.get("/download-pdf/:examId", protect, teacherOnly, downloadPDF);
router.post(
  "/bulk-upload",
  protect,
  teacherOnly,
  upload.array("documents"),
  bulkUploadDocuments
);
router.post(
  "/send-evaluation/:examId",
  protect,
  teacherOnly,
  sendEvaluation
);
router.post(
  "/flag-evaluations/:examId",
  protect,
  teacherOnly,
  flagEvaluations
);
router.put(
  "/mark-exam-done/:examId",
  protect,
  teacherOnly,
  completeExam
);
router.delete("/delete-exam/:id", protect, teacherOnly, deleteExam);
router.get(
  "/completed-exams",
  protect,
  teacherOnly,
  getCompletedExamsForTeacher
);
router.get(
  "/flagged-evaluations/:examId",
  protect,
  teacherOnly,
  getFlaggedEvaluationsForExam
);
router.put(
  "/update-evaluation/:evaluationId",
  protect,
  teacherOnly,
  updateEvaluation
);
router.put(
  "/remove-ticket/:evaluationId",
  protect,
  teacherOnly,
  removeTicket
);
router.get(
  "/download-results-csv/:examId",
  protect,
  teacherOnly,
  downloadResultsCSV
);
router.get(
  "/results-analytics/:examId",
  protect,
  teacherOnly,
  getResultsAnalytics
);
router.get(
  "/download-incentives-csv/:batchId",
  protect,
  teacherOnly,
  downloadIncentivesCSV
);

export default router;
