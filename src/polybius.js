// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // assign each letter of the alphabet a number set to where it is on the table
  let lettersObj = [
    {letter: "a",
      code: "11"},
    {letter: "b",
      code: "21"},
    {letter: "c",
      code: "31"},
    {letter: "d",
      code: "41"},
    {letter: "e",
      code: "51"},
    {letter: "f",
      code: "12"},
    {letter: "g",
      code: "22"},
    {letter: "h",
      code: "32"},
    {letter: "i",
      code: "42"},
    {letter: "j",
      code: "42"},
    {letter: "k",
      code: "52"},
    {letter: "l",
      code: "13"},
    {letter: "m",
      code: "23"},
    {letter: "n",
      code: "33"},
    {letter: "o",
      code: "43"},
    {letter: "p",
      code: "53"},
    {letter: "q",
      code: "14"},
    {letter: "r",
      code: "24"},
    {letter: "s",
      code: "34"},
    {letter: "t",
      code: "44"},
    {letter: "u",
      code: "54"},
    {letter: "v",
      code: "15"},
    {letter: "w",
      code: "25"},
    {letter: "x",
      code: "35"},
    {letter: "y",
      code: "45"},
    {letter: "z",
      code: "55"},
    {letter: " ",
      code: " "}
  ];

  // declare a message variable
  let newMessage = []

  function polybius(input, encode = true) {
    // your solution code here\

    // declare the input message to always encode as all lowercase, ignoring uppercase letters
    let lowerCaseInput = input.toLowerCase()

    // take the input message, for each letter in the message assign it the corresponding number pair

        // if message includes a space have it apply the space to the message and continue throught the loop

    if(encode) {
      for(let i = 0; i < lowerCaseInput.length; i++){
        for(let j=0; j< lettersObj.length; j++){    
          if(lowerCaseInput[i] === lettersObj[j].letter){
            newMessage.push(lettersObj[j].code)
          }
        }
      }
    }
    
    if(!encode){
      if(input.replace(" ",'').length % 2 !== 0){
        return false
      }
      
      for(let i = 0; i < input.length; i+=2){
        for(let j= 0; j < lettersObj.length; j++){
          if (input[i] == " "){
            newMessage.push(" ")
            i -= 1
             
          }
         
          if(lettersObj[j].code === input[i]+input[i+1]&&input[i] !== " " ){
            newMessage.push(lettersObj[j].letter)
         }
        }
      }
    }
  
    // return the message
    let encoded = newMessage.join('').toString()
    newMessage = []
    return encoded
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
