function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
const now = new Date(); // cria um objeto Date com a hora atual

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
};
const formattedTime = now.toLocaleTimeString('en-US', options); // formata a hora atual com as opções desejadas
const parts = formattedTime.split(':'); // divide a string formatada em partes separadas por ':'
const hourPart = parts[0]; // obtém a parte da hora
const minutePart = parts[1]; // obtém a parte dos minutos
const secondPart = parts[2]; // obtém a parte dos segundos
const secondPartSemPm = secondPart.replace(/ PM/g, "")

const finalFormattedTime = `${hourPart} PM : ${minutePart}m : ${secondPartSemPm}s`; // cria a string final formatada com os prefixos desejados

window.alert(finalFormattedTime)
console.log(finalFormattedTime); 
}