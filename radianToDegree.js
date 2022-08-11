/*
A function to convert Radian To Degree
*/

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

const degree = radianToDegree(a);
console.log(degree);

/*
input: 34

Output: 1948.05
*/