const output=oddoreven(4); //Named function
console.log(output);
function oddoreven(num){

    if(num%2==0){
        return "Even";
    }
    else
    {
        return "Odd";
    }
}

let result=oddoreven; // storing function in variables
console.log(result);
