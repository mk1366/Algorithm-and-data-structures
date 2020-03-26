// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// thought Process
// Make an empty array 'words'
// Split the input string by space to ge an array
// For each word in the array
// uppercase the first letter of the words
// join first letter with rest of the strin
// push result into 'words' array
// join 'words' into a string and return it


function capitalize(str) {
  const words = [];
  for (let word of str.split(' ')) {
    words[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}


module.exports = capitalize;
