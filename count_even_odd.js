var readlineSync=require("readline-sync"); 
var num=readlineSync.questionInt("enter the num=")
i=1
count_e=0
count_o=0
while(i<=num){
    if(i%2==0){
        count_e=count_e+1
    }
    else{
        count_o=count_o+1
    }
    i++

}
console.log(count_e,"even")
console.log(count_o,"odd")