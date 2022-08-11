//Calculate The total oil price that i have to pay

function oilPrice(diesel, petrol, octane){

  if ((typeof(diesel) == 'number') && (typeof(petrol) == 'number' ) && (typeof(octane)=='number') ){
    let dieselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;

    let totalPrice = (dieselPrice * diesel) + (petrolPrice * petrol) + (octanePrice * octane);
    return totalPrice; 
  }  
  else{
    console.log("Please Input a Valid Number")
  }

}
const totalOilPrice = oilPrice (30, 20, 10);
console.log(totalOilPrice);
