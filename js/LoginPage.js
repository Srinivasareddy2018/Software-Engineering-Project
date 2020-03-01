function checkUsername() {

    
    //WarningMessage
    var warningMessage = document.getElementById('warningMessage');

    //Username Element
    var username = document.getElementById('loginUsernameID');

    //Username Value(String)
    var usernameValue = username.value;

    //FIXME: Fix this Regular Expressions
    //Username Pattern(Regular Expression)
    var usernamePattern = /^[a-z]{6,}[0-9]{0,9}$/; 

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

// function checkname(usern)
// {
//     usern.id
// }


//FIXME: check regular expressions
// function checkPassword()
// {
//     //Password
//     var password = document.getElementById("passwordID");

//     //Password Regular Expression
//     var passwordPattern = /\w/ ;

//     if(passwordPattern.test(password))
//     {
//         console.log("Password Matched");
//     }
//     else{
//         console.log("Password Not Matched");
//     }
// }