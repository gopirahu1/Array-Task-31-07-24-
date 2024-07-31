// inserting item at a specific position in array

let arr = [1, 2, 3, 4, 5];
let item = 10;
let position = 2;
arr.splice(position, 0, item);
console.log(arr);


// sorting arrays with complex object

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  people.sort((a, b) => b.name - a.name);
  console.log(people);


//finding the longest string in an array

const strings = ["apple", "banana", "cherry", "blueberry", "strawberry"];
let longestString = "";
for (let l of strings) {
    if (l.length > longestString.length) {
        longestString = l;
    }
}
console.log("Longest string:", longestString);

// Rotating an array

function rotateLeft(arr, k) {
    k = k % arr.length; 
    return arr.slice(k).concat(arr.slice(0, k));
}

function rotateRight(arr, k) {
    k = k % arr.length;  
    return arr.slice(-k).concat(arr.slice(0, -k));
}
let array1 = [1, 2, 3, 4, 5];
console.log(rotateLeft(array1, 2)); 
console.log(rotateRight(array1, 2)); 

// Generating an array of an range

let start = 0;
let end = 10;
let array = Array.from({ length: end - start }, (_, i) => start + i);
console.log(array);
start = 0;
end = 10;
let step = 2;
array = Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);
console.log(array);

