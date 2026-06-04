

var fruits = ['apple', 'strawberry', 'grape', 'peach', 'banana', 'orange', 'melon', 'kiwi', 'mango', 'blueberry'];
console.log(fruits);

console.log(fruits[3]);

var average_age = [10, 20, 30, 40, 50, 60];

fruits.push('mellon');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('pineapple');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(0, 2, 'orges');
console.log(fruits);

console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));

var students = ['John', 'Drin', 'Alex', 'Emily', 'Sarah', 'Michael', 'Jessica', 'David', 'Daniel', 'Sophia'];

var [s1, s2, s3] = students;

var [first, second, third, ...others] = students;

console.log(s1);
console.log(first);



var ages = [25, 30, 35];
var [a1, a2, a3] = ages;
console.log((a1 + a2 + a3) / 3);
