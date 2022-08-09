function centimeterToMeter(numbers) {
    
    let meter =numbers;
    let centimeter = meter*100;
    return centimeter.toFixed(2);
}

const centimeters = centimeterToMeter(4.56111);
console.log(centimeters);