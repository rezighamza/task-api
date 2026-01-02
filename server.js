const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

connectDB();
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});