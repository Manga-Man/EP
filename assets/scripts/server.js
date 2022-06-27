//dependancies 
const express = require('express')
const path = require('path')

//every other shit
const app = express();

const port = 8080;

var cssPath = path.join(__dirname, '.././css');

app.use(express.static(cssPath));

app.listen(port, () => {
    console.log(`server launched at port ${port}`)
});
