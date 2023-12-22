const { determineWinner } = require('./src/script.js'); 

describe('Pierre Feuille Ciseaux - Tests Unitaires', () => {
  test('Pierre bat Ciseaux', () => {
    expect(determineWinner('pierre', 'ciseaux')).toBe('Joueur 1 gagne');
  });

  test('Ciseaux bat Feuille', () => {
    expect(determineWinner('ciseaux', 'feuille')).toBe('Joueur 1 gagne');
  });

  test('Feuille bat Pierre', () => {
    expect(determineWinner('feuille', 'pierre')).toBe('Joueur 1 gagne');
  });

  test('Égalité si les deux joueurs choisissent la même chose', () => {
    expect(determineWinner('pierre', 'pierre')).toBe('Égalité');
  });
});
