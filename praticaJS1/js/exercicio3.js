function removerPrimeiroEUltimoCaractere() {
    const entrada = prompt("Digite uma string:");
    const saida = entrada.substring(1, entrada.length - 1);
    alert(saida);
  }
