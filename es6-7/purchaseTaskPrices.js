let prices = [0, 2,5,10,15,20,25,50,75,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500];

// console.log(``,prices);

// console.log(prices.map(price => price * .01));

console.log(`Prices: `,prices.length);
prices.map(function(price) {
    console.log("$ " + price * .01);
});
