//dependencies
const express = require('express');
const config = require('../../config/config.json');
const path = require('path');
const fs = require('fs');

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

app.get('/post/:pwd', function(req, res) {

  const query = req.query;// query = {sex:"female"}

  var pwd = req.params.pwd;
  var request = req.query.req;

  const params = req.params; //params = {id:"000000"}
  console.log(query)
  console.log(params)

  res.send(query)

  if(pwd == "N5KM-RLI6-C1E7-WLYU") {
    console.log('authorized')

    var reqparse = request.split('%')
    console.log(`${reqparse[0]}, ${reqparse[1]} `)
    fs.createWriteStream()
  } else {
    console.log('unauthorized, rejecting request...')
  }

})


const port = 8080;

app.listen(port, () => {
    console.log(`app launched at port ${port}`)
});

