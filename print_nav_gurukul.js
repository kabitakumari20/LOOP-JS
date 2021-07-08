var readlineSync=require("readline-sync"); 
var num=readlineSync.questionInt("enter the num=")
i=1
while (i<=num){
    if (i%3==0 && i%7==0){
        console.log("navgurukul")
    }
    else if  (i%3==0){
        console.log("nav")
    }
    else if (i%7==0){
        console.log("gurukul")
    }
    else{
        console.log(i)
    }
    i++
}