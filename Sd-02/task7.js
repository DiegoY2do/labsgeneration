// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Boom",
    "Zap",
    "Pow"
  ];

let primeNumbers = [3,5,7,11,13,17, 19, 23, 29];
  
for (let i = 1; i <= primeNumbers[primeNumbers.length - 1]; i++) {

  let word = "";

  for (let j = 0; j < primeNumbers.length; j++) {
    if (i === primeNumbers[j]) {
      word = buzzWords[j];
    }
  }

  if (word === "") {
    console.log(i);
  } else {
    console.log(word);
  }

}
