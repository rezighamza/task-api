const Task = require("../models/taskModel");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

async function getTaskById(req, res) {
  try {
    const task = await Task.findById(req.params.id)
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

async function addTask(req, res) {
  try {
    const taskData = req.body;
    if (!taskData.title || !taskData.description) {
      return res
        .status(400)
        .json({ message: "Title and Description are required" });
    }
    const newTask = await Task.create(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
}

async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(task)
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

async function deleteTask(req, res) {
    try {
        const task = await Task.findByIdAndDelete(
            req.params.id
        )
        res.json(task)
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}





module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask
};
