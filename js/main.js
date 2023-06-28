let firstName = document.getElementById("firstName") ;
let YourEmail = document.getElementById("YourEmail") ;
let password  = document.getElementById("password") ;

let userData ;

if(localStorage.getItem("userinfo") == null)
{
    userData = [] ;
} else {
    userData = JSON.parse(localStorage.getItem("userinfo")) ;
}
 function signUp() {

    userInputsValidation() ;
    IsExist() ;
    if(userInputsValidation() == true && IsExist() ==  false) 
    {
        let user = 
        {
            name  : firstName.value ,
            email : YourEmail.value ,
            password: password.value ,
        };
        userData.push(user) ;
        localStorage.setItem("userinfo" , JSON.stringify(userData)) ;
        let confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none" , "d-block") ;
    } 
    else {
        let tryAgainMsg = document.getElementById('tryAgainMsg') ;
        tryAgainMsg.classList.replace("d-none" , "d-block") ;
    }
   
};


// validateUserName
function validateUserName() 
{
    let usernameAlert = document.getElementById("usernameAlert") ;
    let regex = /^[A-Za-z]{3,15}(\s?[A-Za-z]{3,15})?$/ ;
    if(regex.test(firstName.value) == true && firstName.value !="") {
        firstName.classList.add('is-valid') ;
        firstName.classList.remove('is-invalid') ;
        usernameAlert.classList.replace('d-block' , 'd-none') ;
        return true ;
    } 
    else {
        firstName.classList.add('is-invalid') ;
        firstName.classList.remove('is-valid') ;
        usernameAlert.classList.replace('d-none' , 'd-block') ;
        return false ;
    }
}


// validateUserEmail
function validateUserEmail() 
{
    let userEmailAlert = document.getElementById("userEmailAlert") ;
    let regex = /@[a-z]{4,19}(\.com)$/ ;
    if(regex.test(YourEmail.value) == true && YourEmail.value !="") {
        YourEmail.classList.add('is-valid') ;
        YourEmail.classList.remove('is-invalid') ;
        userEmailAlert.classList.replace('d-block' , 'd-none') ;
        return true ;
    } 
    else {
        YourEmail.classList.add('is-invalid') ;
        YourEmail.classList.remove('is-valid') ;
        userEmailAlert.classList.replace('d-none' , 'd-block') ;
        return false ;
    }
}



// validateUserPassword
function validateUserPassword() 
{
    let userPasswordAlert = document.getElementById("userPasswordAlert") ;
    let regex = /^.{5,19}/ ;
    if(regex.test(password.value) == true && password.value !="") {
        password.classList.add('is-valid') ;
        password.classList.remove('is-invalid') ;
        userPasswordAlert.classList.replace('d-block' , 'd-none') ;
        return true ;
    } 
    else {
        password.classList.add('is-invalid') ;
        password.classList.remove('is-valid') ;
        userPasswordAlert.classList.replace('d-none' , 'd-block') ;
        return false ;
    }
}
function userInputsValidation() {
    validateUserName() ;
    validateUserEmail() ;
    validateUserPassword() ;

    if(validateUserName() == true && validateUserEmail() == true && validateUserPassword() == true )
    {
        return true ;
    }
     else {
        return false ;
     }
}

function IsExist() {
    let accountExistMsg = document.getElementById("accountExistMsg") ;
    for(let i = 0 ; i < userData.length ; i++ ) {
        if(userData[i].name.toLowerCase() == firstName.value.toLowerCase() || 
        userData[i].email.toLowerCase() == YourEmail.value.toLowerCase()) {
            firstName.classList.remove("is-valid") ;
            YourEmail.classList.remove("is-valid") ;
            password.classList.remove("is-valid") ;
            accountExistMsg.classList.replace("d-none" , "d-block");
            return true ;
           }
    }
    return  false ;
}

 
  function login(){
    let loginEmail = document.getElementById("loginEmail") ;
    let loginPassword = document.getElementById("loginPassword") ;
    let wrongMsg = document.getElementById("wrongMsg");
    let loginBtn = document.getElementById("loginBtn") ;
    if(loginEmail.value == "" || loginPassword.value == "" ) 
    {
        let fillMsg = document.getElementById("fillMsg") ;
        fillMsg.classList.replace("d-none" , "d-block") ;
        return  false ;
    }


    for(let i = 0 ; i < userData.length ; i++) {
        if(userData[i].email.toLowerCase() == loginEmail.value.toLowerCase() 
        && userData[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
             loginBtn.setAttribute("href" , "home.html")
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }

}








// userData.forEach(element => {
//     if(element.name.toLowerCase() == firstName.value.toLowerCase() || 
//        element.email.toLowerCase() == YourEmail.value.toLowerCase() ||
//        element.password == password.value ) {
//         firstName.classList.remove("is-valid") ;
//         YourEmail.classList.remove("is-valid") ;
//         password.classList.remove("is-valid") ;
//         accountExistMsg.classList.replace("d-none" , "d-block");
//         return true ;
//        }
//        return  false ;
// })











