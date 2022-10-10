//concat and slicing
const first=[1,2,3];
const first1=[{id:1}];
const second=[4,5,6];

const third= first.concat(second);
console.log(third);
const fourth= third.slice(2,4);
console.log(fourth);
console.log (fourth.slice());

const fifth=first1.concat(second);
console.log(fifth);

const sixth=[...first,...second];
console.log(sixth);