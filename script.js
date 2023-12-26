
const resut = document.querySelector(".resut")
const humanoScore = document.querySelector(".humano-score")
const machineScore = document.querySelector(".machine-score")

let scoreMachine= 0
let scoreHumano= 0

const payHumano = (escolhaHumana) => {
    payGamer(escolhaHumana, payMachine())

}

const payMachine = (escolhaMachine) => {

    const choices = ['rock', 'paper', 'scissors']
    const radomNumber = Math.floor(Math.random() * 3)

    return choices[radomNumber]

}
const payGamer = (humano, machine) => {
    console.log('Humano:' + humano + "Maquina:" + machine)

    if (humano === machine) {
        resut.innerHTML = "Deu Empate!"
    }
    else if ((humano === 'rock' && machine === 'scissors') ||
        (humano === 'scissors' && machine === 'paper') ||
        (humano === 'paper' && machine === 'rock')) {
        resut.innerHTML = "Voçê Ganhou!"
        scoreHumano++
        humanoScore.innerHTML=scoreHumano

    } else { resut.innerHTML = "Voçê Perdeu para Alexa!"
    scoreMachine ++
    machineScore.innerHTML=scoreMachine

    }
}