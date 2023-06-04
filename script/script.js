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
  
  function showRandomNumbers() {
    let numeriRandom = generateUniqueRandomNumbers();
    let numbersContainer = document.getElementById('numbersContainer');
    
  
    setTimeout(function() {
      numbersContainer.style.display = 'none';
      askUserForNumbers(numeriRandom);
    }, 5000);
  
    console.log('Numeri casuali: ', numeriRandom);
  }
  
  function askUserForNumbers(numeriRandom) {
    let userNumbers = [];
  
    for (let i = 0; i < 5; i++) {
      let userInput = parseInt(prompt('Inserisci un numero:'));
      userNumbers.push(userInput);
    }
  
    let matchingNumbers = [];
  
    for (let i = 0; i < 5; i++) {
      if (numeriRandom.includes(userNumbers[i])) {
        matchingNumbers.push(userNumbers[i]);
      }
    }
  
    if (matchingNumbers.length > 0) {
      alert('Hai indovinato i seguenti numeri: ' + matchingNumbers.join(', '));
    } else {
      alert('Non hai indovinato nessun numero.');
    }
  
    console.log('Numeri inseriti dall\'utente: ', userNumbers);
  }
  
  showRandomNumbers();
  