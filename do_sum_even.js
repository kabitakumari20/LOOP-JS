i=0
sume=0
sumo=0
do{
    if (i%2==0){
        sume=sume+i
    }
    else {
        sumo=sumo+i
    }
    i++
} while(i<=30)
console.log(sume,"even")
console.log(sumo,"odd")