const express = require('express');
const bodyParser = require('body-parser');
const { processReceipt, getPoints } = require('./handlers');

const app = express();
const PORT = 3000;

const db = {};

app.use(bodyParser.json());

app.post('/receipts/process', (req, res) => processReceipt(req, res, db));
app.get('/receipts/:id/points', (req, res) => getPoints(req, res, db));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
