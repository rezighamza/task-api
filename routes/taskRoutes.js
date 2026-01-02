const express = require('express');
const router = express.Router();
const {getAllTasks, addTask, getTaskById
    , updateTask, deleteTask
} = require('../controllers/taskController');



router.get ('/', getAllTasks);
router.post ('/', addTask);
router.get ('/:id', getTaskById);
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;