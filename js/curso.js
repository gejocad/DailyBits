import preguntasSelecDB from './preguntasSelecDB.js'; 


localStorage.setItem("petId", 0 )

var id = localStorage.getItem("petId")
mostrarPreguntaSelec(id)

function mostrarPreguntaSelec(id){

  
let avatar = document.querySelector(".avtr")
let pregunta = document.querySelector(".pregunta-txt")
let res1 = document.querySelector(".res1")
let res2 = document.querySelector(".res2")
let res3 = document.querySelector(".res3")
let resCorrect = document.querySelector (".resCorrect")

var preId = preguntasSelecDB[id];

avatar.innerHTML = ''
pregunta.innerHTML = ''
res1.innerHTML = ''
res2.innerHTML = ''
res3.innerHTML = ''
resCorrect.innerHTML = 'preId.resCorrect'


avatar.innerHTML += `
<img class="avatar " src="${preId.avatar}" alt="">
`
pregunta.innerHTML += `
<h1 class="pregunta-texto">${preId.pregunta}</h1>
`
res1.innerHTML += `
<label class="container">${preId.res1}
<input type="radio" name="radio" value="${preId.res1}">
<span class="checkmark"></span>
</label>
`
res2.innerHTML += `
<label class="container">${preId.res2}
<input type="radio" name="radio" value="${preId.res2}">
<span class="checkmark"></span>
</label>
`
res3.innerHTML += `
<label class="container">${preId.res3}
<input type="radio" name="radio" value="${preId.res3}">
<span class="checkmark"></span>
</label>
`


comprobarPregunta()
}


function comprobarPregunta(){

let comprobarBtn = document.getElementsByName('radio');



for( var i=0,il = comprobarBtn.length; i< il; i ++ ){
 comprobarBtn[i].onclick = activarComprobar;

}
}

function activarComprobar(){
  let button =  document.querySelector(".btn-active")
  button.innerHTML = ''
  button.innerHTML += `
  <button id="run" type="submit" class="comprobar-active"  onclick="comprobar()">COMPROBAR</button>
`
}

