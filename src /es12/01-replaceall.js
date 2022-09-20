// Original String
const string = 'Javascript is a wonderful programming language!\n Javascript can live in the browser';

// New script based on the original with a replaced string section
const replacedString = string.replace("Javascript", "Typescript");

// Replace all replaces all appeareances of the sting instead of just the first
const replaceAlledString = string.replaceAll("Javascript", "Typescript");

console.log(string);
console.log(replacedString);
console.log(replaceAlledString);