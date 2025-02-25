const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');
const userRouter = require('./routers/user.routers');
const complaintRouter = require('./routers/complaint.router'); // Include complaint routes

const app = express();
app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/complaints', complaintRouter); // Add complaints route

module.exports = app;
