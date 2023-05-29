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
    if (validaEntrada()) {
        const idade = calculaIdade();
        exibeIdade(idade);
    }
})

function capturaValor() {
    diaEntrada = diaInput.value;
    mesEntrada = mesInput.value;
    anoEntrada = anoInput.value;
}

function validaEntrada() {
    const inputs = document.querySelectorAll("input");
    let validator = true;

    inputs.forEach(i => {
        const parent = i.parentElement;

        if (!i.value) {
            i.classList.add("border-primary-red", "ring-1", "ring-primary-red");
            parent.querySelector("small").innerText = "Esse campo é obrigatório";
            validator = false;
        } else if (mesInput.value > 12 || mesInput.value < 1) {
            mesInput.classList.add("border-primary-red", "ring-1", "ring-primary-red");
            mesInput.parentElement.querySelector("small").innerText = "Precisa ser um mês válido";
            validator = false;
        } else if (diaInput.value > 31 || diaInput.value > meses[mesEntrada - 1] || diaInput.value < 1) {
            diaInput.classList.add("border-primary-red", "ring-1", "ring-primary-red");
            diaInput.parentElement.querySelector("small").innerText = "Precisa ser um dia válido";
            validator = false;
        } else {
            i.classList.remove("border-primary-red", "ring-1", "ring-primary-red");
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })

    return validator;
}

function calculaIdade() {
    verificaAnobissexto(anoAtual);

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

function verificaAnobissexto(ano) {
    if (ano % 4 == 0 || (ano % 100 == 0 && ano % 400 == 0)) {
        meses[1] = 29
    } else {
        meses[1] = 28
    }
}
