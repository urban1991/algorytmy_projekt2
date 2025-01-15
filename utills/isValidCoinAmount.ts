function isValidCoinAmount(value: string): boolean {
    const pattern = /^(\d+(\.(25|5|75))?)$/;
    return pattern.test(value);
}

export { isValidCoinAmount };
