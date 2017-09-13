var express = require('express');
var app = express();
var path = require('path');

var cors = require('cors')

app.use(cors());

app.use('/', express.static(path.join(__dirname)));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9999);