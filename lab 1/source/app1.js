var coursecareer1= localStorage.getItem("coursecareer");
console.log(coursecareer1);
var semester1= localStorage.getItem("semester");
console.log(semester1);
var careeroption1= localStorage.getItem("careeroption");
console.log(careeroption1);
var name1 = localStorage.getItem("name");
console.log(name1);


window.localStorage;
var gfinal1=localStorage.getItem("final1");
document.getElementById("s1").innerText=gfinal1;
var gfinal2 =localStorage.getItem("final2");
document.getElementById("s2").innerText = gfinal2;
gfinal3 = localStorage.getItem("final3");
document.getElementById("s3").innerText = gfinal3;
var gfinal4 =localStorage.getItem("final4");
document.getElementById("s4").innerText = gfinal4;
var gfinal5 = localStorage.getItem("final5");
document.getElementById("s5").innerText = gfinal5;
var gfinal6= localStorage.getItem("final6");
document.getElementById("s6").innerText = gfinal6;
var gfinal7 = localStorage.getItem("final7");
document.getElementById("s7").innerText = gfinal7;
var gfinal8 = localStorage.getItem("final8");
document.getElementById("s8").innerText = gfinal8;
var gfinal9 = localStorage.getItem("final9");
document.getElementById("s9").innerText = gfinal9;
var gfinal10 = localStorage.getItem("final10");
document.getElementById("s10").innerText = gfinal10;
var gfinal11 = localStorage.getItem("final11");
document.getElementById("s11").innerText = gfinal11;


localStorage.setItem("s1",gfinal1);
localStorage.setItem("s2",gfinal2);
localStorage.setItem("s3",gfinal3);
localStorage.setItem("s4",gfinal4);
localStorage.setItem("s5",gfinal5);
localStorage.setItem("s6",gfinal6);
localStorage.setItem("s7",gfinal7);
localStorage.setItem("s8",gfinal8);
localStorage.setItem("s9",gfinal9);
localStorage.setItem("s10",gfinal10);
localStorage.setItem("s11",gfinal11);


document.getElementById("name3").innerHTML = "welcome" +  " " +name1;

if (coursecareer1 === "Under-Graduate" && semester1 === "Spring" && careeroption1 === "Computer Science") {


     $('#course1').show(); $('#course2').show();$('#course3').show();$('#course4').hide();$('#course5').hide();$('#course6').hide();
     $('#course11').hide();$('#course7').hide();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed");

} else if(coursecareer1 === "Under-Graduate" && semester1 === "Fall" && careeroption1 === "Computer Science"){

    $('#course1').show(); $('#course2').show();$('#course3').show();$('#course4').show();$('#course5').hide();$('#course6').hide();
    $('#course11').hide();$('#course7').hide();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed3");


}else if(coursecareer1 === "Under-Graduate" && semester1 === "Summer" && careeroption1 === "Computer Science") {

    $('#course1').hide(); $('#course2').hide();$('#course3').show();$('#course4').show();$('#course5').hide();$('#course6').hide();
    $('#course11').hide();$('#course7').hide();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed4");

}else if (coursecareer1 === "Under-Graduate" && semester1 === "Spring" && careeroption1 === "Law"){


    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').show();$('#course7').hide();$('#course8').hide();$('#course9').show();$('#course10').show();
    console.log("this is printed5");


}else if(coursecareer1 === "Under-Graduate" && semester1 === "Fall" && careeroption1 === "Law"){

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').show();$('#course7').hide();$('#course8').show();$('#course9').hide();$('#course10').show();
    console.log("this is printed6");


}else if(coursecareer1 === "Under-Graduate" && semester1 === "Summer" && careeroption1 === "Law"){

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').hide();$('#course7').hide();$('#course8').hide();$('#course9').hide();$('#course10').show();
    console.log("this is printed7");


}else if(coursecareer1 === "Graduate" && semester1 === "Spring" && careeroption1 === "Computer Science"){

    $('#course1').hide(); $('#course2').hide();$('#course3').show();$('#course4').show();$('#course5').show();$('#course6').show();
    $('#course11').hide();$('#course7').hide();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed8");

}else if(coursecareer1 === "Graduate" && semester1 === "Fall" && careeroption1 === "Computer Science"){


    $('#course1').hide(); $('#course2').hide();$('#course3').show();$('#course4').hide();$('#course5').show();$('#course6').show();
    $('#course11').hide();$('#course7').show();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed9");

}
else if(coursecareer1 === "Graduate" && semester1 === "Summer" && careeroption1 === "Computer Science"){

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').show();
    $('#course11').hide();$('#course7').show();$('#course8').hide();$('#course9').hide();$('#course10').hide();
    console.log("this is printed10");

} else if(coursecareer1 === "Graduate" && semester1 === "Spring" && careeroption1 === "Law"){

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').show();$('#course7').hide();$('#course8').show();$('#course9').show();$('#course10').show();
    console.log("this is printed11");

}else if(coursecareer1 === "Graduate" && semester1 === "Fall" && careeroption1 === "Law"){

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').show();$('#course7').hide();$('#course8').show();$('#course9').show();$('#course10').show();
    console.log("this is printed12");

}else {

    $('#course1').hide(); $('#course2').hide();$('#course3').hide();$('#course4').hide();$('#course5').hide();$('#course6').hide();
    $('#course11').show();$('#course7').hide();$('#course8').show();$('#course9').hide();$('#course10').hide();
    console.log("this is printed2");
}


var i1 =0; var i2 =0; var i3 = 0; var i4 =0; var i5 = 0; var i6 = 0; var i7 = 0; var i8 = 0; var i9 = 0; var i10 = 0 ;var i11 =0;

localStorage.setItem("i1",i1);
console.log(i1);
localStorage.setItem("i2",i2);
localStorage.setItem("i3",i3);
localStorage.setItem("i4",i4);
localStorage.setItem("i5",i5);
localStorage.setItem("i6",i6);
localStorage.setItem("i7",i7);
localStorage.setItem("i8",i8);
localStorage.setItem("i9",i9);
localStorage.setItem("i10",i10);
localStorage.setItem("i11",i11);


$(document).ready(function () {
    $('#link1').each(function () {
        $(this).click(function (e) {
            i1++;
            console.log(i1);
            localStorage.setItem("i1",i1);
        });
    });
});

$(document).ready(function () {
    $('#link2').each(function () {
        $(this).click(function (e) {
            i2++;
            console.log(i2);
            console.log(i1);
            localStorage.setItem("i2",i2);
        });
    });
});
$(document).ready(function () {
    $('#link3').each(function () {
        $(this).click(function (e) {
            i3++;
            console.log(i3);
            localStorage.setItem("i3",i3);
        });
    });
});
$(document).ready(function () {
    $('#link4').each(function () {
        $(this).click(function (e) {
            i4++;
            console.log(i4);
            localStorage.setItem("i4",i4);
        });
    });
});
$(document).ready(function () {
    $('#link5').each(function () {
        $(this).click(function (e) {
            i5++;
            console.log(i5);
            localStorage.setItem("i5",i5);
        });
    });
});
$(document).ready(function () {
    $('#link6').each(function () {
        $(this).click(function (e) {
            i6++;
            console.log(i6);
            localStorage.setItem("i6",i6);
        });
    });
});

$(document).ready(function () {
    $('#link7').each(function () {
        $(this).click(function (e) {
            i7++;
            console.log(i7);
            localStorage.setItem("i7",i7);
        });
    });
});
$(document).ready(function () {
    $('#link8').each(function () {
        $(this).click(function (e) {
            i8++;
            console.log(i8);
            localStorage.setItem("i8",i8);
        });
    });
});
$(document).ready(function () {
    $('#link9').each(function () {
        $(this).click(function (e) {
            i9++;
            console.log(i9);
            localStorage.setItem("i9",i9);
        });
    });
});
$(document).ready(function () {
    $('#link10').each(function () {
        $(this).click(function (e) {
            i10++;
            console.log(i10);
            localStorage.setItem("i10",i10);
        });
    });
});
$(document).ready(function () {
    $('#link11').each(function () {
        $(this).click(function (e) {
            i11++;
            console.log(i11);
            localStorage.setItem("i11",i11);
        });
    });
});



