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

//Arrow Function
// let sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(5, 6));

// let sum = (a, b, callback) => {
//     let tong = a + b;
//     // setTimeout(() => {
//     //     callback(tong);
//     // }, 10000);
//     let i = 0,
//         timer = setInterval(() => {
//             callback(tong);
//             i++;
//             if (i === 5) {
//                 clearInterval(timer);
//             }
//         }, 1000);
// };

// let printTong = (message) => {
//     console.log(">>> check data: ", message);
// };

// sum(5, 6, printTong);

// //settimeout()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let filter = arr.filter((i, d) => {
// //     console.log(`>>>Check item: ${i}, index: ${d}`);
// //     return i && i > 5;
// // });
// // console.log(filter);
// let filter = arr.find((i, d) => {
//     // console.log(`>>>Check item: ${i}, index: ${d}`);
//     return i && i === 5;
// });
// console.log(filter);

// let filter = arr.filter((x) => x && x > 5 && x < 7);
// console.log(filter);

// let mapArr = arr.map((item, index) => {
//     return item * item;
// });
// console.log(mapArr);

// let map2Arr = arr.map((x) => x * x);
// console.log(map2Arr);

// let reduce = arr.reduce((item, index) => {
//     return item + 1;
// });

// console.log(reduce);
