let nameUser = prompt("Escribe tu nombre: ");

let  numberOne = prompt("Escribe el primer número: ");
let numberTwo = prompt("Escribe el segundo número: ");

let sum = Number(numberOne) + Number(numberTwo)
let resta = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)

console.log("Hola, " + nameUser);
console.log("\nLa suma es: " + sum);
console.log("\nLa resta es: " + resta);
console.log("\nLa multiplicación es: " + mult);
if (numberTwo == 0){
    console.log("\nNo se puede dividir entre 0");
} else{
    console.log("\nLa división es: " + div);
}