const express = require('express');
const checkRouter = require('./routes/check');

const app = express();

app.use(express.json());

app.use('/check', checkRouter);
// app.get("/", (_req, res) => {
//   res.send("Hello World!");
// });

module.exports = app;