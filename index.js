const express = require('express');
const app = express();

let fatosHistoricos;

app.get('/', (req, res) => {
    let ano = req.query.ano;

    if (ano >= 1920 && ano <= 2020){
        res.json({mensagem: "API em funcionamento."});
    }
    else{
        res.status(400).json({mensagem: "Ano inválido."});
    }
});

app.listen(8080, ()=> {
    console.log('Aplicação iniciada');
})