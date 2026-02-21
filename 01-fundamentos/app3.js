
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ').length;
const reactWordCount = content.split(/react/ig).length

console.log('Cantidad de palabras: ', wordCount);
console.log('Cantidad de palabras React: ', reactWordCount-1); // Case insensitive
