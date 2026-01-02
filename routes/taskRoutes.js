const express = require('express');
const router = express.Router();
const {getAllTasks, addTask, getTaskById} = require('../controllers/taskController');



router.get ('/', getAllTasks);
router.post ('/', addTask);
router.get ('/:id', getTaskById);

module.exports = router;