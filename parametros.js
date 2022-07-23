// JavaScript source code

//function soma(numero1, numero2) {
//    return numero1 + numero2;
//}

//console.log(soma(2, 2));
//console.log(soma(33, 5));
//console.log(soma(55, 20));
//console.log(soma(220, -30));


//parametros de função
//function soma(numero1, numero2) {
//    return numero1 + numero2;
//}

//console.log(soma(2, 6));
//console.log(soma(2, 9));
//console.log(soma(2, 10));
//console.log(soma(-2, 30));

// parametros e argumentos

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Marcondes"));

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2=1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(2, 5)));
