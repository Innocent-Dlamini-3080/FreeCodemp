//ROT13 Decypher
/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let arr = str.split("");
  let newStr = [];
  
  for (let i = 0; i < arr.length; i++){
    if (deCypher(arr[i], letters)){
      newStr.push((deCypher(arr[i], letters)))
    }
  }
  
  newStr = newStr.join("");
  
  return newStr;
}
rot13("SERR PBQR PNZC");

function deCypher(letter, arr){
  let index = arr.indexOf(letter);
  let originalIndex = index - 13;
  let originalLetter = "";

  //handle charectors
  if (index < 0){
    originalLetter = letter;
    return originalLetter;
  }

  //handle negatives indexes
  if (originalIndex < 0){
    originalIndex = arr.length + originalIndex;
  }
 
  originalLetter = arr[originalIndex]
  
  return originalLetter
}

rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
