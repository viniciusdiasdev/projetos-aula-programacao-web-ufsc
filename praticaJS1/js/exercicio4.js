function verificaIntervalo() {
    const numero1 = parseInt(prompt("Digite o primeiro número:"));
    const numero2 = parseInt(prompt("Digite o segundo número:"));
    
    if ((numero1 >= 30 && numero1 <= 50) || (numero2 >= 30 && numero2 <= 50)) {
      console.log(numero1 + " está no intervalo [30,50]");
      console.log(numero2 + " está no intervalo [30,50]");

    }
    else if ((numero1 >= 60 && numero1 <= 100) || (numero2 >= 60 && numero2 <= 100)) {
        console.log(numero1 + " está no intervalo [60,100]");
        console.log(numero2 + " está no intervalo [60,100]");
    }
    else {
      console.log("O número "+ numero1 + " informado não está em nenhum dos dois intervalos.");
      console.log("O número "+ numero2 + " informado não está em nenhum dos dois intervalos.");
    }
  }
