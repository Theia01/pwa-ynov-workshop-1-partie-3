// get elements
let formLogin = document.getElementById('login');
let formLoginEmail = document.getElementById('email');
let formLoginPassword = document.getElementById('password');
let json = require('db.json');

//login
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    $.getJSON("test.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
    // if(checkValuesLogin()){
    // }

});

function checkValuesLogin(){
    if(formLoginEmail.value != ""){
        return false;
    }else if(formLoginPassword.value != ""){
        return false;
    }else{
        return true;
    }
}

  
//connect to json
//add cookies

//register 
//write in json

//link register

