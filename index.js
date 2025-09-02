document.getElementById("passbutton").addEventListener("click",changeTextToPass)
const password = document.getElementById("password")
function changeTextToPass() {
    if(password.type == 'password'){
        password.type = 'text';
        document.getElementById("passbutton").style.color = '#463774';
    }else{
        password.type = 'password';
        document.getElementById("passbutton").style.color = '#6D54B5';
    }
}

//do the login button function 