let userScore = 0
let computerScore = 0

const restartBtn = document.querySelector("#restart")

const userScore_span = document.querySelector("#userScore")
const computerScore_span = document.querySelector("#computerScore")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const userChoice_span = document.querySelector("#userChoice")
const computerChoice_span = document.querySelector("#computerChoice")

const result = document.querySelector("#result")

const choices = ["rock" , "paper" , "scissors"]




function randomComputer(){
    const randomIndex = Math.floor(Math.random() * choices.length)

    const randomChoice = choices[randomIndex]
    return randomChoice
}

function runGame(name){
    const computerIndex = randomComputer()
    
    userChoice_span.textContent = name

    computerChoice_span.textContent = computerIndex

    if(name === computerIndex){
        result.textContent = "it's a draw"
    }
    else if(
        (name === "rock" && computerIndex === "scissors") ||
        (name === "paper" && computerIndex === "rock") ||
        (name === "scissors" && computerIndex === "paper")
    ){
        userScore++
        userScore_span.textContent = userScore
        result.textContent = "You Win"

    }
    else{
        computerScore++
        computerScore_span.textContent = computerScore
        result.textContent = "You Lose"

    }
}


function userClick(){
    rock.addEventListener("click" , function(){
        runGame("rock")
    })
    paper.addEventListener("click" , function(){
        runGame("paper")
    })
    scissors.addEventListener("click" , function(){
        runGame("scissors")
    })
}

userClick()


restartBtn.addEventListener("click" ,function(){
    location.reload()
})


