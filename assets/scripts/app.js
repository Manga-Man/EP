//dependencies
const express = require('express');
const config = require('../../config/config.json');
const path = require('path');

//onstart
const app = express();

var cssPath = path.join(__dirname, '.././css');

app.use(express.static(cssPath));

//routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/index.html'))
});

const port = 9000;

app.listen(port, () => {
    console.log(`app launched at port ${port}`)
});

