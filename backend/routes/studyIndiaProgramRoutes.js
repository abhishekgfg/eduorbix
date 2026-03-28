import express from "express";
import {
  createStudyIndiaProgram,
  getStudyIndiaPrograms,
  getStudyIndiaProgramById,
  deleteStudyIndiaProgram,
  updateStudyIndiaProgram,
} from "../controllers/studyIndiaProgramController.js";

const router = express.Router();

router.post("/", createStudyIndiaProgram);
router.get("/", getStudyIndiaPrograms);
router.get("/:id", getStudyIndiaProgramById);
router.delete("/:id", deleteStudyIndiaProgram);
// Add PUT route to your router
router.put("/:id", updateStudyIndiaProgram);

export default router;