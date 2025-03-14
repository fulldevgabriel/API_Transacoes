const express = require('express');
const app = express();
const transacaoRoutes = require('./routes/transacaoRoutes');

app.use(express.json());
app.use('/', transacaoRoutes);

module.exports = app;