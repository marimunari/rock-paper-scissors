function rockPaperScissorsGame() {
  const gameChoices = document.querySelector('.game-choices');

  const options = [
    {
      name: 'rock',
      emoji: '👊'
    },
    {
      name: 'paper',
      emoji: '🤚'
    },
    {
      name: 'scissors',
      emoji: '✌️'
    }
  ];

  let playerScore = 0;
  let computerScore = 0;

  const playGame = () => {
    options.forEach(option => {
      const playerChoice = document.getElementById(`game-options__${option.name}`);
      
      if (playerChoice) {
        playerChoice.addEventListener('click', () => {
          gameChoices.style.display = 'flex';

          const computerChoice = getComputerChoice();
          determineWinner(option, computerChoice)
        });
      }
    })
  }
  
  const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  }

  const determineWinner = (playerChoice, computerChoice) => {
    const playerDisplay = document.getElementById('game-choices__player');
    const computerDisplay = document.getElementById('game-choices__computer');
    const resultDisplay = document.getElementById('game-choices__result');

    const playerScoreDisplay = document.getElementById('game-score__player');
    const computerScoreDisplay = document.getElementById('game-score__computer');

    const combinedChoices = `${playerChoice.name}-${computerChoice.name}`;

    switch (combinedChoices) {
      case 'rock-rock':
      case 'paper-paper':
      case 'scissors-scissors':
        resultDisplay.textContent = "EMPATE!";
        resultDisplay.classList.remove('loseText');
        resultDisplay.classList.remove('winText');
        break;
      case 'rock-scissors':
      case 'paper-rock':
      case 'scissors-paper':
        playerScore++;
        resultDisplay.textContent = 'VOCÊ GANHOU!';
        resultDisplay.classList.remove('loseText');
        resultDisplay.classList.add('winText');
        playerScoreDisplay.textContent = playerScore;
        break;
      case 'rock-paper':
      case 'paper-scissors':
      case 'scissors-rock':
        computerScore++;
        resultDisplay.textContent = 'VOCÊ PERDEU!';
        resultDisplay.classList.remove('winText');
        resultDisplay.classList.add('loseText');
        computerScoreDisplay.textContent = computerScore;
        break;
      default:
        resultDisplay.textContent = "";
          break;
  }

    playerDisplay.textContent = `Você: ${playerChoice.emoji}`;
    computerDisplay.textContent = `Computador: ${computerChoice.emoji}`;
  }

  playGame();
}

rockPaperScissorsGame();