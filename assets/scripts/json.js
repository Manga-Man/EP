const fs = require('fs')
const json = require('../html/json/list02.json')

var jsonfile = json.Episodes
var content = '['
function process() {
   jsonfile.forEach(e => {
       content =+ `'`
       content =+ `${e}`
       content =+ `', `
})

content =+ `]`
}
process()


console.log(jsonfile)

fs.writeFile('../html/json/example.json', content, function(err, data){

    console.log('json updated');
    
    });