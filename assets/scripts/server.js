//dependancies 
const express = require('express')
const path = require('path')

//every other shit
const app = express();

const port = 8080;

//example.com/user/000000?sex=female

app.get('/user/:id', function(req, res) {

    const query = req.query;// query = {sex:"female"}
  
    const params = req.params; //params = {id:"000000"}
    res.send(`var: ${query} \n id: ${params.id}`)
    console.log(query.var)
    console.log(params.id)
  
  })
  

app.listen(port, () => {
    console.log(`server launched at port ${port}`)
});
