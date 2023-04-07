//ROT13 Decypher

function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let arr = str.split("");
  let newStr = [];
  
  
  for (let i = 0; i < arr.length; i++){
    if(deCypher(arr[i], letters) == -1){
      newStr.push(deCypher(arr[i], letters))
    }
    if (deCypher(arr[i], letters)){
      newStr.push((deCypher(arr[i], letters)))
    }
  }
  newStr = newStr.join("")
  return newStr;

}


rot13("SERR PBQR PNZC");


function deCypher(letter, arr){
  let index = arr.indexOf(letter);
  let originalIndex = index - 13; // 
  let originalLetter = ""; // store de-cypherd letter

  //handle charectors
  if (index < 0){
    originalLetter = letter;
    return originalLetter
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
