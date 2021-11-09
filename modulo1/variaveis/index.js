// Exercícios de Interpretação
// 1.0 - Primeiramente as variaveis 
// a e b recebem o numero 10, após isso
// o console mostra 10, após isso por usar let
// é possível trocar 10 no caso por 5, b = 5, assim
// ao final é mostrado console.log(a,b), no console
// aparecerá 10 e 5.

//2.0 será impresso 10, 10, 10

//3.0 variavel p horasPorDia
// variavel t recebidoPorDia
// o programa no caso quer saber
// quantas horas você trabalha por dia
// quanto você recebepor dia depois ele divide
// o quanto você recebe por dia por quantas horas você trabalha por dia.

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//1.0

let nome = prompt("Qual o seu nome ?")
let idade = prompt("Qual a sua idade ?")

console.log(typeof nome,typeof idade)

//String, String
//Porque ele entende como string uma vez que 
// não foi atribuido uma constante com valor fixo,
// e sim uma variável que altera com a resposta, mas
// pode ser transformada para number.

// usei as variaveis como const deu um erro
// lembrei de usar o camando let pois elas
// sempre irão mudar.

console.log("Olá ",nome,"você tem", idade," anos." )



// 2.0

let souCasado = true
let souFormado = true
let souItaliano = false

console.log("1- Você é Casado ?",souCasado, 
"2 - Você é Formado?", souFormado, 
"3 - Você é Italiano?", souItaliano)

//3.0
let a = 10
let b = 25

// Aqui sera feita a lógica
let c = a

a = b
b = c
//Foram Trocados
console.log("O novo valor de a é", a)

console.log("O novo valor de b é", b)