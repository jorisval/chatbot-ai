const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const config = require('./config');
const webhookRouter = require('./routes/webhook');
const testRouter = require('./routes/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/webhook', webhookRouter);
app.use('/test', testRouter);

module.exports = app;