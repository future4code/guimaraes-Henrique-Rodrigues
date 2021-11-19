// Exercício de Interpretação
//1- 
//a - 10 e 50, pois a função está multiplicando por 5 os valores dentro de variavel.
//b - nada pois não tem nenhum valor atribuido a variavel.

//2- 
//a - Essa função passa todo o text para miusculo e inclui a palavra cenoura ao final
//b- todas true. Pois contém a palavra cenoura na frase, caso não tivessem retornariam false.


//Exercício de escrita de código.

// 1 
//a
function imprimeMensagem() {
    const mensagem = "Eu sou Henrique, tenho 28 anos, moro em Aguanil e sou Engenheiro Ambiental."
return mensagem
    
    
}
console.log(imprimeMensagem())
//b

function parametros(){
    let nome = "Henrique"
    let idade = Number(28)
    let cidade = "Aguanil"
    let profissao = "Engenheiro"
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}.`
    return frase
}

console.log(parametros())

//2
//a
function soma2 (n1, n2) {
    let soma = n1 + n2 
    return soma
}
console.log(  soma2(3,4)   )

//b
function maiorigual (n1, n2) {
    return n1 >= n2 
}
console.log(  maiorigual(3,4)   )

//c
const numPar = (numero) => {
    return numero %2 == 0
}
console.log(numPar(48))

//d
function mensagem () {
    let texto = "Olá, mundo"
    let maiusculo = texto.toUpperCase()
    let tamanho = texto.length
    const resultado = maiusculo + tamanho
    return resultado
}
console.log (mensagem())

//3

let n1 = Number(prompt("Digite um valor"))
let n2 = Number(prompt("Digite um outro valor"))

console.log(`Números inseridos: ${n1} e ${n2}`)

function soma (n1, n2) {
    let soma = n1 + n2 
    return soma
}
console.log("Soma: ",soma(n1,n2))

function subtracao (n1, n2) {
    let subtracao = n1 - n2 
    return subtracao
}

console.log("Diferença: ",subtracao(n1,n2))


function mult (n1, n2) {
    let multi = n1 * n2 
    return multi
}
console.log("Multiplicação: ",mult(n1,n2))


function divisao (n1, n2) {
    let div = n1 / n2 
    return div
}
console.log("Divisão: ",divisao(n1,n2))


