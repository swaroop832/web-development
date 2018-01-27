var userinput = prompt("please enter a number 1 for rock, 0 for sissors and 0.5 for paper");
var computerinput = Math.random();
console.log("computer input " + computerinput);
var comin;

if(computerinput >= 0 || computerinput <= 0.3 ){

    comin =0;

}else if( computerinput >= 0.3 || computerinput <= 0.65 ) {

    comin =  0.5;

} else {

    comin = 1;
}


if(userinput === comin){
    console.log(" it is tie")
}else if(userinput === 1 && comin === 0  ){
    console.log("user won because rock beat scissors")
}else if(userinput ===1 && comin=== 0.5 ){
    console.log(("computer win because paper beats rock"))
}else if(userinput === 0.5 && comin === 1  ){

    console.log("user won because rock beat scissors")
}else if(userinput ===0.5 && comin=== 0 ) {
    console.log(("computer win because scissors beat rock"))
}
