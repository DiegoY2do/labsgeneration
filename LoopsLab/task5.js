// Refer to Task 5 in your Instructions to complete this task
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
    console.log(i);
  } else{
    console.log(word);
  }
}