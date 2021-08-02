import preguntasSelecDB from './preguntasSelecDB.js'; 

var respuestasOrdenadas = [];

//codigo preguntaordenar
preguntasOrdenar()

function preguntasOrdenar(){

document.querySelector("#listarBoton1").addEventListener('click', function () {


  let btn1 = document.querySelector(".boton1")

  btn1.innerHTML = ""


btn1.innerHTML  += `<img class="resp_etq" src="./img/btn-html-1.png" alt="">`


})

document.querySelector("#listarBoton2").addEventListener('click', function () {

  let btn2 = document.querySelector(".boton2")

  btn2.innerHTML = ""


btn2.innerHTML  += `<img class="resp_etq" src="./img/btn-html-2.png" alt="">`
})  

  

document.querySelector("#listarBoton3").addEventListener('click', function () {

  let btn3 = document.querySelector(".boton3")

  btn3.innerHTML = ""


btn3.innerHTML  += `<img class="resp_etq" src="./img/btn-html-3.png" alt="">`

})


document.querySelector("#listarBoton4").addEventListener('click', function () {

  let btn4 = document.querySelector(".boton4")

  btn4.innerHTML = ""


btn4.innerHTML  += `<img class="resp_etq" src="./img/btn-html-4.png" alt="">`

})

document.querySelector("#listarBoton5").addEventListener('click', function () {
  
  let btn5 = document.querySelector(".boton5")

  btn5.innerHTML = ""


btn5.innerHTML  += `<img class="resp_etq" src="./img/btn-html-5.png" alt="">`

})
}

//fin curso preguntas ordenamiento


//localStorage.setItem("barras", 0);

signosVitales()

function signosVitales(){

  var vidas = localStorage.getItem("vidas");  
  var barras = localStorage.getItem("barras");  
  
  if (vidas > 0){
  let vida = document.querySelector(".vida")
  
  vida.innerHTML =''
  
  vida.innerHTML += `<img src="img/corazon.png" alt=""> ${vidas}`
  
  }else{
    let vida = document.querySelector(".vida")
    localStorage.setItem('vidas', 4);

  vida.innerHTML =''
  
  vida.innerHTML += `<img src="img/corazon.png" alt=""> 4`
  }
  
  
  
  if (barras >= 0){
  
    let barra = document.querySelector(".barra")
    barra.innerHTML =''
    
    barra.innerHTML += `<img src="img/Progress=${barras}.png" alt="">`;
  
  
    }else if(barras > 10){

    let barra = document.querySelector(".barra")
    barra.innerHTML =''
    
    barra.innerHTML += `<img src="img/Progress=10.png" alt="">`;

    }else{
    let barra = document.querySelector(".barra")
    barra.innerHTML =''
    
    localStorage.setItem('barras', 0);    
    barra.innerHTML += `<img src="img/Progress=0.png" alt="">`;
    }
  
  
preguntaAleatoreaSelect()
}




function preguntaAleatoreaSelect(){


var id = Math.floor(Math.random() * 4);

console.log(id)

mostrarPreguntaSelec(id)

}

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
resCorrect.innerHTML = preId.resCorrect


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

