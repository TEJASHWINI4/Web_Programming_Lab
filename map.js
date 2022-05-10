let n = prompt("enter the lenght of array");

let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("enter the elements"));
}
let res = arr.map((x) => x * 10);
console.log(res);