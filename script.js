const form = document.querySelector("#form");
const inputDia = document.querySelector("#dia");
const inputMes = document.querySelector("#mes");
const inputAno = document.querySelector("#ano");

const dataAtual = new Date();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dia = Number(inputDia.value);
    const mes = Number(inputMes.value);
    const ano = Number(inputAno.value);
})
