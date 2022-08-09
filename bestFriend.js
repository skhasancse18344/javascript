function bestFriend(myFriends){
    friendsName = myFriends[0];
    for (let i = 0; i< myFriends.length; i++) {
        
        const friends = myFriends[i];

        if(friends.length > friendsName.length){
            friendsName = friends;
        }
    }
    return friendsName;
}

let names = ['Hasan' , 'Rakib' , 'Sumon' , 'Sabbir' ,'Arman'];

const friend = bestFriend(names) 

console.log(friend);