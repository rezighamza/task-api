const tasks = [ 
    { id: 1, title: 'Task One', description: 'This is the first task' },
    { id: 2, title: 'Task Two', description: 'This is the second task' },
    { id: 3, title: 'Task Three', description: 'This is the third task' }
]

let nextId = 4;

const getAllTasks = () => {
    return tasks;
}

const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
}

const addTask = (task) => {
    const newTask = { id: nextId, ...task };
    nextId++;
    tasks.push(newTask);
    return newTask;
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask
};