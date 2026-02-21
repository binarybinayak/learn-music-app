import express, { Request, Response } from "express";
import apiRouter from "./api.routes";
import path from "path";

const app = express();

// Serve sounds folder
app.use("/sounds", express.static(path.join(__dirname, "../sounds")));

// API routes
app.use("/api", apiRouter);

// Serve React app from apps/client/dist (assuming Vite build)
const clientDistPath = path.join(__dirname, "../../client/dist");
app.use(express.static(clientDistPath));

export default app;
