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
            throw new Error(`Nie udało się wydać kwoty (pozostało ${remaining} fartingów do wydania).`);
        }
        distribution[denominations[chosenCoinIndex].name]++;
        remaining -= denominations[chosenCoinIndex].value;
    }

    return distribution;
}


export { getMinimalCoinDistribution };
