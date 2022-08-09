const car = {
    name : 'Toyota',
    model : 'Hondai',
    price : 1000,
}
car.price =2000;
car.newPrice = car.price;
delete car.price;

console.log(car);