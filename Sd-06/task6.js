function ShoppingList(){
    this.list = [];
}

let numberProducts = 3;

const item = [
    {name: "Carne", quantity: 1,price: 150,available: true},
    {name: "Queso", quantity: 1,price: 50,available: false},
    {name: "Leche", quantity: 1,price: 40, available: true},
    {name: "Mermelada", quantity: 1,price: 70, available: true},
    {name: "Agua", quantity: 1,price: 10, available: false}
];

const shoppingList  = new ShoppingList();

for(let i = 0; i < item.length; i++){
    if(item[i].available === true && shoppingList.list.length < numberProducts ){
        shoppingList.list.push(item[i]); 
    }
}

console.log(shoppingList.list);