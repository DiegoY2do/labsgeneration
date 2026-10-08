function alertTime(){
    const time = document.querySelector("h3");
    alert ("ITS BURGERTIME");
}

function messageLog(){
    console.log("Someone click on BURGER TOWN!")
}

function colorChange(){
    const red = document.querySelector("#changeColor");
        if(red.style.color === "red"){
            red.style.color = "";
        } else{
            red.style.color = "red";
        }
}