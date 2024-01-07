const express = require('express');
const path = require('path');
const app = express();
const port = 4100;
const Ip = require('./ipshema');
const mongoose = require('mongoose');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('');
});


mongoose.connect("mongodb+srv://tattahabelk:Abel1919@cluster0.bkxk0nq.mongodb.net/")
.then(() => console.log('MongoDB Connected'))

app.use(express.static('./'));

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/record', async(req, res) => {
  try {
    const ip = await Ip.create(req.body);
    res.status(200).json(ip);
  } catch (error) {
    console.log(error.message);
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
