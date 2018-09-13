//I'm working on an “Iffy” problem (immediately invoked function).
// The goal is to take all the variables except for "guests" out of the global scope and put them inside the "iffy."

let guests = [
    {name: "Jess", diet: "glutenFree"},
    {name: "Alex", diet: "vegan"},
    {name: "Sam", diet: "none"},
    {name: "Lesley", diet: "none"},
    {name: "Casey", diet: "glutenFree"},
    {name: "Mal", diet: "glutenFree"},
    {name: "Jay", diet: "vegan"},
    {name: "Francis", diet: "glutenFree"}
];


((guests, cupcakes, iceCream, veganCarrotCake) => {
    // let cupcakes = 24;
    // let iceCream = 10;
    // let veganCarrotCake = 5;

    for (let guest of guests) {
        // console.log(`Guest: `,guest );

        switch (guest.diet) {
            case "glutenFree":
                console.log(`got GF`,);
                iceCream--;
                break;
            case "vegan":
                console.log(`got VEGAN`,);
                veganCarrotCake--;
                break;
            default:
                console.log(`default CUPCAKE :-P `,);
                cupcakes--;
        }

    }

    console.log(`We have ${cupcakes} Cupcakes left`);
    console.log(`We have ${iceCream} Ice Cream left`);
    console.log(`We have ${veganCarrotCake} Vegan Carrot Cake left`);

})(guests, 24, 10, 5);





