const colecao_fatos = require('./colecao_fatos_historicos');

function validarAno (ano) {
    let valido = ((ano >= 1920) && (ano <= 2020)) ? true : false;
    return valido;
}

function retornarFato (ano) {
    let fatoFiltrado;
    for (let fato of colecao_fatos.fatosHistoricos){
        if (fato.ano == ano){
            fatoFiltrado = fato.fato;
            return fatoFiltrado;
        }
    }
}

exports.validarAno = validarAno;
exports.retornarFato = retornarFato;