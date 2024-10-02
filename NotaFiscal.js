var notaFiscal = [];
var somaValores = 0;

for(var i = 0; i < 5; i++){
    var notas = {}
    notas.numero = parseInt(prompt("Digite a Nota Fisca"));
    notas.valor = parseFloat(prompt("Digite o valor da Nota fiscal"));
    notaFiscal.push(notas)

    console.log("----------------------------------------");
    console.log("Número da Nota fiscal: ", notas.numero);
    console.log("Valor na nota fiscal: R$", notas.valor);
    console,log("----------------------------------------");
    somaValores += notas.valor;
}

var mediaNotas = somaValores/5;

var maiorNota = notaFiscal[0].valor;
var notaMaiorNumero = notaFiscal[0].numero;

for(var j = 0; j < 5; j++){
    if(maiorNota < notaFiscal[j].valor){
        maiorNota = notaFiscal [j].valor;
        notaMaiorNumero = notaFiscal[j].numero;
    }
}

var menorNota = notaFiscal[0].valor;
var notaMenorNumero = notaFiscal[0].numero;

for(var k = 0; k<5; k++){
    if(menorNota > notaFiscal[k].valor){
        menorNota = notaFiscal[k].valor;
        notaMenorNumero = notaFiscal[k].numero;
    }
}

console.log(`A soma dos valores das notas fiscais é de R$${somaValores}`);
console.log("A média total dos valores é de R$", mediaNotas);
console.log(`A menor nota fiscal é ${notaMenorNumero}, custando R$${menorNota}`);
console.log(`A maior nota fiscal é ${notaMaiorNumero}, custando R$${maiorNota}`);