import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  
type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },       // optional
  evidence: { type: Buffer },
}, { timestamps: true });
const Report = mongoose.model("Report", reportSchema);

export default Report;
