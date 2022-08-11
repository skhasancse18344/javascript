//Public Bus Fare

function publicBusFare(passanger){
    if(typeof(passanger) == 'number'){
        let microBusPassanger;
        let publicBusPassanger;
        let busFare;

        if(passanger >= 1){
            microBusPassanger =passanger % 50;
            publicBusPassanger = microBusPassanger % 11;
            busFare = publicBusPassanger * 250;
            return busFare;
        }
    }
    else{
        return "Please inter a valid number";
        }
}
const totalFare = publicBusFare(24);
console.log(totalFare);