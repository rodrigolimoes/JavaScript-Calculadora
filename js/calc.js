const MAX_NUMBER_VISOR = 10
const MAX_OPERACAO_HISTORICO = 30
let conta = []


function addNumero(num) {
    document.querySelector('.atual').removeAttribute("hidden")
    if (document.querySelector('.atual').innerHTML.length < MAX_NUMBER_VISOR) {
        document.querySelector('.atual').innerHTML += num
    }
}
function addOperacao(operacao) {
    if (conta[0] === undefined) {
        conta.push(Number(document.querySelector('.atual').innerHTML))
        conta[1] = operacao
    } else {
        conta[1] = operacao
    }
    console.log(conta)
    document.querySelector('.historico').removeAttribute("hidden")
    if (document.querySelector('.historico').innerHTML.length < MAX_OPERACAO_HISTORICO) {
        document.querySelector('.historico').innerHTML = `${conta[0] || 0} ${operacao}`
        document.querySelector('.atual').innerHTML = " "
        console.log(conta)
    }
}
function calculate(num, operacao) {
    if (conta[1] === undefined) {
        window.alert('Selecione uma Operação matemática(+, -, *, /)')
    } else {
        conta.push(Number(document.querySelector('.atual').innerHTML))
        num2 = conta[2]
        let historico = String(document.querySelector('.historico').innerHTML)
        console.log(conta)
        switch (operacao) {
            case '+':
                res = num + num2
                break;
            case '-':
                res = num - num2
                break;
            case '*':
                res = num * num2
                break;
            case '/':
                res = num / num2
                break;
        }
        console.log(res)
        conta.splice(0, 3, res)
        console.log('Array atualizado: ', conta)
        document.querySelector('.historico').innerHTML = `${historico} ${num2} = ${res}`
        return document.querySelector('.atual').innerHTML = " "
    }
}
function clearelementos(clear) {
    switch (clear) {
        case 'c':
            document.querySelector('.atual').innerHTML = " "
            document.querySelector('.historico').innerHTML = " "
            conta.splice(0, 3)
            console.log(conta)
            break;
        case 'ce':
            document.querySelector('.atual').innerHTML = " "
            break;
    }
    return
}