function onsubmit1() {

    var coursecareer = document.getElementById("coursecareer");
    var semester = document.getElementById("semester");
    var careeroption = document.getElementById("careeroption");
    var name = document.getElementById("name");
    myStorage = window.localStorage;
    localStorage.setItem("coursecareer", coursecareer.value);
    localStorage.setItem("semester", semester.value);
    localStorage.setItem("careeroption", careeroption.value);
    localStorage.setItem("name",name.value);
   window.location.href ="courses.html";

}

