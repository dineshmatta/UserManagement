var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bbUsers');

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8989;

var userRoutes = require('./routes/users');

app.use('/api', userRoutes);

app.listen(port);
console.log("API running on port ", port);