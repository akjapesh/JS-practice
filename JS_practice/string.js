var str="hello world!!"
var str2=str.match('w');
console.log(str2);
var str3=str.split(' ');
console.log(str3);

var str4="  "+str+"   ";
str4=str4.trimLeft();
console.log(str4,str4.length);