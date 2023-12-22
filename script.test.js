const { getRandomChoice, determineWinner, playGame } = require('./src/script.js');


describe('Pierre, Feuille, Ciseaux - Tests', () => {

  describe('getRandomChoice', () => {
    test('doit renvoyer un choix valide', () => {
      const choice = getRandomChoice();
      expect(['pierre', 'feuille', 'ciseaux']).toContain(choice);
    });
  });

  describe('determineWinner', () => {
    test('doit gérer l\'égalité', () => {
      expect(determineWinner('pierre', 'pierre')).toBe('Égalité');
      // Ajouter plus de tests pour les autres cas d'égalité
    });

    test('Joueur 1 doit gagner avec pierre contre ciseaux', () => {
      expect(determineWinner('pierre', 'ciseaux')).toBe('Joueur 1 gagne');
      // Ajouter plus de tests pour les autres combinaisons gagnantes
    });

    // Ajouter des tests pour les cas où le Joueur 2 gagne
  });

  describe('playGame', () => {
    test('doit jouer une partie complète', () => {
      const result = playGame();
      expect(result).toHaveProperty('roundHistory');
      expect(result).toHaveProperty('finalResult');
      expect(result.roundHistory.length).toBeGreaterThanOrEqual(1);
      // Vous pouvez ajouter d'autres assertions pour tester des aspects spécifiques du résultat
    });
  });

});
