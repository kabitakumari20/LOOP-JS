var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter num=")
i=1
while (i<=num){
    if (i%3==0 && i%5==0){
        console.log("fizzvuzz")
    }
    else if (i%3==0){
        console.log("fizz")
    }
    else if (i%5==0){
        console.log("vuzz")
    }
    else{
        console.log(i)
    }
    i=i+1
}