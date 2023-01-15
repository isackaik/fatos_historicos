const express = require('express');
const app = express();

let fatosHistoricos;

app.get('/', (req, res) => {
    let ano = req.query.ano;


});

app.listen(8080, ()=> {
    console.log('Aplicação iniciada');
})