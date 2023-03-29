function haOnzeDigitos(cpf) {
    if (cpf.length !== 11) {
        return false;
    }
    return true;
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    if (!/^\d{11}$/.test(cpf)) {
        return false;
      }
      return true;
}

function osOnzeNumerosSaoDiferentes(cpf) {
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
      }
      return true;
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }
    return true;
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}