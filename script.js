
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

function playgame(escolhaDoUsuario) {
    // 1. A TRAVA: Impede que o jogo continue se alguém já venceu
    if (humanScore === 5 || computerScore === 5) {
        return; 
    }

    const escolhaPC = getComputerChoice();
    const resultadoTexto = playRound(escolhaDoUsuario, escolhaPC);
    round++;

    // 2. ATUALIZAÇÃO DO PLACAR (Estilo Futebol - Instantâneo)
    displayJogador.textContent = humanScore;
    displayComputador.textContent = computerScore;
    painelMSM.textContent = `Rodada ${round}: ${resultadoTexto}`;

    // 3. CHECAGEM DE VITÓRIA (Quem chegou a 5 primeiro?)
    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            let veredito = "";
            if (humanScore > computerScore) {
                veredito = "🏆 VITÓRIA DO JOGADOR!";
                painelMSM.style.color = "green";
            } else {
                veredito = "🚩 VITÓRIA DO COMPUTADOR!";
                painelMSM.style.color = "red";
            }

            // Exibe o placar final cravado em 5
            painelMSM.textContent = `${veredito} Final: ${humanScore}-${computerScore} (${tieScore} empates)`;
        }, 1000); 
    }
}
// Ouvintes de Evento
document.querySelector("#pedra").addEventListener("click", () => playgame("pedra"));
document.querySelector("#papel").addEventListener("click", () => playgame("papel"));
document.querySelector("#tesoura").addEventListener("click", () => playgame("tesoura"));