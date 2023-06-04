function generateUniqueRandomNumbers() {
    var numeriRandom = [];
  
    while (numeriRandom.length < 5) {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
  
      if (numeriRandom.indexOf(randomNumber) === -1) {
        numeriRandom.push(randomNumber);
      }
    }
  
    return numeriRandom;
  }
  
  var numeriRandom = generateUniqueRandomNumbers();
  console.log(numeriRandom);
  