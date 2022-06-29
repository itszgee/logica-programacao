let repetir = 5
let soma = (num1, num2) => num1 + num2;
let subtração = (num1, num2) => num1 - num2;
let divisão = (num1, num2) => num1 / num2;
let multiplicação = (num1, num2) => num1 * num2;

let operacao = prompt("Digite uma operaçã, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")
let num1 = Number(prompt("Digite o primeiro valor da operação"))
let num2 = Number(prompt("Digite o segundo valor da operação"))

while (operacao) {

    switch (operacao) {
        case '1':
            alert(`o resultado da operação é: ${soma (num1, num2)}`)
            break;
        case '2':
            alert(`o resultado da operação é: ${subtração (num1, num2)}`)
            break;
        case '3':
            alert(`o resultado da operação é: ${divisão (num1, num2)}`)
            break;
        case '4':
            alert(`o resultado da operação é: ${multiplicação (num1, num2)}`)
            break;
        default:
            alert("Digite um valor entre 1 e 4")
            break;
    }
}