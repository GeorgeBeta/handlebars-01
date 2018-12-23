const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Jorge',
//         Edad: 60,
//         url: req.url
//     }
//     res.send(salida);
// })

app.listen(3000, () => {
    console.log('Escuchando el puerto :', 3000);
})