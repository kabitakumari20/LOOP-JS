var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=")
i=1
f=1
while (i<=num){
    f=f*i
    i++
}
console.log(f)
