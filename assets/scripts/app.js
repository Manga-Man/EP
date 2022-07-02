//dependencies
const express = require('express');
const config = require('../../config/config.json');
const path = require('path');

//onstart
const app = express();

var cssPath = path.join(__dirname, '.././css');

app.use(express.static(cssPath));

var htmlPath = path.join(__dirname, '.././html');

app.use(express.static(htmlPath));

//routing
app.get('/Anime.html:tagId', (req, res) => {
    res.sendFile(path.join(__dirname + 'Anime.html'))
    console.log(req.params.tagId)
});

const port = 9000;

app.listen(port, () => {
    console.log(`app launched at port ${port}`)
});

