import StudyIndiaProgram from "../models/StudyIndiaProgram.js";

// CREATE
export const createStudyIndiaProgram = async (req, res) => {
  try {
    const program = new StudyIndiaProgram(req.body);
    const saved = await program.save();

    res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
export const getStudyIndiaPrograms = async (req, res) => {
  try {
    const programs = await StudyIndiaProgram.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: programs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE
export const getStudyIndiaProgramById = async (req, res) => {
  try {
    const program = await StudyIndiaProgram.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json({
      success: true,
      data: program,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
export const deleteStudyIndiaProgram = async (req, res) => {
  try {
    const program = await StudyIndiaProgram.findByIdAndDelete(req.params.id);

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json({
      success: true,
      message: "Program deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Add this to your studyIndiaProgramController.js

// UPDATE
export const updateStudyIndiaProgram = async (req, res) => {
  try {
    const program = await StudyIndiaProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json({
      success: true,
      data: program,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

