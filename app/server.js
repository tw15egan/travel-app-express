const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', 'app/views');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
