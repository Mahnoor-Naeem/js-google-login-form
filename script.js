let email = "mnq@gmail.com";
let pass = "123";


function hasEmail(){
    let isEmail = document.querySelector('#email').value;

    if(isEmail==email){
        window.location='login-password.html';
    }
    else{
        document.querySelector('.hidden-text').innerHTML = 'Please Enter Your Correct Email';
    }
}

function hasPassword(){
    let isPass = (document.querySelector('#pass').value);

    if(isPass==pass){
        window.location='login-welcome.html';

    }
    else{
        document.querySelector('.hidden-text').innerHTML = 'Plaase Enter Your Correct Password';
    }
}