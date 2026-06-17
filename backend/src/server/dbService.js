import { prisma } from "./lib/prisma.js";

const getTasks = async () => {
  return prisma.task.findMany();
};

const createTask = async (task) => {
  return prisma.task.create({
    data: {
      task: task,
      isEditing: false,
    },
  });
};

const getTask = async (id) => {
  // Get a single task by id
  return prisma.task.findUnique({
    where: { id: id },
  });
};

const updateTask = async (id, task) => {
  // Update the task with the given id
  return prisma.task.update({
    where: { id: id },
    data: { task: task },
  });
};

const deleteTask = async (id) => {
  // Delete the task with the given id
  // Delete the task with the given id
  return prisma.task.delete({
    where: { id: id },
  });
};

export { getTasks, createTask, getTask, updateTask, deleteTask };
