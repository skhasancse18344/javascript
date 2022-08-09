function feetToInch(numbers) {
    
    let feet=numbers;
    let inch = feet*12;
    return inch.toFixed(2);
}

const inches = feetToInch(7864785.56111);
console.log(inches);