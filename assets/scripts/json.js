const fs = require('fs')
const json = require('../html/json/list02.json')

var jsonfile = []
json.Episodes.forEach(e => {
   jsonfile += e
})
console.log(jsonfile)
var terms = ':sip2:'

fs.writeFile('../html/json/example.json', jsonfile, function(err, data){

    console.log('json updated');
    
    });