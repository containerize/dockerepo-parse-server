var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb://@mongo:27017/' + process.env.MONGO_DB_NAME, // Connection string for your MongoDB database
    cloud: '/parse/cloud/main.js', // Absolute path to your Cloud Code
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY, // Keep this key secret!
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function () {
    console.log('parse-server running on port 1337.');
});
