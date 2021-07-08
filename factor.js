var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=")
i=1
while (i<=num){
    if (num%i==0){
        console.log(i)
    }
    i++
}


