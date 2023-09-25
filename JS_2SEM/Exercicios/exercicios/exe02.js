let BotaoAumenta = document.querySelector('#botaoaumenta')
let BotaoDiminui = document.querySelector('#botaodiminui')
let BotaoZera = document.querySelector('#botaozera')
let Contador = document.querySelector('#Contador')
let Alerta = document.querySelector('#Alerta')

var Cont = 0

function botaoaumenta() {
    Cont++

    Contador.textContent = Cont
    Alerta.innerHTML = ""

}
function botaodiminui() {
    if (Cont <= 0) {
        Alerta.innerHTML = `
        <div class ="alert alert-success fade show" role="alert">
        <span> Olá, bem vindo ao Sesi</span>
        <button type = "button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        `

    } else {
        Cont--
    }
    Contador.textContent = Cont

}
function botaozera() {
    Cont = 0

    Contador.textContent = Cont
    Alerta.innerHTML = ""

}

BotaoAumenta.addEventListener('click',botaoaumenta)
BotaoDiminui.addEventListener('click',botaodiminui)
BotaoZera.addEventListener('click',botaozera)
