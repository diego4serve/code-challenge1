// Code Challenge Instructions
// “In the programming language of your choice, write a program that parses a sentence and replaces each word with the 
// following: first letter, number of distinct characters between first and last character, and last letter. Words are 
// separated by spaces or non-alphabetic characters and these separators should be maintained in their original form 
// and location in the answer. 
// Examples: 
// “Smooth” becomes “S3h” 
// “Space separated” becomes “S3e s5d” 
// “Dash-separated” becomes “D2h-s5d” 
// “Number2separated” becomes “N4r2s5d” 


const transformWord = (word) => {
  if (word.length <= 2) return word;
  const [firstChar, ...rest] = word;
  const lastChar = rest.pop();
  const numUniqueChars = new Set(rest).size;
  return `${firstChar}${numUniqueChars}${lastChar}`;
}

const transformPhrase = (phrase) => {
  const splitWithSeparators = phrase.match(/([a-zA-Z]+|[^a-zA-Z]+)/g);
  return splitWithSeparators.map(item => item.search(/[^a-zA-Z]+/) !== -1 ? item : transformWord(item)).join('');
}

console.log(transformPhrase("Smooth"));
console.log(transformPhrase("Space separated"));
console.log(transformPhrase("Dash-separated"));
console.log(transformPhrase("Number2separated"));
console.log(transformPhrase("Smooth Space separated Dash-separated Number2separated"));
console.log(transformPhrase("Smooth Space- separa--ted Dash-separated Number2separated"));