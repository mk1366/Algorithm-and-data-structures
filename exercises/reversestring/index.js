// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Process
// Turn 'str' into an array
// call 'reverse' method on the array
// jin the array back into a string
// Return the result

// Soultion 1

function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

module.exports = reverse;
//
// solution 2
//
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
//
// module.exports = reverse;
//
// Soultion 3
//
//  function reverse(str) {
//    let reversed = '';
//
//    for(let characters of str) {
//      reversed = character + reversed;
//    }
//
//    return reversed;
//
// }
//
//  module.exports = reverse;
//
//    for (var i - 0; i < str.length; i++) {
//
//    }
//
// Soultion 4
//
// function reverse(str) {
//   str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverse;
