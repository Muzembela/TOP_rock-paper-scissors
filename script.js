
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


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log(`Empate! Ambos escolheram ${playerSelection}.`);
        return;
    }

    if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) {
        humanScore++;
        console.log(`Você Venceu! ${playerSelection} ganha de ${computerSelection}.`);
    } else {
        computerScore++;
        console.log(`Você Perdeu! ${computerSelection} ganha de ${playerSelection}.`);
    }
}

function playGame()
{
	
	let round = 0;
	while (round < 5)
	{
		const human = getHumanChoice();
		const comp = getComputerChoice();
		playRound(human, comp)
		round++;
	}
}
function vencedor()
{
	if (humanScore == computerScore)
	{
		console.log("Player->", humanScore, "Computer->", computerScore)
		console.log("Estao Empatados!")
		return ;
	}
	else if (humanScore > computerScore)
	{
		console.log("Player->", humanScore, "Computer->", computerScore)
		console.log("Voce Venceu. Parabens!")
		return ;
	}
	else
	{
		console.log("Player->", humanScore, "Computer->", computerScore)
		console.log("Voce Perdeu")
		return;
	}
}

// Execucao
const human = getHumanChoice();
const comp = getComputerChoice();

console.log("Sua escolha:", human);
console.log("Escolha do PC:", comp);
playGame()
console.log("--- PLACAR FINAL ---");
console.log("Eu ->", humanScore);
console.log("Comp ->", computerScore);
vencedor()