

console.log(
    "%cJogo desenvolvido por [Seu Nome] - 2026", 
    "color: #2ecc71; font-weight: bold; font-size: 12px;"
);
// Muze_Vars
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

function playgame(escolhaDoUsuario) {

    if (humanScore === 5 || computerScore === 5) {
        return; 
    }

    const escolhaPC = getComputerChoice();
    const resultadoTexto = playRound(escolhaDoUsuario, escolhaPC);
    round++;


    displayJogador.textContent = humanScore;
    displayComputador.textContent = computerScore;
    painelMSM.textContent = `Rodada ${round}: ${resultadoTexto}`;

    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            let veredito = "";
            if (humanScore > computerScore) {
                veredito = "🏆 VITÓRIA DO JOGADOR! 👨🏽";
                painelMSM.style.color = "green";
            } else {
                veredito = "💻 VITÓRIA DO COMPUTADOR!";
                painelMSM.style.color = "red";
            }
            painelMSM.textContent = `${veredito} Final: ${humanScore}-${computerScore} (${tieScore} empates)`;
        }, 1000); 
    }
}
// Muze_Ouvintes de Evento
document.querySelector("#pedra").addEventListener("click", () => playgame("pedra"));
document.querySelector("#papel").addEventListener("click", () => playgame("papel"));
document.querySelector("#tesoura").addEventListener("click", () => playgame("tesoura"));