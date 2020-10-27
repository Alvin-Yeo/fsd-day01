// Load required libraries from node_modules directory
const express = require('express');

// configure the environment
// from cli, environment variable, default port no.
// console.info('>>> ', process.argv)
const PORT = parseInt(process.argv[2]) || 3000;

// Create an instance of the express application
const app = express();

// configure express
// server HTMLs from the public directory
app.use(
    express.static(__dirname + '/public')       // __dirname - the directory where main.js located
);

// start express
app.listen(
    PORT, 
    () => {     // callback, execute after express has started
        console.info(`Application started on port ${PORT} at ${new Date()}`);
    }
);