// JavaScript source code
//function cumprimentar() {
//    console.log('oi gente!')
//}

//cumprimentar()

//function cumprimentaPessoa(pessoa) {
//    console.log(`oi, ${pessoa}!`)
//}

//cumprimentaPessoa('Helena')

///
function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome � ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // �Oi gente! Meu nome � Paula�

function operacaoMatematica(numero1, numero2, numero3) {

    return numero1 + numero2 + numero3;

}
console.log(operacaoMatematica(15, 30, 40))