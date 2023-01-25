const num=533148
const str = num.toString(); 
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));index

function addDashBetweenEvenDigits(num) {
    const str = num.toString(); 
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
      if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
        result += str[i] + "-";
      } else {
        result += str[i];
      }
    }
    return result;
  }
  console.log(addDashBetweenEvenDigits(9987823122456));


  const arr = ['a','b','c','d'];
let obj = arr.reduce((acc,cur,index)=>({...acc,[index]:cur}),{})
console.log(obj);


  