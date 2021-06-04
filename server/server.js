const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './', 'data.json'));
});

app.listen(port);