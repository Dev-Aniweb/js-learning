// console.log("hellow world ");
//loop= (forloop)
// for(let i=1;i<100;i++){
//     console.log(i);
// }
//  for(let j=100 ;j>0;j--){
//     console.log(j);

//  }


// find addition of natural number 

// let n=Number(prompt(" enter your number "));
// if(isNaN(n)){
//     console.log(" invalid number ")

// }
// else{
   
//      if(n>0){

//         let sum=0;
//         for(let i=1 ;i<=n;i++){
//             sum=sum+i;

//         }
//         console.log(sum)
        

//     }
//     else{
//         console.log("number is neagative")
//     }
// }
//find factroial of given number 
// let n=Number(prompt(" enter your number "));
// if(isNaN(n)){
//     console.log(" invalid number ")

// }
// else{
   
//      if(n>0){

//         let fact=1;
//         for(let i=1 ;i<=n;i++){
//             fact=fact*i;

//         }
//         console.log(fact)
        

//     }
//     else{
//         console.log("number is neagative")
//     }
// }

//find factor of given number 
// let n=Number(prompt(" enter your number "));
// if(isNaN(n)){
//     console.log(" invalid number ")

// }
// else{
   
//      if(n>0){

        
//         for(let i=1 ;i<=n/2;i++){
//            if(n%i===0){
//             console.log(i)
//            }
           
//         }
//         console.log(n)
       
        

//     }
//     else{
//         console.log("number is neagative")
//     }
// }


//prime num hai ya nhi 

// let n=Number(prompt(" enter your number "));
// if(isNaN(n)){
//     console.log(" invalid number ")

// }
// else{
   
//      if(n>0){

        
//         let primehai =true;
//         for(let i=2 ;i<=n/2;i++){
//             if(n%i===0){

//                 primehai = false;
//                 break;
//             }
        
//         }
      
//        console.log(primehai);
      

//     }
//     else{
//         console.log("number is neagative")
//     }
// }



//while loop

// let n= Number (prompt("enter a number "));
// let sum=0;
// while(n>0){
//     let rem= n%10;
//     sum =sum+rem;
//     n=Math.floor(n/10);

// }
// console.log((sum));

//reverseee

// let n= Number (prompt("enter a number "));
// let rev=0;
// while(n>0){
//     let rem= n%10;
//     rev =rev*10+rem;
//     n=Math.floor(n/10);

// }
// console.log((rev));

// find strong number 


// let n= Number (prompt("enter a number "));
// let sum=0;
// let copy=n;
// while(n>0){
//     let rem= n%10;
//     let fact=1
//     for(let i=1 ;i<=rem;i++){
//        fact= fact*i;
//     }
//     sum=sum+fact
//     n=Math.floor(n/10);

// }
// if(copy===sum){
//     console.log("strong")
// }
// else {
//     console.log("not strong")
// }


// guss the number 

let random= Math.floor(Math.random()*100+1);

let guess=0;
while(guess !== random){
guess=Number(prompt("enter a number "))
    if(isNaN(guess)|| guess>100|| guess<1){
    console.log("enter numer 1 to 100 b/w ")
    continue;
}
if(guess>random) {
    console.log("number is to high")
    }
else if(guess<random){
    console.log("number is too low")
}
else{
    console.log("you find the number " , guess);
}
}


