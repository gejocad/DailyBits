let pCorrectas = localStorage.getItem("correctas");
let pIncorrectas = localStorage.getItem("incorrectas");
let tPreguntas = localStorage.getItem("tpreguntas");


conteoRespuestas(pCorrectas, pIncorrectas, tPreguntas)

function conteoRespuestas(pCorrectas, pIncorrectas, tPreguntas){
let totalRes = document.querySelector(".totalRes")
let correct = document.querySelector(".correct")
let incorrect = document.querySelector(".incorrect")
    

    totalRes.innerHTML = tPreguntas;

    correct.innerHTML = pCorrectas;
        
    
    incorrect.innerHTML = pIncorrectas;
    
    

}