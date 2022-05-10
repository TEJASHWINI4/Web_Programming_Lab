diserium = (n) => {
    let count = 0;
    let temp = n;
    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }
    n = temp;
    let res;
    let sum = 0;
    while (count > 0) {
        res = n % 10;
        sum = sum + Math.pow(res, count);
        count--;
        n = parseInt(n / 10);
    }
    return sum;
}

let n = prompt("enter the elements");
let res = diserium(n);
if (res == n) {
    console.log("it is a disarium");
} else {
    console.log("it is not a disarium");
}