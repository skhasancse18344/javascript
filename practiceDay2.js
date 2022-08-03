// Practice Problem 1

var fruits= ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));

fruits[1]='Mango';
console.log(fruits);


//Practice Problem 2

var score=78;

if(score>=80){
    console.log('You Have Got A Grade');
}
else if(score>=60){
    console.log('You Have Got B Grade');
}
else if(score>=50){
    console.log('You Have Got C Grade');
}
else if(score>=40){
    console.log('You Have Got D Grade');
}
else {
    console.log('You Are Failed');
}


//Practice Problem Three

// Problem :1

var number1 = 13;
var number2 = 79;
var number3 = 45;

if ((number1>number2) && (number1>number3)){
    console.log('First Number is the Largest One');
}
else if ((number2>number1) && (number2>number3)){
    console.log('Second Number is the Largest One');
}
else{
    console.log('3rd Number is The Largest One');
}

//Problem : 2

var side1 =9;
var side2 =8;
var side3 =9;

if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log('The Triangle is Isosceles');
}
else{
    console.log('The Triangle is not Isosceles');
}
