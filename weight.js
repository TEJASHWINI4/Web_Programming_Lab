we = (n) => {
    if (n < 150) {
        return "obese";
    }
    if (n > 100 && n < 150) {
        return "ok";
    }
    if (n < 100) {
        return "underweight";
    }
}

let n = prompt("enter the elements");
n = n * 2.2;
let res = we(n);
console.log(res);