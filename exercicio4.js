let numero = prompt("Digite um número para saber se é par ou impar")

/*
if (numero % 2 == 0) {
    alert(`par`)
}else{
    alert(`impar`)
}
*/

alert(`O numero ${numero} é ${ ((numero % 2) == 0) ? 'par' : 'impar' }`)