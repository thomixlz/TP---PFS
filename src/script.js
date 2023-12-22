// Définition des choix possibles
const CHOICES = ['pierre', 'feuille', 'ciseaux'];

// Fonction pour obtenir un choix aléatoire pour un joueur
function getRandomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Fonction pour déterminer le gagnant d'un tour
function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return 'Égalité';
  }

  if (
    (player1Choice === 'pierre' && player2Choice === 'ciseaux') ||
    (player1Choice === 'feuille' && player2Choice === 'pierre') ||
    (player1Choice === 'ciseaux' && player2Choice === 'feuille')
  ) {
    return 'Joueur 1 gagne';
  }

  return 'Joueur 2 gagne';
}

// Fonction pour simuler une partie
function playGame() {
  let roundHistory = [];
  let player1Wins = 0;
  let player2Wins = 0;
  let round = 1;

  // Continuez à jouer jusqu'à ce qu'un joueur gagne 2 tours
  while (player1Wins < 2 && player2Wins < 2) {
    const player1Choice = getRandomChoice();
    const player2Choice = getRandomChoice();
    const result = determineWinner(player1Choice, player2Choice);

    roundHistory.push(`Tour ${round}: Joueur 1 (${player1Choice}) vs Joueur 2 (${player2Choice}) - ${result}`);

    if (result === 'Joueur 1 gagne') player1Wins++;
    if (result === 'Joueur 2 gagne') player2Wins++;

    round++;
  }

  return {
    roundHistory,
    finalResult: player1Wins > player2Wins ? 'Joueur 1 remporte la partie' : 'Joueur 2 remporte la partie'
  };
}


// Exécution du jeu
const gameResult = playGame();
console.log(gameResult.roundHistory);
console.log(gameResult.finalResult);


module.exports = { getRandomChoice, determineWinner, playGame };
