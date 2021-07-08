var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=");
var i=2
count=0
while (i<=num){
    if (num%i==0){
        count=count+1
    }
    i++
}
if (count==1){
    console.log(num,"it is prime num")
}
else{
    console.log(num,"it is not prime num")
}