
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
            console.log("Please inter a valid file with extension")
        }
    }
    else{
        console.log("Please insert string")
    }
}
const file = isJavaScriptFile("hello.js");
console.log(file);
