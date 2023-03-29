function inverterString() {
    const entrada = prompt("Digite uma string:");
    const invertida = entrada.split("").reverse().join("");
    console.log(invertida);
  }