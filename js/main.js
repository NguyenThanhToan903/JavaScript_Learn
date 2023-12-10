// console.log('Hello world from HTML');
// let a = 5; // x <- y
// let b = 5;

// console.log('compare a and b: ', 'a = ', a, 'b = ', b, 'result: ', a==b);

// a = 5; // x <- y
// b = '5';

// console.log('compare a and b: ', 'a = ', a, 'b = ', b, 'result: ', a==b);

// a = 5; // x <- y
// b = '5';

// console.log('compare a and b: ', 'a = ', a, 'b = ', b, 'result: ', a===b);
// //nen luon dung 3 dau bang (===)
// // === type, value.
// // == value.

// //Empty, null, undefined
// let c;
// //undefined
// console.log('check value: ',c)

// //Empty
// c = {};
// console.log('check value: ',c)

// //Null
// c = null;
// console.log('check value: ',c)

// //gan cho no cai gi thi no la cai do, khong can quan tam null, nen gan ''
// let d = '';
// d = 5;
// d = ['11'];


//Loop
// let i = 0;
// for(i = 1; i < 10; i++){
//     console.log(i);
// }

// console.log('check value: ',i);

// i = 0;
// for(let i = 1; i < 10; i++){
//     console.log(i);
// }

// console.log('check value: ',i);


// let arr = ['Apple', 'Samsung', 'Nokia', 'Huawei'];

// // let i = 0;

// // while(i < arr.length){
// //     console.log('Hang: ', arr[i]);
// //     i++;
// // }

// let i = 0;
// while(i < arr.length){
//     if(arr[i].length === 7){
//         console.log('Hang co 7 chu: ', arr[i]);
//     }
//     i++;
// }

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

//   console.log('Today is:', day);

// function sum(a, b){
//     return a+b;
// }
// let a = 3, b = 4;
// console.log(`Tong hai so ${a} + ${b} = ${sum(a, b)}`);
let sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 6));