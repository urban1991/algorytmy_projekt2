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

    const usedCoinIdxArr = new Array<number>(amountInFarthings + 1).fill(-1);

    dp[0] = 0;

    for (let amount = 1; amount <= amountInFarthings; amount++) {
        for (let j = 0; j < denominations.length; j++) {
            const coinValue = denominations[j].value;

            if (coinValue <= amount) {
                const newCoinAmount  = dp[amount - coinValue] + 1

                if (newCoinAmount < dp[amount]) {
                    dp[amount] = newCoinAmount
                    usedCoinIdxArr[amount] = j;
                }
            }
        }
    }
    
    const distribution: Record<string, number> = {
        Gwinea: 0,
        Funt: 0,
        Korona: 0,
        Szyling: 0,
        Pens: 0,
        Półpensówka: 0,
        Ćwiartka: 0
    };

    let amountRemainingToBeSpent = amountInFarthings;
    while (amountRemainingToBeSpent > 0) {
        const usedCoinIndex = usedCoinIdxArr[amountRemainingToBeSpent];
        if (usedCoinIndex === -1) {
            throw new Error(\`Nie udało się wydać kwoty (pozostało amountRemainingToBeSpent fartingów do wydania).\`);
        }
        const distributionKey = denominations[usedCoinIndex].name;

        distribution[distributionKey]++;
        amountRemainingToBeSpent -= denominations[usedCoinIndex].value;
    }

    return distribution;
}
}`;

const getMinimalCoinDistributionCodeStringWithComments = `/**
 * Funkcja oblicza minimalną liczbę „monet” potrzebną do wydania kwoty
 * wyrażonej w pensach, z uwzględnieniem półpensówek (0.5) i ćwiartek (0.25).
 * @param amountInPence - kwota w pensach
 * @returns obiekt z liczbą monet każdego nominału
 */
function getMinimalCoinDistribution(amountInPence: number) {
  // Przeliczamy podaną kwotę pensów na farthingi (1 pens = 4 farthingów)
  const amountInFarthings = amountInPence * 4;

  // Definiujemy nominały w farthingach
  const denominations = [
    { name: "Gwinea",      value: 1008 },  // 252 pensy = 252*4 farthingów
    { name: "Funt",        value:  960 },  // 240 pensów = 240*4 farthingów
    { name: "Korona",      value:  240 },  // 60 pensów  = 60*4
    { name: "Szyling",     value:   48 },  // 12 pensów  = 12*4
    { name: "Pens",        value:    4 },  // 1 pens     = 4
    { name: "Półpensówka", value:    2 },  // 0.5 pensa  = 2
    { name: "Ćwiartka",    value:    1 }  // 0.25 pensa = 1
  ];

  // Inicjalizacja tablicy dp, gdzie dp[i] oznacza minimalną liczbę monet potrzebną
  // do wydania i fartingów
  // Początkowo ustawiamy wszystkie wartości na Infinity (nieosiągalne), poza dp[0]
  const dp = new Array<number>(amountInFarthings + 1).fill(Infinity);

  // Tablica do zapamiętywania indeksu monety, która była użyta jako ostatnia przy 
  // optymalnym wydaniu danej kwoty
    const usedCoinIdxArr = new Array<number>(amountInFarthings + 1).fill(-1);

  // Bazowy przypadek: 0 fartingów wymaga 0 monet
  dp[0] = 0;

   // Główna pętla dynamiczna: iterujemy przez każdą kwotę od 1 do amountInFarthings
    for (let amount = 1; amount <= amountInFarthings; amount++) {
        // Dla danej kwoty sprawdzamy każdy dostępny nominał
        for (let j = 0; j < denominations.length; j++) {
            const coinValue = denominations[j].value;

            // Sprawdzamy, czy możemy użyć monety o wartości coinValue dla bieżącej
            // kwoty
            if (coinValue <= amount) {
                // Obliczamy nową liczbę monet, jeśli użyjemy tej monety
                const newCoinAmount = dp[amount - coinValue] + 1;

                // Jeśli znaleźliśmy lepsze rozwiązanie (mniejszą liczbę monet)
                // dla tej kwoty...
                if (newCoinAmount < dp[amount]) {
                    // ... aktualizujemy dp oraz zapamiętujemy indeks użytej monety
                    dp[amount] = newCoinAmount;
                    usedCoinIdxArr[amount] = j;
                }
            }
        }
    }

   // Inicjalizacja obiektu do przechowywania końcowego rozkładu monet
    const distribution: Record<string, number> = {
        Gwinea: 0,
        Funt: 0,
        Korona: 0,
        Szyling: 0,
        Pens: 0,
        Półpensówka: 0,
        Ćwiartka: 0
    };

    // Zmienna przechowująca pozostałą kwotę do wydania
    let amountRemainingToBeSpent = amountInFarthings;

    // Odtwarzanie rozkładu monet na podstawie tablicy usedCoinIdxArr
    while (amountRemainingToBeSpent > 0) {
        // Znajdź indeks monety, której użyto dla bieżącej pozostałej kwoty
        const usedCoinIndex = usedCoinIdxArr[amountRemainingToBeSpent];
        // Jeśli nie znaleziono żadnej monety, wyrzuć błąd
        if (usedCoinIndex === -1) {
            throw new Error(\`Nie udało się wydać kwoty pozostało
             amountRemainingToBeSpent farthingów do wydania).\`);
        }
        // Pobierz nazwę monety użytej w tym kroku
        const distributionKey = denominations[usedCoinIndex].name;
        
        // Zwiększ licznik wybranej monety w rozkładzie
        distribution[distributionKey]++;
        // Zmniejsz pozostałą kwotę do wydania o wartość użytej monety
        amountRemainingToBeSpent -= denominations[usedCoinIndex].value;
    }

    // Zwróć ostateczny rozkład monet potrzebnych do wydania danej kwoty
    return distribution;
}
`;

export {
  getMinimalCoinDistributionCodeString,
  getMinimalCoinDistributionCodeStringWithComments,
};
