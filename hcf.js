var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=");
var num1=readlineSync.questionInt("enter the num=")
i=1
var hcf=0
while(i<num1){
    if (num%i==0 && num1%i==0){
        hcf=i
    }
    i=i+1
}
console.log(hcf)