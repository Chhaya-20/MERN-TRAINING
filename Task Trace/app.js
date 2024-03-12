const express = require('express');
const fs = require('fs');
const Routes = require('./routes/routes');


const app = express();
const PORT = 3000;
//const dataFilePath = './tasks.json';

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/tasks',Routes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});