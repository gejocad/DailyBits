function functionSubmit(e){
    e.preventDefault();
 }

function login(){

    
    
    let correo = "francisco.javier@gmail.com", correoing = document.getElementById('correoing').value;
    
    if (correo == correoing){
        window.location.href = "home.html";
    }else{
        alert ("ingrese un correo valido");
    }

}

