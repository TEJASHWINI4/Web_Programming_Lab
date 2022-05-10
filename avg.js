even_ar = (arr, n) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

let n = prompt("enter the elements:");
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("enter the numbers"));
}
let res = even_ar(arr, n);
console.log(res);