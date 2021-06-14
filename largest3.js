num1=300;
num2=110;
num3=120;
if(num1>num2 && num1>num3){
    console.log(`${num1} is largest`);

if(num2>num3)
    console.log(`${num2} is second largest`);
else
console.log(`${num3} is second largest`);
}

else if(num2>num3 && num2>num1){
    console.log(`${num2} is largest`);
if(num3>num1)
    console.log(`${num3} is second largest`);
else
console.log(`${num1} is second largest`);    
}

else if(num1==num2 & num2==num3){
    console.log(`three numbers are equal`);
}

else{
    console.log(`${num3} is largest`);
if(num2>num1)
    console.log(`${num2} is second largest`);
else
console.log(`${num1} is second largest`);
}