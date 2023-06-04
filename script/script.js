function generateUniqueRandomNumbers() {
    let numeriRandom = [];
  
    while (numeriRandom.length < 5) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
  
      if (numeriRandom.indexOf(randomNumber) === -1) {
        numeriRandom.push(randomNumber);
      }
    }
  
    return numeriRandom;
  }
  
  let numeriRandom = generateUniqueRandomNumbers();
  console.log(numeriRandom);
  
  console.log(numeriRandom);
let userNumbers = [];

for (let i = 0; i < 5; i++) {
  let userInput = parseInt(prompt("Inserisci un numero:"));
  userNumbers.push(userInput);
}

let matchingNumbers = [];

for (let i = 0; i < 5; i++) {
  if (numeriRandom.includes(userNumbers[i])) {
    matchingNumbers.push(userNumbers[i]);
  }
}

if (matchingNumbers.length > 0) {
  alert("Hai indovinato i seguenti numeri: " + matchingNumbers.join(", "));
} else {
  alert("Non hai indovinato nessun numero.");
}