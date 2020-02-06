// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common String Questions
// what is the most common character in the string?
// Does string A have  the same characters as string B (is it an anagram)?
// Does the given string have any repeated character in it?


// const string = "Hello There!"
// const chars = {};
//
// for (let char of string) {
//   if (!chars[char]) {
//     chars[char] = 1;
//   } else {
//     chars[char]++;
//   }
// }
//
// chars;

// const string = "Hello There!"
// const chars = {};
//
// for (let char of string) {
//   chars[char] = chars[char] + 1 || 1;
//
// }
//
// chars;


// So remember inside of Max char we're trying to find the character that occurs most frequently inside

function maxChar(str) {  //function
  const charMap = {}; // declaring a new variable

  for (let char of str) { //Next will iterate over our source string right here and use that to build out the character map.
    if (charMap[char]) { //So we'll save for let char of string and then for every character that we receive we will add an entry
      // to Character Map and if an entry already exists there.
      charMap[char] ++; // Let's increment it by one
    } esle {
      charMap[char] = 1; // otherwise we will set char map at Char equal to 1.
    }
  }
  console.log(charMap);
}

module.exports = maxChar;
