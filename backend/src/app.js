const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(errors())
app.use(express.json());
app.use(routes);

module.exports = app; 