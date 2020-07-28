const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000
//xử lý file tĩnh đi
app.use(express.static(path.join(__dirname, 'public')));
// thư viện morgan
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('home');
});
app.get('/admin', function(req, res) {
  res.render('admin');
});

app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`));
