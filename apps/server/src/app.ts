import express, { Request, Response } from "express";
import apiRouter from "./api.routes";
import path from "path";
import fs from "fs";

const app = express();

// Serve sounds folder
app.use("/sounds", express.static(path.join(__dirname, "../sounds")));

// API routes
app.use("/api", apiRouter);

const packageJsonInParent = path.resolve(__dirname, "../package.json");
const serverRootPath = fs.existsSync(packageJsonInParent)
  ? path.resolve(__dirname, "..")
  : path.resolve(__dirname, "../..");

const clientDistPath = path.resolve(serverRootPath, "../client/dist");

if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get("/{*splat}", (req: Request, res: Response, next) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/sounds")) {
      return next();
    }

    res.sendFile(path.join(clientDistPath, "index.html"));
  });
} else {
  app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
      message: "There is some issue, contact admin.",
    });
  });
}

export default app;
