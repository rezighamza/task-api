const Task = require('../models/taskModel');

function getAllTasks(req,res){
    const tasks = Task.getAllTasks();
    res.json(tasks);
}

function getTaskById(req,res){
    const id = parseInt(req.params.id);
    const task = Task.getTaskById(id);
    if(task){
        res.json(task);
    } else {
        res.status(404).json({message: 'Task not found'});
    }
}

function addTask(req,res){
    const taskData = req.body;
    if(!taskData.title || !taskData.description){
        return res.status(400).json({message: 'Title and Description are required'});
    }
    const newTask = Task.addTask(taskData);
    res.status(201).json(newTask);
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask
};