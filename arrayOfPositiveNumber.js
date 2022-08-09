function onlyPositive(numbers){

    let positiveNumber =[];

    for (i =0 ; i < numbers.length ; i++){

        let number = numbers[i];
        if(number > 0){
            positiveNumber.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumber;
}

const getNumbers = [20, 300, 40, 50, 60, 70, -10, 0, 56];
const result = onlyPositive(getNumbers);
console.log(result);