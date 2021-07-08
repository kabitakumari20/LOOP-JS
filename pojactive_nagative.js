var readlineSync=require("readline-sync")
var num=readlineSync.questionInt("num=")
if (num>0){
    console.log("positive")

}    
else if( num<0){
    console.log("nagative")
}
else{
    console.log("zero")
}

