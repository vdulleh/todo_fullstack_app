import express from "express";
import fs from "fs";
import ViteExpress from "vite-express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "./dbService.js";

const swaggerDocument = JSON.parse(
  fs.readFileSync(new URL("../swagger.json", import.meta.url), "utf8"),
);

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/swagger.json", (req, res) => {
  res.json(swaggerDocument);
});

app.get("/tasks", async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
});

app.get("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const task = await getTask(id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

app.post("/tasks", async (req, res) => {
  const { task } = req.body;
  const newTask = await createTask(task);
  res.json(newTask);
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const existingTask = await getTask(parseInt(id));
  if (!existingTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  const updatedTask = await updateTask(parseInt(id), task);
  res.json(updatedTask);
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const existingTask = await getTask(parseInt(id));
  if (!existingTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = await deleteTask(parseInt(id));
  res.json({ message: "Task deleted successfully" });
});

ViteExpress.listen(app, 3001, () =>
  console.log("Server is listening on port 3001..."),
);
