let n1 = 5;
let n2 = 8;

console.log(n1+n2); //soma
console.log(n1-n2); //subtração
console.log(n1*n2); //multiplicação
console.log(n1/n2); //divisão
console.log(n1**n2); //exponenciação
console.log(Math.sqrt(n1)) //raiz quadrada
console.warn("Olá funções")

function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(4, 19))
console.log(soma(12, 19))

const divisao = (v1, v2) => {
    let msg = ""
    if (v1 > v2) {
        let resultado = v1 / v2
        msg = resultado
        return msg
    }
    msg = "Insira um valor para v2 menor"
    return msg
    
}

console.log(divisao(10, 2))
console.log(divisao(2, 20))

const divisaoII = (v1, v2) => {
    if (v1 > v2) {
        let resultado = v1 / v2
        return resultado
    }
    return "Insira um valor para v2 menor"
}

console.log(divisaoII(50, 13))
console.log(divisaoII(13, 40))