function ValidarDatos(){
    var nombre = document.getElementById("name");
    var telefono = document.getElementById("tel");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    
    if(nombre.value == ''){
        nombre.classList.remove("success");
        nombre.classList.add("error");
    }else{
        nombre.classList.remove("error");
        nombre.classList.add("success");
    }

    if(telefono.value == ''){
        telefono.classList.add("error");
    }else{
        telefono.classList.add("success");
    }

    if(email.value == ''){
        email.classList.add("error");
    }else{
        email.classList.add("success");
    }

    if(message.value == ''){
        message.classList.add("error");
    }else{
        message.classList.add("success");
    }
}