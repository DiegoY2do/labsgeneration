class Car{
    constructor(make, model, year, color, number_of_doors, mileage, engine_type){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.number_of_doors = number_of_doors;
        this.mileage = mileage;
        this.engine_type = engine_type;
    }

    carInfo(){
        return `Auto de la marca ${this.make} modelo ${this.model} del año ${this.year} color ${this.color} con ${this.number_of_doors} puertas, cuenta con ${this.mileage} Km y motor ${this.engine_type}`;
    };
}


const carOne = new Car("Nissan", "Sentra", 2022, "Negro", 4, "35000", "Combustión");

console.log(carOne.carInfo());