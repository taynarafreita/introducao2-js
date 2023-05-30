// Operações Matemáticas

// Soma de dois números

/*
alert("Iremos somar 2 números.")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
let result= (Number(numberOne) + Number(numberTwo)) / 2
alert("Resultado Final: " + result)
*/

// Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão. Para cada operação, mostrar um alerta com o resultado.

/*
alert("Iremos capturar 2 números.")
let firstNumber = prompt("Digite o primeiro número:" )
let secondNumber = prompt("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto divisão: " + restDiv)
*/

// Calculando a média de um estudante


let student = prompt('Qual o nome do(a) aluno(a? ')
let nota1 = prompt("Qual a nota da primeira prova? ")
let nota2 = prompt("Qual a nota da segunda prova? ")
let nota3 = prompt("Qual a nota da terceira prova? ")

let average = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

let result = average > 6
average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average + ".")
} else if (average < 3){
    alert("Reprovado(a).")
} else {
    alert(student + ", estude para sua prova de recuperação! Sua média foi de: " + average + ".")
}