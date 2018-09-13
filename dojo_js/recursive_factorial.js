function rFactorial(num){
    if (num <= 1) {
        return num;
    }
    num *= rFactorial(num - 1);
    return num;
}

console.log(`rFactorial of 3:`, rFactorial(3));
console.log(`rFactorial of 5:`, rFactorial(5));
