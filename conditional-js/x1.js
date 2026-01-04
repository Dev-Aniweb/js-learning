let ans = Number(prompt("enter  your age "));
if (isNaN(ans)){
    console.log("wrong input entered");
}
else if (ans>=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}