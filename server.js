const express = require('express');
const app = express();

const hbs = require('hbs'); 
require('./hbs/helpers')

const port = process.env.PORT || 3000; 

app.use(express.static( __dirname + '/public' ))

// express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'francisco',
    })
});
app.get('/about', function (req, res) {

    res.render('about')
});
app.listen(3000, () => {
    console.log(`Escuchando en puerto ${port}` )
})