avgs = (arr, n) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    sum = sum / n;
    return sum;
}


let n = prompt("enter the elements:");
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("enter the numbers"));
}
let res = avgs(arr, n);
alert(res);