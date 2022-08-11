
//A function to convert Radian To Degree


function radianToDegree(radian){

    if(typeof(radian)== 'number'){
        let pi = 3.1416;
        result = radian * (180 / pi);
        return result.toFixed(2)
    }
    else{
        return "Please Inter A Valid Number";
    }
}


//Write a function to check the given file is a js file or not.

function isJavaScriptFile(fileName){
   
    if(typeof(fileName)=='string'){
        if(fileName.includes('.') == true){
            if(fileName.endsWith('.js')){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return "Please inter a valid file with extension";
        }
    }
    else{
        return "Please insert string";
    }
}


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
       return "Please Input a Valid Number";
    }
  
  }


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


//isBestFriend Function Is True Or Not

function isBestFriend(friend1, friend2){
    if((typeof(friend1) == 'object' ) && (typeof(friend2) == 'object')) {
        if(((friend1.friend.toLowerCase()) == (friend2.name.toLowerCase())) && ((friend1.name.toLowerCase()) == (friend2.friend.toLowerCase()) )){
            return true;
        } 
        else{
            return false;
        }
    }
    else{
        return "Please Provide an Object";
    }
    
}
