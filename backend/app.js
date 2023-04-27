const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const config = require('./config');
const webhookRouter = require('./routes/webhook');
const testRouter = require('./routes/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/webhook', webhookRouter);

// Use multer middleware to handle form-data for the test route
app.use('/test', upload.fields([]), testRouter);

module.exports = app;
