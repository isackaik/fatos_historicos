const express = require('express');
const app = express();

const filtrarFatos = require('./filtrarFatos');

app.get('/', (req, res) => {
    let ano = req.query.ano;

    if (filtrarFatos.validarAno(ano)){
        let fatoFiltrado = filtrarFatos.retornarFato(ano);
        res.json({mensagem: fatoFiltrado});
    }
    else{
        res.status(400).json({mensagem: "Ano inválido."});
    }
});

app.listen(8080, ()=> {
    console.log('Aplicação iniciada');
})