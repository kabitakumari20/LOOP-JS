var hig=24;
var counter = 0;
var primeNumbers = "Prime Numbers: ";
for(var low=2; low<=hig; ++low)
{
    counter=0;
    for(var j=2; j<=hig; ++j)
    {
        if(low>=j && low%j == 0)
        {
            ++counter;
        }

    }
    if(counter == 1)
        {
            primeNumbers = primeNumbers + low + "  ";
        }

}
console.log(primeNumbers);
