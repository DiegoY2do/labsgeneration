class Producto{
    constructor(nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo(){
        const estado = this.disponible ? "Disponible" : "Agotado";
        return this.nombre + " tiene un precio de $" + this.precio + " y se encuentra " + estado;
    };
}

const prodcutoUno = new Producto("Labial", 150, true);
const prodcutoDos = new Producto("Rimel", 100, false);
const prodcutoTres = new Producto("Base", 250, true);


console.log(prodcutoUno.mostrarInfo());
console.log(prodcutoDos.mostrarInfo());
console.log(prodcutoTres.mostrarInfo());