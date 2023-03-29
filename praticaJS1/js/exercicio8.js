function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    const nonoDigito = parseInt(cpfInformado.charAt(8));
  switch (nonoDigito) {
    case 0:
      return "ES e RJ";
    case 1:
      return "SP";
    case 2:
      return "PR e SC";
    case 3:
      return "RS";
    case 4:
      return "DF, GO, MT, MS e TO";
    case 5:
      return "AC, AP, AM, PA, RO e RR";
    case 6:
      return "CE, MA e PI";
    case 7:
      return "AL, PB, PE e RN";
    case 8:
      return "BA e SE";
    case 9:
      return "MG";
    default:
      return "CPF inválido";
  }
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
