import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = expresss.Router();

router.get("/users", protectRoute, getUsersForSidebar);

export default router;