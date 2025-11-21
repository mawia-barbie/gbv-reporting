import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reportRoutes from "./routes/Reports.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api/reports", reportRoutes);
app.get("/", (req, res) => {
  res.send("Harassment Reporting API is running");
});
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Harassment Reporting API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
