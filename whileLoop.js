//while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 


// let numbers = 1;

// while(numbers <=19){
//     if(numbers % 2 != 0){
//         console.log (numbers)
//     }
//     numbers ++;
// }


function oddNumber(getNumbers){

    let numbers =[];
    let number = 7;
    let maxNumber = getNumbers;

    while ( number <= maxNumber){
        if(number % 2 != 0){
            numbers.push(number);
        }
        number ++ ;
    }
    return numbers;
}

const values = oddNumber (19);
console.log(values);