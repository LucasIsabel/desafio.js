//dado o array de dictionary abaixo some o total dos valores
let dictionary = [{ '5': 50, '6': 60 }, { 'A': 10 }, { 'YEEZY': 30 }];

function somaValues(dictionary){
    var soma = 0;
    dictionary.forEach( (v) => {
        for(var key in v){
             soma += parseInt(v[key]);
        }
    });
    return soma;
}
