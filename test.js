// console.log("Javascript Basics");
//interpolation and template literal
// let x =4;
// let y=7;
// console.log(`sum of ${x} + ${y} = ${x+y}`);
// console.log("sum of " +x+ " + " + y+ " = " + x+y);
// console.log("sum of " +x+ " + " + y+ " = " + (x+y));


// let template=`<!div>
// this is div   
// </div>`;

// console.log(template);

//let x="piyu vinit";
 //console.log=x.substr(0,5);
// console.log=x.substr(0,5);
// console.log=x.substr(0,5);
// console.log=x.substr(0,5);
// console.log(x.replace(/i/,"I"));

// let n=min(4,5);
// console.log(n);

// function min(a,b){
//     return(a<b)?a:b;
// }


// const output=FizzBuzz(7);
// console.log(output);

// function FizzBuzz(input){
//     if( typeof input !== 'number')
//     return NaN;
//     if(input%3===0 && input %5===0)
//     return "FizzBuzz";
//      if(input %3===0)
//      return "Fizz";
//      if(input %5===0)
//      return "Buzz";

// return input;
// }


shownumbers(20);
function shownumbers(limit){
    for(let i=0;i<=20;i++){
    const message=i%2===0?'EVEN':'ODD';
    console.log(i,message);
    }
}