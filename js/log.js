function functionSubmit(e){
    e.preventDefault();
 }

function login(){

    
    
    let correo = "francisco.javier@gmail.com", correoing = document.getElementById('correoing').value;

    localStorage.setItem("correo", correo);
    
    if (correo == correoing){
        
        window.location.href = "home.html";
    }else{
        alert ("ingrese un correo valido. Pr favor ingrese francisco.javier@gmail.com");
    }

}

