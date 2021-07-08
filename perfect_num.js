var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter any num=");
var i=0
var sum=0
while (i<num){
    if (num%i==0){
        sum=sum+i
    }
    i++
}
if (sum==num){
    console.log(num,"it is perfect num")
}
else {
    console.log(num,"it is not perfect num")
}