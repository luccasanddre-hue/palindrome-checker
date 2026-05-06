function verificar() {
  let palavra = document.getElementById("palavra").value;
  let resultado = document.getElementById("resultado");

  if (palavra.trim() === "") {
    resultado.innerText = "Digite uma palavra.";
    return;
  }

  let normalizada = palavra.toLowerCase().replace(/\s+/g, "");

  let invertida = "";

  for (let i = normalizada.length - 1; i >= 0; i--) {
    invertida += normalizada[i];
  }

  if (normalizada === invertida) {
    resultado.innerHTML = `"${palavra}" é um palíndromo!`;
  } else {
    resultado.innerHTML =
      `"${palavra}" não é um palíndromo.<br>` +
      `Invertida: ${invertida}`;
  }
}

function limpar() {
  document.getElementById("palavra").value = "";
  document.getElementById("resultado").innerText = "";
}