const { exec } = require('child_process')

// run the `ls` command using exec
exec('npm i path && npm i express && npm i path && node start.js', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})