
function getComputerChoice() 
{
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) 
        return "rock"
    else if (choice == 1) 
        return "paper"
    else 
        return "scissors"
}


function getHumanChoice() 
{
    let choice = prompt("Enter your choice: ")
    return choice.toLowerCase()
}


function playRound(humanChoice, computerChoice) 
{

    if (humanChoice == computerChoice) 
    {
        console.log("It's a tie!")
        return "tie"
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") 
    {
        console.log("You win! Rock beats scissors")
        return "human"
    }
    else if (humanChoice == "paper" && computerChoice == "rock") 
    {
        console.log("You win! Paper beats rock")
        return "human"
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") 
    {
        console.log("You win! Scissors beats paper")
        return "human"
    }
    else 
    {
        console.log("You lose!")
        return "computer"
    }
}

function playGame() 
{
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) 
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result == "human") 
        {
            humanScore++;
        } 
        else if (result == "computer") 
        {
            computerScore++;
        }
    }

    console.log("Final score - You: " + humanScore + ", Computer: " + computerScore);


    if (humanScore > computerScore) 
    {
        console.log("You win the game!");
    } 
    else if (humanScore < computerScore) 
    {
        console.log("You lose the game!");
    } 
    else 
    {
        console.log("The game is a tie!");
    }
}

playGame()