const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes');
const multer = require('multer');
const upload = multer();

dotenv.config();

const port = 3000;

const app = express();

app.set('view engine', 'ejs');

mongoose.connect(
    process.env.DB_CONNECT, 
    { useUnifiedTopology: true, useNewUrlParser: true}, 
    () => console.log('connected to db') 
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

// middle ware for routes
app.use('/', route);

app.listen(port);
console.log('Listening on port ' + port + '...');