const form = document.querySelector("#form");

let diaInput = document.getElementById("dia");
let mesInput = document.getElementById("mes");
let anoInput = document.getElementById("ano");

const dataAtual = new Date();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    capturaValor();
    const idade = calculaIdade();
    exibeIdade(idade);
})

function capturaValor() {
    diaEntrada = diaInput.value;
    mesEntrada = mesInput.value;
    anoEntrada = anoInput.value;
}

function calculaIdade() {
    if (diaEntrada > diaAtual) {
        diaAtual = diaAtual + meses[mesAtual - 1];
        mesAtual = mesAtual - 1;
    }

    if (mesEntrada > mesAtual) {
        mesAtual = mesAtual + 12;
        anoAtual = anoAtual - 1;
    }

    const resultado = {
        dias: diaAtual - diaEntrada,
        meses: mesAtual - mesEntrada,
        anos: anoAtual - anoEntrada
    }

    return resultado;
}

function exibeIdade(idade) {
    const diaH1 = document.getElementById("dia-h1");
    const mesH1 = document.getElementById("mes-h1");
    const anoH1 = document.getElementById("ano-h1");

    diaH1.innerText = idade.dias;
    mesH1.innerText = idade.meses;
    anoH1.innerText = idade.anos;
}
