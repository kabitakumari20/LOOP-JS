var readlineSync=require("readline-sync")
var num=readlineSync.question("enter the num=")
i=0
sum=0
while (i<(num.length)){
    sum=sum+Number(num[i])
    i++
}
console.log(sum)


