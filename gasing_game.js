var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=");
i=0
my_gas=5
while (i<=10){
    if (my_gas>num){
        console.log(num ,"less than from my_gas ")
        break
    }
    else if (my_gas<num){
        console.log(num,"num is grater")
        break
    }
    else{
        console.log("both are equal")
        break
    }
    i=i+1
}