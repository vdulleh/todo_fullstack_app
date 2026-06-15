import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import { getTasks, createTask } from "./dbService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/tasks", async (req, res) => {
  const { task } = req.body;
  const newTask = await createTask(task);
  res.json(newTask);
});

ViteExpress.listen(app, 3001, () =>
  console.log("Server is listening on port 3001..."),
);
