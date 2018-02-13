function res1() {

    var resid = document.getElementById("resid").value;
    localStorage.setItem("resid",resid);
    var name = document.getElementById("name").value;
    localStorage.setItem("name",name);
    var respass = document.getElementById("respass").value;
    localStorage.setItem("respass",respass);
    console.log(respass);
    $("#logintxt").text("Registration done, enter details to login");
}

function login1() {

    var loginid =  document.getElementById("loginid").value;
    var pass = document.getElementById("pass").value;

    var loginid1 = localStorage.getItem("resid");
    var pass1 = localStorage.getItem("respass");
    var name = localStorage.getItem("name");

    if((loginid === loginid1) && (pass === pass1)){

        window.location.href = "home.html";

    }else {

        $("#logintxt").text("No user found, Please register to continue");
    }

}




