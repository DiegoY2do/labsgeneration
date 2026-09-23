// Refer to Task 6 in your Instructions to complete this task
let words = [];

let  numberOne = 7;

for (let i = 1; i <= numberOne; i++) {

  let word = "";
    
  if(i %3 === 0){
    word += "Fizz";
  }

  if(i %5 === 0){
    word += "Buzz";
  }

  if(i %7 === 0){
    word += "Woof";
  }

  if(word === ""){
    words.push(i);
  } else{
    words.push(word);
  }
}

console.log(words.join("\n"));