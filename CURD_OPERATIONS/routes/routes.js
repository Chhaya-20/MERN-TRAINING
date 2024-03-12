const express = require('express');
const fs = require('fs');

const router = express.Router();

// GET all data
router.get('/data', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// GET single record by ID
router.get('/data/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
       const record = jsonData.find(item => item.id === id);
        if (!record) {
            res.status(404).send('Record not found');
            return;
        }
        res.json(record);
    });
});

// POST new record
router.post('/data', (req, res) => {
    const newData = req.body;
    // Validate required fields
    if (!newData.id) {
        res.status(400).send('ID is required');
        return;
    }
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
        jsonData.push(newData);
        fs.writeFile('./data.json', JSON.stringify(jsonData), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.status(201).send('Record added successfully');
        });
    });
});

// PUT update record by ID
router.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    
    //Read file
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
        const index = jsonData.findIndex(item => item.id === id);
        if (index === -1) {
            res.status(404).send('Record not found');
            return;
        }
        jsonData[index].name = updatedData.name;
        jsonData[index].color = updatedData.color;
        jsonData[index].taste = updatedData.taste;
        jsonData[index].price= updatedData.price;
        jsonData[index].quantity = updatedData.quantity;
        fs.writeFile('./data.json', JSON.stringify(jsonData), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send('Record updated successfully');
        });
    });
});

// DELETE record by ID
router.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
        const filteredData = jsonData.filter(item => item.id !== id);

        //Data with id is not find
        if (jsonData.length === filteredData.length) {
            res.status(404).send('Record not found');
            return;
        }

        //Add deleted data to data file
        fs.writeFile('./data.json', JSON.stringify(filteredData), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send('Record deleted successfully');
        });
    });
});

module.exports = router;
