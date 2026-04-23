
// 1. VAr Glob
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;


function getComputerChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieScore++;
        return `Empate! Ambos escolheram ${playerSelection}.`;
    }
    if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) {
        humanScore++;
        return `Você Venceu! ${playerSelection} ganha de ${computerSelection}.`;
    } else {
        computerScore++;
        return `Você Perdeu! ${computerSelection} ganha de ${playerSelection}.`;
    }
}


const painelMSM = document.querySelector("#status-jogo");
const displayJogador = document.querySelector("#pontos-jogador");
const displayComputador = document.querySelector("#pontos-computador");

function jogar(escolhaDoUsuario) {
    if (round >= 5) return; 

    const escolhaPC = getComputerChoice();
    const resultadoTexto = playRound(escolhaDoUsuario, escolhaPC);
    round++;


    displayJogador.textContent = humanScore;
    displayComputador.textContent = computerScore;
    

    painelMSM.textContent = `Rodada ${round}: ${resultadoTexto}`;

    if (round === 5) {

        setTimeout(() => {
            let veredito = "";
            if (humanScore > computerScore) veredito = "🏆 VITÓRIA DO JOGADOR!";
            else if (computerScore > humanScore) veredito = "🚩 VITÓRIA DO COMPUTADOR!";
            else veredito = "🤝 EMPATE!";

            painelMSM.textContent = `${veredito} Final: ${humanScore}-${computerScore} (${tieScore} empates)`;
            painelMSM.style.color = "green";
        }, 1200); 
	}
}

// Ouvintes de Evento
document.querySelector("#pedra").addEventListener("click", () => jogar("pedra"));
document.querySelector("#papel").addEventListener("click", () => jogar("papel"));
document.querySelector("#tesoura").addEventListener("click", () => jogar("tesoura"));