let operacao = prompt("Digite uma operaçã, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")



if (operacao >= 1 && operacao <= 4) {

    let num1 = Number(prompt("Digite o primeiro valor da operação"))
    let num2 = Number(prompt("Digite o segundo valor da operação"))

    /*
        if (operacao == 1) {
            alert(`resultado: ${num1 + num2} `)
        } else {

            if (operacao == 2) {
                alert(`resultado: ${num1 - num2}`)
            } else {

                if (operacao == 3) {
                    alert(`resultado: ${num1 * num2}`)
                } else {

                    if (operacao == 4) {
                        alert(`resultado: ${num1 / num2}`)
                    }
                }
            }
        } 
    */
    switch (operacao) {
        case '1':
            alert(`resultado: ${num1 + num2} `)
            break;
        case '2':
            alert(`resultado: ${num1 - num2} `)
            break;
        case '3':
            alert(`resultado: ${num1 * num2} `)
            break;
        case '4':
            alert(`resultado: ${num1 / num2} `)
            break;
        default:
            alert(`ERRO (DIGITE UMA VALOR MENOR QUE 4)`)
            break;

    }
}


/*} else {
    alert(`ERRO (DIGITE UMA VALOR MENOR QUE 4)`)
}*/