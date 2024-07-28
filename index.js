require('dotenv').config(); // This should be the first line

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MongoDB URI is not defined');
  process.exit(1);
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
console.log('Environment Variables:', process.env);

