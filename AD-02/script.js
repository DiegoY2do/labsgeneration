const adios = document.querySelector("h1");
adios.textContent = "Adios"

const naranja = document.querySelector("#orange");
naranja.style.color = ("orange");

const marron = document.querySelector("#brown");
marron.addEventListener("click",() =>{
    if(marron.style.color === "brown"){
        marron.style.color = "";
    } else{
        marron.style.color = "brown";
    }
});