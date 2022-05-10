let name = "krishna";
console.log(name)
console.log("length of the string:", name.length)


let stu = "krishna,shiva,madhav";
let s1 = stu.slice(7, 11);
let s2 = stu.slice(-13, -9);
let s3 = stu.slice(-13);
let s4 = stu.slice(13);
console.log("Sliced Part=", s1);
console.log("Sliced Part=", s2);
console.log("Sliced Part=", s3);
console.log("Sliced Part=", s4);
//alert(name.slice(0, 7))
//3. substring()
let st1 = stu.substring(7, 11);
let st2 = stu.substr(7, 4);
let st3 = stu.substr(7);
let st4 = stu.substr(-7, 4);
let st5 = stu.substr(-7);
console.log("Slice Part=", st1);
console.log("Slice Part=", st2);
console.log("Slice Part=", st3);
console.log("Slice Part=", st4);
console.log("Slice Part=", st5);
//str re
let text = "Please visit to dS Lab";
let replace = text.replace(/DS/i, "Web");
console.log(replace);
//upp low
let lc = "krishna SAI";
let uc = lc.toUpperCase();
let lcc = lc.toLowerCase();
console.log(uc);
console.log(lcc);
//concat
let str1 = "krishna ";
let str2 = "shiva";
let str3 = str1 + str2;
console.log(str3)
console.log("String Concatenation=", str1.concat(" ", str2));
//trim
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
//padstart() and padend()
let text3 = "5";
let padded = text3.padStart(4, "a");
console.log(padded);
//9. charAt() and charCodeAt()
let text4 = "HELLO WORLD";
let char = text4.charCodeAt(0);
console.log(char);

let numb = 5;
let text5 = numb.toString();
let paddedd = text.padEnd(4, "0");
console.log(paddedd);