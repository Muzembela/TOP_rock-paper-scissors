
console.log("Hello World")



function getComputerChoice()
{
	const choices = ["pedra", "papel", "tesoura"]
	const compchoice = choices[Math.floor(Math.random()*choices.length)]
	return compchoice
}	
console.log(getComputerChoice())