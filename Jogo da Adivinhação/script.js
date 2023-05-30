let result = prompt("Adivinhe o número que eu estou pensando? Está entre 0 e 10."
)
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente: ")
    xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas.`)