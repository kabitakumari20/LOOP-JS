var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=")
var num1=readlineSync.questionInt("enter the num=")
i=1
lcm=0
while (i>0){
    if (i%num==0 && i%num1==0){
        lcm=i
        break
    }
    i++
}
console.log(lcm)
