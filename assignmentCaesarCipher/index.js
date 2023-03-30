const readlineSync = require('readline-sync');

function caesarCipher() {
  var text = readlineSync.question("What would you like to encrypt? ");
  var shift = parseInt(readlineSync.question("How many letters would you like to shift? "));
  //defining prompts for user.
  var result = text.split('').map(function(char) {
    var c = char.charCodeAt(0);
    //map over each character
    
    if (c >= 65 && c <= 90) {
      return String.fromCharCode((c - 65 + shift) % 26 + 65);  // for uppercase letters
    }
    else if (c >= 97 && c <= 122) {
      return String.fromCharCode((c - 97 + shift) % 26 + 97);  // for lowercase letters
    }
    else {
      return char;  // for other characters
    }
  }).join('');

  //checks if character is upper or lower case or special character
  //using 26 letter alphabet, 
  
  console.log("Result: ", result);
}

caesarCipher();

//calls the function
