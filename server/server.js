const express = require('express')
const path = require('path')
const app = express()
const port = 3001
const cors = require('cors')

const corsOptions = {
    origin: true
}

app.use(cors())

app.get('/', cors(corsOptions), function (req, res, next) {
    res.sendFile(path.join(__dirname, './', 'data.json'));
});

app.listen(port);