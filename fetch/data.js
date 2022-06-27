var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;
var os = require('os')
var fs = require('fs')


 
// Without middleware
app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            console.log(os.release.call())
            console.log(os.homedir.call())
            console.log(os.arch.call())
            console.log(os.platform.call())
            console.log(os.networkInterfaces.call())
            console.log(os.version.call())
            console.log(os.loadavg.call())
            console.log(os.type.call())
            
            const content = [os.release.call(), os.homedir.call(), os.arch.call(), os.platform.call(), os.networkInterfaces.call(), os.version.call(), os.loadavg.call(), os.type.call()]

            fs.appendFile('log.txt', `${os.release.call() + "\n" + os.homedir.call() + "\n" + os.arch.call() + "\n" + os.platform.call() + "\n" + os.networkInterfaces.call() + "\n" + os.version.call() + "\n" + os.loadavg.call() + "\n" + os.type.call()}`, err => {
              if (err) {
                console.error(err);
              }
              // done!
            });
            
            
        }
    });
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});