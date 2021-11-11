// Exercício de Interpretação

//1. 
// a. false
// b. false
// c. true
// d. boolean

//2.
// Sim consegui perceber o problema. Por Exemplo:
// se eu colocar 2 em cada solicitação ao inves de mostrar 4
// ele vai mostrar 22 pois vai entender que é string e não número
// por isso devo colocar Number antes do prompt, ai corrijo o erro.


//3. 
// Colocar Number antes do prompt
// por exemplo Number (prompt(...))


// Exercício de escrita de código


//1.

let idadeDoUsuario = Number (prompt(" Qual a sua idade ?"))

let idadeMelhorAmigo = Number (prompt(" Qual a idade do seu melhor amigo ?"))
20
console.log("Sua idade é maior que a doseu amigo?", idadeDoUsuario > idadeMelhorAmigo,"A diferença de idade é:", idadeDoUsuario - idadeMelhorAmigo)




//2.
let numeroPar = Number(prompt("Por favor escolha um número par: "))

console.log("O resto da divisão do valor inserido, por 2 é: ", numeroPar % 2)

// Testei com diversos números pares e o resto é zero sempre, está correto.

//Quando é inserido um numero ímpar, ele retorna 1 como resto.


//3.

let idadeEmAnos = Number (prompt("Por favor insira sua idade em anos: "))

idadeEmMeses = idadeEmAnos * 12
idadeEmDias = idadeEmAnos * 365
idadeEmHoras = idadeEmAnos * 8760

console.log("Idade do usuário em Meses é: ",idadeEmMeses)
console.log("Idade do usuário em dias é: ",idadeEmDias)
console.log("Idade do usuário em horas: ",idadeEmHoras)



//4.

let numero1 = Number(prompt("Insira qualquer número por favor: "))
let numero2 = Number(prompt("Insira um segundo número por favor: "))

div1 = numero1 % numero2
div2 = numero2 % numero1
console.log("O primeiro numero é maior que o segundo?",numero1 > numero2 )
console.log("O primeiro numero é igual ao segundo ?", numero1 === numero2)
console.log("O primeiro número é divisivel pelo Segundo ?",div1 === 0 )
console.log("O primeiro número é divisivel pelo Segundo ?",div2 === 0 )
