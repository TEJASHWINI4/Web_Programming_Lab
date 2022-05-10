enc = (str, sft) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let ele = (str[i].charCodeAt()) + sft;
        if (ele > 122) {
            ele = 96 + (ele - 122);
        }
        res = res + String.fromCharCode(ele);


    }
    console.log(res);
}

let str = prompt("enter the string");
let sft = parseInt(prompt("enter the shift pattern"));

enc(str, sft);