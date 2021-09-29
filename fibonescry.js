var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("Enter the num:-");
var a=0
var b=1
var i=0
while (i<num){
    c=a+b
    a=b
    b=c
    i=i+1
    console.log(b)

}
    