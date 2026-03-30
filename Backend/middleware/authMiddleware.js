import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export const adminOrTeacherOnly = (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "teacher") {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Access denied. Admins or Teachers only." });
};
export const adminOnly = (req, res, next) => {
  console.log("ADMIN CHECK HIT:", req.user?.role);

  if (req.user.role === "admin") return next();

  return res.status(403).json({ message: "Admin only access" });
};
export const teacherOnly = (req, res, next) => {
  if (req.user.role === "teacher") return next();
  return res.status(403).json({ message: "Teacher only access" });
};

export const studentOnly = (req, res, next) => {
  if (req.user.role === "student") return next();
  return res.status(403).json({ message: "Student only access" });
};