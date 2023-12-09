console.log("hello, world!");
console.log(`hello`.toUpperCase());

let a = 1;
let b = 5;
let c = 6.9;
let d = '5';

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

console.log(d === b);
let h = d;
console.log('h: ', typeof h);
let e = Number(d);
console.log('e: ', typeof(e));

let f = +d;
console.log('f: ', typeof(f));

//Templete String!
let nguoiyeu = "Hân";
console.log(`Hello ${nguoiyeu}`);


// Object !!

let Han = {
    name: 'Han',
    address: 'Can Tho'

};

console.log('Ai, ', Han.name, '\nDia chi: ', Han.address);
let temp = 'ThanhToan';
console.log('Type of Object: ', Han);
console.log('Type of temp: ', temp);


 a = 'name';
 Han[a] = 'Toan';
console.log('Ai, ', Han.name, '\nDia chi: ', Han.address);
console.log('Ai, ', Han[a], '\nDia chi: ', Han['address']);

