import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./Routes/Auth.route.js";
import pool from "./Db.js"; // Ensure database connection

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Authentication API!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
