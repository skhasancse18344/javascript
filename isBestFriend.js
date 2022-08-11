
let friend1 ={
    name : 'Tom',
    friend : 'rock'
}
let friend2 = {
    name : 'Rock',
    friend : 'Tom'

}

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
        console.log("Please Provide an Object")
    }
    
}
let bestFriend = isBestFriend(friend1,friend2);
console.log(bestFriend);


