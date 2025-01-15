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
            throw new Error(`Nie udało się wydać kwoty (pozostało ${amountRemainingToBeSpent} fartingów do wydania).`);
        }
        const distributionKey = denominations[usedCoinIndex].name;

        distribution[distributionKey]++;
        amountRemainingToBeSpent -= denominations[usedCoinIndex].value;
    }

    return distribution;
}


export { getMinimalCoinDistribution };
