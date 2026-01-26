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

let n=Number(prompt(" enter your number "));
if(isNaN(n)){
    console.log(" invalid number ")

}
else{
   
     if(n>0){

        
        let primehai =true;
        for(let i=2 ;i<=n/2;i++){
            if(n%i===0){

                primehai = false;
                break;
            }
        
        }
      
       console.log(primehai);
      

    }
    else{
        console.log("number is neagative")
    }
}
