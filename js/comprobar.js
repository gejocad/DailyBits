var pBarras, pVida;

function comprobar(){

    let comprobarBtnCheck = ""
    comprobarBtnCheck = $('input[name="radio"]:checked').val();
    let resCorrect = document.getElementById('resCorrect').innerHTML;

if (comprobarBtnCheck == resCorrect){

    resCorrecta()

    pBarras = localStorage.getItem("barras");
    pBarras++;
    localStorage.setItem("barras", pBarras);
    if (pBarras == 10){
        ganaste()

    }



}else{

    resIncorrecta(resCorrect)

    pVidas = localStorage.getItem("vidas");
    pVidas--;
    localStorage.setItem("vidas", pVidas);
    if (pVidas == 0)
        sinVidas()
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



    function sinVidas(){
        alert ("perdiste");
        window.localStorage.clear();
        window.location.href = "home.html";
    }

    function ganaste(){
        alert ("Ganaste");
        window.location.href = "home.html";
    }