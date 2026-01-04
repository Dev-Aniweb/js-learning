//discount
let amount = Number(prompt("enter your amount"));

// if(amount>0 && amount<=5000){
//     console.log(amount);
// }
// else if(amount>=5000 && amount<=7000){
//     console.log(amount - Math.floor((5*amount)/100));
// }
// else if(amount>7000 && amount<=9000){
//     console.log(amount - Math.floor((10*amount)/100));
// }
// else if(amount>9000){
//     console.log(amount - Math.floor((20*amount)/100));
// }
// else{
//     console.log("wrong input ");
// }

//optmize code this way 
let dis=0;
if(amount>0 && amount<=5000){
    dis=0;
}
else if(amount>=5000 && amount<=7000){
    dis=5;
}
else if(amount>7000 && amount<=9000){
   dis=10;
}
else if(amount>9000){
    dis=20;
}
else{
    console.log("wrong input ");
}
 console.log(amount - Math.floor((dis*amount)/100));