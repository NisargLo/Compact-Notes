const express = require('express');
const mongoose = require('mongoose');
const Model = require('./Notes_Model');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
require('dotenv').config({ path: '../.env' });

const MongoDB_Atlas_URL = process.env.MONGODB_ATLAS_URL;

mongoose.connect(MongoDB_Atlas_URL).then(() => {
    console.log('MongoDB Atlas Connected');

    app.get('/', async (req, res) => {
        const data = await Model.find();
        res.send(data);
    });

    app.post('/add', async (req, res) => {
        console.log('\nAdded data: ', req.body);
        const newData = new Model({
            title: req.body.title,
            image: req.body.image,
            description: req.body.description
        });
        const result = await newData.save();
        res.send(result);
    });

    app.put('/edit/:id', async (req, res) => {
        console.log('\nEditing note with ID: ', req.params.id);
        console.log('New data:', req.body);
        const updatedData = await Model.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                image: req.body.image,
                description: req.body.description
            },
            { new: true }
        );
        res.send(updatedData);
    });

    app.delete('/delete/:id', async (req, res) => {
        console.log('\nDeleted note with ID: ', req.params.id);
        await Model.findByIdAndDelete(req.params.id);
        res.send("Note Deleted.");
    });

    app.get('/search/:title', async (req, res) => {
        const result = await Model.find({
            title: {
                $regex: req.params.title,
                $options: 'i'
            }
        });
        console.log(`\nSearched for: ${req.params.title}`);
        console.log('Found notes: ', result);
        res.send(result);
    });    

    const port = process.env.PORT || 3100;
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
});