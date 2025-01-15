const getMinimalCoinDistributionCodeString = `
function getMinimalCoinDistribution(amountInPence: number) {
  const amountInFarthings = amountInPence * 4;

  const denominations = [
    { name: "Gwinea",      value: 1008 }, 
    { name: "Funt",        value:  960 },  
    { name: "Korona",      value:  240 }, 
    { name: "Szyling",     value:   48 },  
    { name: "Pens",        value:    4 },  
    { name: "Półpensówka", value:    2 },  
    { name: "Ćwiartka",    value:    1 }  
  ];

  const dp = new Array<number>(amountInFarthings + 1).fill(Infinity);

  const coinChoice = new Array<number>(amountInFarthings + 1).fill(-1);

  dp[0] = 0;

  for (let i = 1; i <= amountInFarthings; i++) {
    for (let c = 0; c < denominations.length; c++) {
      const coinValue = denominations[c].value;
      if (coinValue <= i) {
        if (dp[i - coinValue] + 1 < dp[i]) {
          dp[i] = dp[i - coinValue] + 1;
          coinChoice[i] = c;
        }
      }
    }
  }

  let remaining = amountInFarthings;
  const distribution: Record<string, number> = {
    Gwinea: 0,
    Funt: 0,
    Korona: 0,
    Szyling: 0,
    Pens: 0,
    Półpensówka: 0,
    Ćwiartka: 0,
  };

  while (remaining > 0) {
    const chosenCoinIndex = coinChoice[remaining];
    if (chosenCoinIndex === -1) {
      throw new Error(
        \`Nie udało się wydać kwoty (pozostało remaining fartingów do wydania).\`
      );
    }
    distribution[denominations[chosenCoinIndex].name]++;
    remaining -= denominations[chosenCoinIndex].value;
  }

  return distribution;
}`;


const getMinimalCoinDistributionCodeStringWithComments = `/**
 * Funkcja oblicza minimalną liczbę „monet” potrzebną do wydania kwoty
 * wyrażonej w pensach, z uwzględnieniem półpensówek (0.5) i ćwiartek (0.25).
 * @param amountInPence - kwota w pensach
 * @returns obiekt z liczbą monet każdego nominału
 */
function getMinimalCoinDistribution(amountInPence: number) {
  // Przeliczamy podaną kwotę pensów na fartingi (1 pens = 4 fartingów)
  const amountInFarthings = amountInPence * 4;

  // Definiujemy nominały w fartingach
  const denominations = [
    { name: "Gwinea",      value: 1008 },  // 252 pensy = 252*4 fartingów
    { name: "Funt",        value:  960 },  // 240 pensów = 240*4 fartingów
    { name: "Korona",      value:  240 },  // 60 pensów  = 60*4
    { name: "Szyling",     value:   48 },  // 12 pensów  = 12*4
    { name: "Pens",        value:    4 },  // 1 pens     = 4
    { name: "Półpensówka", value:    2 },  // 0.5 pensa  = 2
    { name: "Ćwiartka",    value:    1 },  // 0.25 pensa = 1
  ];

  // dp[i] = minimalna liczba "monet" potrzebnych do wydania i fartingów
  const dp = new Array<number>(amountInFarthings + 1).fill(Infinity);

  // coinChoice[i] = indeks monety, którą wybrano jako ostatnią, by uzyskać optymalne dp[i]
  const coinChoice = new Array<number>(amountInFarthings + 1).fill(-1);

  // 0 fartingów = 0 monet
  dp[0] = 0;

  // Wypełnianie dp w podejściu bottom-up
  for (let i = 1; i <= amountInFarthings; i++) {
    for (let c = 0; c < denominations.length; c++) {
      const coinValue = denominations[c].value;
      if (coinValue <= i) {
        // Sprawdzamy, czy użycie tej monety polepszy (zmniejszy) dp[i]
        if (dp[i - coinValue] + 1 < dp[i]) {
          dp[i] = dp[i - coinValue] + 1;
          coinChoice[i] = c;
        }
      }
    }
  }

  // Odtwarzamy konkretny rozkład „monet” – od kwoty docelowej wracamy do 0
  let remaining = amountInFarthings;
  const distribution: Record<string, number> = {
    Gwinea: 0,
    Funt: 0,
    Korona: 0,
    Szyling: 0,
    Pens: 0,
    Półpensówka: 0,
    Ćwiartka: 0
  };

  while (remaining > 0) {
    const chosenCoinIndex = coinChoice[remaining];
    if (chosenCoinIndex === -1) {
      throw new Error(
        \`Nie udało się wydać kwoty (pozostało remaining fartingów do wydania).\`
      );
    }
    distribution[denominations[chosenCoinIndex].name]++;
    remaining -= denominations[chosenCoinIndex].value;
  }

  return distribution;
}
`

export { getMinimalCoinDistributionCodeString, getMinimalCoinDistributionCodeStringWithComments };
