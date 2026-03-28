import mongoose from "mongoose";

const studyIndiaProgramSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    duration: String,
    fee: String,

    eligibility: [String],
    universities: [String],
    admission: [String],
  },
  {
    timestamps: true,
  }
);

const StudyIndiaProgram = mongoose.model(
  "StudyIndiaProgram",
  studyIndiaProgramSchema
);

export default StudyIndiaProgram;