function checkUsername() {

    var username = document.getElementById("loginUsernameID");
    var usernamePattern = /[\w]{6,}/;
    if(usernamePattern.test(username))
    {
        console.log("Matched");
        
    }
    else
    {
        console.log("Not Matched");
    }
}

function checkPassword()
{
    var password = document.getElementById("passwordID");

}