var express = require('express');
var app = express();
var cors = require('cors');
var routes = require('./backend/route/Route');

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use("", routes);

let server;
if(require.main === module) {
    server = app.listen(9000, () => {
        console.log(Date().toString()," Server is running on port 9000");
    });
}

module.exports = {app, server};