var g1 = localStorage.getItem("s1");
var g2 = localStorage.getItem("s2");
var g3 = localStorage.getItem("s3");
var g4 = localStorage.getItem("s4");
var g5 = localStorage.getItem("s5");
var g6 = localStorage.getItem("s6");
var g7 = localStorage.getItem("s7");
var g8 = localStorage.getItem("s8");
var g9 = localStorage.getItem("s9");
var g10 = localStorage.getItem("s10");
var g11 = localStorage.getItem("s11");

var j1 = parseInt(localStorage.getItem("i1"));
var j2 = parseInt(localStorage.getItem("i2"));
var j3 = parseInt(localStorage.getItem("i3"));
var j4 = parseInt(localStorage.getItem("i4"));
var j5 = parseInt(localStorage.getItem("i5"));
var j6 = parseInt(localStorage.getItem("i6"));
var j7 = parseInt(localStorage.getItem("i7"));
var j8 = parseInt(localStorage.getItem("i8"));
var j9 = parseInt(localStorage.getItem("i9"));
var j10 = parseInt(localStorage.getItem("i10"));
var j11 = parseInt(localStorage.getItem("i11"));

if(j1 !==0){

document.getElementById("seatsav").innerText = g1;

}else if((j2!==0)){
    document.getElementById("seatsav").innerText = g2;

}else if(j3!==0){
    document.getElementById("seatsav").innerText = g3;

}else if(j4!==0){
    document.getElementById("seatsav").innerText = g4;

}else if(j5!==0){
    document.getElementById("seatsav").innerText = g5;

}else if(j6!==0){
    document.getElementById("seatsav").innerText = g6;

}else if(j7!==0){
    document.getElementById("seatsav").innerText = g7;

}else if(j8!==0){
    document.getElementById("seatsav").innerText = g8;

}else if(j9!==0){
    document.getElementById("seatsav").innerText = g9;

}else if(j10!==0){
    document.getElementById("seatsav").innerText = g10;

}else if(j11!==0){
    document.getElementById("seatsav").innerText = g11;

}


function confirm1(){



    if( (j1)!==0){

        if(g1 === 0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else {

            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g1-1;
            localStorage.setItem("final1",g1-1);
        }


    }else if((j2!==0)){

        if(g2===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";
        }else {
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g2-1;
            localStorage.setItem("final2",g2-1);

        }


    }else if(j3!==0){

        if(g3===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else {

            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g3-1;
            localStorage.setItem("final3",g3-1);

        }



    }else if(j4!==0){

        if(g4===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else{
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g4-1;
            localStorage.setItem("final4",g4-1);
        }


    }else if(j5!==0){

        if(g5===0){
            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else{
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g5-1;
            localStorage.setItem("final5",g5-1);

        }


    }else if(j6!==0){

        if(g6===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";
        }else{

            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g6-1;
            localStorage.setItem("final6",g6-1);
        }


    }else if(j7!==0){
        if(g7===0){
            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else{
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g7-1;
            localStorage.setItem("final7",g7-1);
        }


    }else if(j8!==0){

        if(g8===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else{
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g8-1;
            localStorage.setItem("final8",g8-1);
        }


    }else if(j9!==0){

        if(g9===0){
            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";

        }else {
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g9-1;
            localStorage.setItem("final9",g9-1);
        }


    }else if(j10!==0){

        if(g10===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";
        }else{
            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g10-1;
            localStorage.setItem("final10",g10-1);

        }


    }else if(j11!==0){

        if(g11===0){

            document.getElementById("success").innerText= " Registration is unsuccessful!" + "Seats are full";
        }else{

            document.getElementById("success").innerText= " Registration is successful!";
            document.getElementById("seatsRe").innerText = g11-1;
            localStorage.setItem("final11",g11-1);

        }


    }

}

