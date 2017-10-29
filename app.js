var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
app.use(express.static(__dirname + '/'));

app.set('views', 'view');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('home', { title: 'Stichery'});
});

app.get('/service', function (req, res) {
    res.render('service', { title: 'Our Service'});
});

app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Our Contact'});
});


http.listen(3000, function () {
    console.log('Listen on 3000');
});





