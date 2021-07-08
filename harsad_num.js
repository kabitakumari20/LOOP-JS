var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the num=");
var sum=0
var rem=0
var check=num
var len=num.toString().length
while (num!=0){
    rem=num%10
    sum=sum+rem
    num=parseInt(num/10)
}
if (check%sum==0){
    console.log(check,"it is harsad num")
}
else{
    console.log(check,"it is not harsa num")
}
