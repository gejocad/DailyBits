var pBarras, pVida, pCorrectas, pIncorrectas, tPreguntas;


function comprobarOrde(){

    let resCorrect = localStorage.getItem("btn-Correct")
    let respuestasOrdenadas = localStorage.getItem("btn-Click")


    if (respuestasOrdenadas == resCorrect){
        resCorrecta()

    pBarras = localStorage.getItem("barras");
    pCorrectas = localStorage.getItem("correctas");
    tPreguntas = localStorage.getItem("tpreguntas");
    pBarras++;
    pCorrectas++;
    tPreguntas++;

    localStorage.setItem("barras", pBarras);
    localStorage.setItem("correctas", pCorrectas);
    localStorage.setItem("tpreguntas", tPreguntas);
    if (pBarras == 10){
        ganaste()

    }
    }else{
        resIncorrecta(resCorrect)

    pVidas = localStorage.getItem("vidas");
    pIncorrectas = localStorage.getItem("incorrectas");
    tPreguntas = localStorage.getItem("tpreguntas");
    pVidas--;
    pIncorrectas++;
    tPreguntas++;
    localStorage.setItem("vidas", pVidas);
    localStorage.setItem("incorrectas", pIncorrectas);
    localStorage.setItem("tpreguntas", tPreguntas);
    if (pVidas == 0)
        perdiste()
}
    
  
  }




function comprobar(){

    let comprobarBtnCheck = "", resCorrect = "";
    comprobarBtnCheck = $('input[name="radio"]:checked').val();
    resCorrect = document.getElementById('resCorrect').innerHTML;
    
if (comprobarBtnCheck == resCorrect){

    resCorrecta()

    pBarras = localStorage.getItem("barras");
    pCorrectas = localStorage.getItem("correctas");
    tPreguntas = localStorage.getItem("tpreguntas");
    pBarras++;
    pCorrectas++;
    tPreguntas++;

    localStorage.setItem("barras", pBarras);
    localStorage.setItem("correctas", pCorrectas);
    localStorage.setItem("tpreguntas", tPreguntas);
    if (pBarras == 10){
        ganaste()

    }

}else{

    resIncorrecta(resCorrect)

    pVidas = localStorage.getItem("vidas");
    pIncorrectas = localStorage.getItem("incorrectas");
    tPreguntas = localStorage.getItem("tpreguntas");
    pVidas--;
    pIncorrectas++;
    tPreguntas++;
    localStorage.setItem("vidas", pVidas);
    localStorage.setItem("incorrectas", pIncorrectas);
    localStorage.setItem("tpreguntas", tPreguntas);
    if (pVidas == 0)
        perdiste()
}

}




function resCorrecta(){

let correct = document.querySelector(".correct")

correct.innerHTML = ''

correct.innerHTML +=  `
<div class="pregunta-correcta">
    <label class="mensaje-correcto">¡Buen trabajo!</label>
    <button id="run" type="submit" class="continuar-correcto" onclick="continuar()">CONTINUAR</button>
</div> `
}

function resIncorrecta(resCorrect){

    let incorrect = document.querySelector(".incorrect")
    
    incorrect.innerHTML = ''
    
    incorrect.innerHTML +=  `
    <div class="pregunta-incorrecta">
        <label class="mensaje-incorrecto">La respuesta correcta es:</label>
        <label class="correccion">${resCorrect}</label>
        <button id="run" type="submit" class="continuar-incorrecto" onclick="continuar()">CONTINUAR</button>
    </div> `
    }

    function continuar(){
        window.location.reload();
    }



    function perdiste(){

        localStorage.setItem('barras', 0);
        localStorage.setItem('vidas', 4); 
        alert ("perdiste");
        window.location.href = "home.html";
    }

    function ganaste(){
        
        localStorage.setItem('barras', 10);
        localStorage.setItem('vidas', 4); 
        alert ("Ganaste");
        window.location.href = "home.html";
    }