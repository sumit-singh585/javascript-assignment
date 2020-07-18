function brickCalculator(num){
    const feet=1000;
    let val1;
    let val2;
    let val3;
    if(num<=10)
    {
        val1=15*feet*num;
        return val1;
    }
    else if(num<=20)
    {
        val2=(15*feet+12*feet)*num;
        return val2;
    }
    else{
        val3=(10*feet+12*feet+15*feet)*num;
        return val3;
    
    }
}
let brickNumber=25;
let total=brickCalculator(brickNumber);
console.log(total);