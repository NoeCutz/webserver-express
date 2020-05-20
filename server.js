const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function (req, res) {

  //res.send('Hola mundo');

  /*let salida = {
    nombre : 'Noe',
    edad : 23,
    url : req.url
  };

  res.send(JSON.stringify(salida));*/

  res.render('home',{
    nombre : 'Noe'
  });

})


app.get('/about', function (req, res) {

  res.render('about');

})

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
})
