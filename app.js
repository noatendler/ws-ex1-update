var express = require('express');
var app = express();
var stud = require('./grades');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds041404.mlab.com:41404/stusentinfo');

var port = process.env.PORT || 3000;

//open connection to mongoDB
mongoose.connection.once('open', function(){
    stud(app);
});

app.listen(port);



