var express = require('express');
var fs = require('fs');
var app = express();
var mongoose = require('mongoose');
var Stud = require('./studentSchema');

module.exports = function (app) {

    app.get('/', function(req, res){
        res.json('connected to mongoDB');
    })

    app.get('/getAll', function(req, res) { // if url in path is getAll
         Stud.find({}, function(err, students){//return all JASON
            if(err) throw err;
            res.json(students);
         });
    })

     app.get('/getStudentById/:id', function(req, res) { //else if url path is getStudGrade with id param
         var temp = parseInt(req.params.id); //convert to Number
         Stud.find({idStudent:temp}, function(err, students){ //get student data bt ID
            if(err) throw err;
            res.json(students);
         });
     })

    app.get('/getBestByYear/:year', function(req, res) { //else if url path is getExcellenceByYear with year param
    var temp = parseInt(req.params.year); //convert to Number
        Stud.find({}).where('year').in(temp).where('grade').gt(89).exec(function(err,students){ //get data of student that got 90 and over of a specific year
            if (err) throw err;
            res.json(students);
        });
     })
};

