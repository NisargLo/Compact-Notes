const express = require('express');
const mongoose = require('mongoose');
const Model = require('./Models/Note_Model');
const app = express();
app.use(express.json());
require('dotenv').config({ path: '../.env' });

const MongoDB_Atlas_URL = process.env.MongoDB_Atlas_URL;
mongoose.connect(MongoDB_Atlas_URL).then(() => {
     console.log('MongoDB Connected');

     app.get('/', async (req, res) => {
          const data = await Model.find();
          res.send(data);
     });

     app.post('save/', async (req, res) => {
          newData = new Model({...req.body});
          const result = await newData.save();
          res.send(result);
     });

     app.post('create/', async (req, res) => {
          const { ID, Name, Class, Roll_No } = req.body;
          const result = await Model.create({ ID, Name, Class, Roll_No });
          res.send(result);
     });

     app.get('/first/:parameter', async (req, res) => {
          const data = await Model.findOne({ ID: req.params.parameter });
          res.send(data);
     });

     app.get('/all/:parameter', async (req, res) => {
          const data = await Model.find({ ID: req.params.parameter });
          res.send(data);
     });


     app.get('/atlas/:id', async (req, res) => {
          const data = await Model.findById(req.params.id);
          res.send(data);
     });

     app.put('/update/name/:parameter', async (req, res) => {
          const stu = await Model.findOne({ ID: req.params.parameter });
          stu.Name = req.body.Name;
          const result = await stu.save();
          res.send(result);
     });

     app.patch('/update/:parameter', async (req, res) => {
          const newData = req.body;
          const data = await Model.findOneAndUpdate({ ID: req.params.parameter }, newData, { new: true });
          res.send(data);
     });

     app.delete('/delete/:parameter', async (req, res) => {
          await Model.deleteOne({ _id: req.params.id });
          res.send("Only One Deleted.");
     });

     app.delete('/delete/atlas/:id', async (req, res) => {
          await Model.deleteMany({ ID: req.params.id });
          res.send("One/Many Deleted.");
     });

     app.get('/search/:parameter', async (req, res) => {
          const result = await Model.find({
               Name: {
                    $regex: req.params.parameter
               }
          });
          res.send(result);
     });


     /*
          -> For My ID:-
               .findOne({ ID: req.params.parameter });
               .findOneAndUpdate({ ID: req.params.parameter }, newData, { new: true });

          -> For MongoDB Atlas default id:-
               .findById(req.params.id)
               .findByIdAndUpdate(req.params.id, newData, { new: true });
     */


     const port = process.env.PORT;
     app.listen(port, (err) => {
          if (err) {
               console.log(`Error in listening on port ${port}`);
               return;
          }
          console.log(`App is listening on port ${port}`);
     });
});
