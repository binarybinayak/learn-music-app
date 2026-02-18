import express, { Request, Response } from "express";

const app = express();

app.use("/sounds", express.static("sounds"));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Learn Music App!");
});

export default app;
