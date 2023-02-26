// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z']
  let newMessage = '';

  function caesar(input, shift, encode = true) {
    // your solution code here
    let lowerCaseInput = input.toLowerCase()
    
    if(shift === 0 || shift > 25 || shift < -25 || shift === undefined) {
      return false
    }

    for (const letter of lowerCaseInput) {
      if(!lettersList.includes(letter)) {
        newMessage = newMessage.concat(letter)
        continue
      }
      
      let indexLetter = lettersList.findIndex((item) => item === letter);
      
      if(encode) {
        let indexNewLetter = indexLetter + shift
        if (indexNewLetter > 25) {
          indexNewLetter -= 26 
        }
        if (shift < 0) {
          indexNewLetter = indexLetter - (Math.abs(shift))
          if(indexNewLetter < 0) {
            indexNewLetter += 26
          }
        }
        newMessage = newMessage.concat(lettersList[indexNewLetter])
      }

      if(!encode) {
        let indexNewLetter = indexLetter - shift
        if(indexNewLetter < 0) {
          indexNewLetter += 26
        }
        if (shift < 0) {
          indexNewLetter = indexLetter + (Math.abs(shift))
          if(indexNewLetter > 25) {
            indexNewLetter -= 26
          }
        }
        newMessage = newMessage.concat(lettersList[indexNewLetter])
      }
    }
    let temp = newMessage
    newMessage = "" 
    return temp;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
