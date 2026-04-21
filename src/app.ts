import express, { Application } from "express";
import morgan from "morgan";

import userRoutes from "./modules/auth/routes/user.routes";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/health-check", (req, res) => {
  res.status(200).json({"server-info":{
    "status": "healthy",
    "timestamp": new Date().toISOString(),
    "uptime": process.uptime(),
  }});
});

// user routes
app.use("/api/auth", userRoutes);

export default app;