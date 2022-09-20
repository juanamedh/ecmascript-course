const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, Kiwi, Stardfruit, Banana';

// matchAll string metod helps filter out elements from a string using a regex
// and proscessing those instances
for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
