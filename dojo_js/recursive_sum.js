function rSigma(num) {
    if (num <= 0) {
        return num;
    }
    console.log(`${num} + ${num-1}: `,num+(num-1));
    num += rSigma(num - 1);
    return num;
}

console.log(`rSigma of 5: `, rSigma(5));
