
//To check username pattern
function checkUsername() {

    //WarningMessage
    var warningMessage = document.getElementById('warningMessage');

    //Username Element
    var username = document.getElementById('signUpUsernameID');

    //Username Value(String)
    var usernameValue = username.value;

    //FIXME: Fix this Regular Expressions
    //Username Pattern(Regular Expression)
    // var usernamePattern = /^[a-zA-Z]{6,}[0-9]{0,9}$/; 

    var usernamePattern = "/^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z0-9]){3,15}";

    //check regular expression matched or not
    if(usernamePattern.test(usernameValue))
    {
        //If Matched
        warningMessage.style.display = "none";
        console.log("Username Matched");
        
    }
    else
    {
        warningMessage.style.display = "block";
        warningMessage.innerHTML = "Please check Username";
        username.focus();
        console.log("Username Not Matched");
    }
}


//To check email pattern
function checkEmail()
{
    //WarningMessage
    var warningMessage = document.getElementById('warningMessage');

    //Get Email
    var emailID = document.getElementById('emailID');
    
    //Email String
    var emilIDvalue = emailID.value;

    //Email Pattern
    var emailPattern = /^[a-z]{3,}@gmail.com$/;

    //Check if email pattern matches or not
    if(emailPattern.test(emilIDvalue))
    {
        //Matched
        warningMessage.style.display = "none";
        console.log("Email Pattern is Okay");
    }
    else
    {
        //Not matched then show warning message
        warningMessage.style.display = "block";
        warningMessage.innerHTML = "Please check Email Value";
        emailID.focus();
        console.log("Email Not Matched");
    }
}

//Not Implemented
function checkPassword()
{
//WarningMessage
var warningMessage = document.getElementById('warningMessage');

warningMessage.innerHTML = "Not Implemented";
}


//Not Implemented
function checkTwoPasswords()
{
    //WarningMessage
var warningMessage = document.getElementById('warningMessage');

warningMessage.innerHTML = "Not Implemented";


var password = document.getElementById('passwordID').innerHTML;

var confirmPassword = document.getElementById('confirmPassword').innerHTML;


if(password.localeCompare(confirmPassword))
{
    console.log("Password Matched");
}
else{
    console.log("Password Not Matched");
}

}

//Not implemented
function checkAll()
{
    //WarningMessage
var warningMessage = document.getElementById('warningMessage');

warningMessage.innerHTML = "Not Implemented";
}