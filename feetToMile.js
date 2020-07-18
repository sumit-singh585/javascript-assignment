function feetToMile(num){
    return num/5280;
}
let feet=10000;
let mile=feetToMile(feet);
let ans=parseInt(mile); //this function will convert any value to an integer 
console.log(ans);