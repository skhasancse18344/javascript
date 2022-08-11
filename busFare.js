function publicBusFare(passanger){
    let reservedBusPassanger;
    let microBusPassanger;
    let publicBusPassanger;
    let busFare;

    if(passanger%50 == 0){
        reservedBusPassanger = passanger;
        busFare = "Hurray We dont need to go on a public Bus";
        return busFare;
    }
    else if((passanger >50) && (passanger <= 61)){

        microBusPassanger = passanger % 50;
        busFare = "Hurray We dont need to go on a public bus we have micro Bus"
        return busFare;
    }
    else{

        microBusPassanger =passanger % 50;
        publicBusPassanger = microBusPassanger % 11;
        busFare = publicBusPassanger * 250;
        return busFare;
    }
}
const totalFare = publicBusFare(75);
console.log(totalFare);