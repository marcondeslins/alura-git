// JavaScript source code

//function verificaNumero(numero) {
//    if (numero > 10) {
//        return 'numero maior que 10';
//    } else {
//        return 'numero menor que 10';
//    }
//}

//console.log(verificaNumero(9)) //n�mero n�o � maior que 10

const num = 15;

if (num >= 0 && num <= 10) {
    console.log('n�mero entre zero e dez');
} else if (num > 10 && num <= 20) {
    console.log('n�mero entre dez e vinte');
} else if (num > 20 && num <= 30) {
    console.log('n�mero entre vinte e trinta');
} else {
    console.log('outro n�mero');
}
