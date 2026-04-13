function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  let imc = peso / (altura * altura);

  document.getElementById("resultado").innerText =
    "Seu IMC é: " + imc.toFixed(2);
}