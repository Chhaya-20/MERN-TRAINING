const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send("Welcome")

})
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});