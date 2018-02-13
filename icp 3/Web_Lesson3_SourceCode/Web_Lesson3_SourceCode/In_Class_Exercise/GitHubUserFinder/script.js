function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)

    var xhttp= new XMLHttpRequest();
    xhttp.open('GET', "https://api.github.com/users/"+user, false);
    xhttp.send();
    return xhttp;
}

function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
console.log(user.name);
$("#username1").text(user.name);
$("#userid").text(user.id);
$("#information").text(user.url);
$("#image").attr("src",user.avatar_url);
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#profile").text("Enter different user name");
    $("#nouser").text("No such user ")

}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            console.log("hi");
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
                console.log("success");
            } else {
                noSuchUser(username);
            }
        }
    })
});
