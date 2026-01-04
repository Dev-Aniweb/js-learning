// electric bill .
let unit=Number(prompt("enter your unit"));
let amt=0;
if(unit>400){
    amt= amt+(unit-400)*13;
    unit=400;
}
if(unit>200 && unit<=400){
    amt= amt+(unit-200)*8;
    unit=200;
}
if (unit>100 && unit<=200){
    amt= amt+(unit-100)*6
    unit=100;
}
amt += unit*4;
console.log(amt);