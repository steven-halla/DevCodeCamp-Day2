let numOne = 5;
let numTwo = 9;

function addBothNumbers() {
  let combinedNumbers = numOne + numTwo;
  console.log("Your two numbers are" + " " + combinedNumbers);
}
addBothNumbers();

let stringOne = "Dev";
let stringTwo = "CodeCamp";

function addBothString() {
  let combinedStrings = stringOne + stringTwo;
  console.log("Your combined strings of" + " " + `${stringOne}` + " " + `${stringTwo}`+ " "  + "Equals to" + " "  + combinedStrings);
}

addBothString();

function printString() {
  let favoriteArtist = "Hatsune Miku";
  for ( let i = 0; i < favoriteArtist.length; i++){
    console.log(favoriteArtist[i] );
  }
}

printString();



function printLongString(stringState) {

  if (stringState.length > 2) {
    for (let i = 0; i < stringState.length; i++){
      console.log(stringState[i])}
  }  else {
    console.log("we need a larger string");
  }
}




printLongString(" " + "Kizuna AI");
