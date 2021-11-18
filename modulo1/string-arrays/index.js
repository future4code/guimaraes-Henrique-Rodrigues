//Exercicio de Interpretação

// Exercicio 1
//a. indefinido - não tem valor
//b. null
//c. 11
//d. 3
//e. retorna 0 19 na posição 1
//f. retorna o sexto valor que é 9

//Exercicio 2
// SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercicio de escrita de codigos

//Exercicio 1

const nomeUsuario = prompt("Digite seu nome: ")
const email = prompt ("Digite seu e-mail: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

//Exercicio 2

const meuArray = ['macarronada','tropeiro','paella','feijoada','xbacon']

console.log(meuArray)

meuArray.forEach(function(comida){

console.log(`Essas são as minhas comidas preferidas: ${comida}`)
})


//Exercicio3


const tarefa1 = prompt('Qual a sua primeira tarefa do dia ?')

const tarefa2 = prompt('Qual a sua segunda tarefa do dia ?')

const tarefa3 = prompt('Qual a sua terceira tarefa do dia ?')

const listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

const ind = prompt('Digite o indice de uma tarefa ja realizada, 0,1 ou 2')

listaDeTarefas.splice(ind,1)

console.log(listaDeTarefas)


