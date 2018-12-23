const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', { nombre: 'Jorge', anio: new Date().getFullYear() });
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(3000, () => {
    console.log('Escuchando el puerto :', 3000);
})