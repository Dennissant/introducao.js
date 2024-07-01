var peso = parseFloat (prompt("Qual é o seu peso?"));
var altura = parseFloat (prompt("Qual é a sua altura?"));
var imc = peso / (altura * altura);

alert("Seu IMC é: "+ imc.toFixed(2))