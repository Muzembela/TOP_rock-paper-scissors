
console.log("Hello World")
let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
	const choices = ["pedra", "papel", "tesoura"]
	const compchoice = choices[Math.floor(Math.random()*choices.length)]
	return compchoice
}	

function getHumanChoice() {
    let hmchoice = prompt("Escolha Uma Opção (Pedra, Papel ou Tesoura):");
    
    hmchoice = hmchoice.toLowerCase();

    if (hmchoice === "pedra" || hmchoice === "papel" || hmchoice === "tesoura") {
        return hmchoice;
    } else {
        console.log("Opção inválida! Tente novamente.");
        return getHumanChoice();
    }
}


console.log(getComputerChoice())
console.log(getHumanChoice())