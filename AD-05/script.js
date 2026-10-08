function randomColor() {
    const randomColor = document.querySelector("h5");
    const colores = ["green", "blue", "red"];
    
    const color = colores[Math.floor(Math.random() * colores.length)];
    randomColor.style.color = color;
}