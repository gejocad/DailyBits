import preguntasSelecDB from './preguntasSelecDB.js'; 
import preguntasOrdeDB from './preguntasOrdeDB.js'; 

//funcion principal
ordenamientoPrincipal()

function ordenamientoPrincipal(){


  let id = Math.floor(Math.random() * 2);

  console.log(id);

  if (id == 0){

    innerBodyOrde()
    mostrarPreguntaOrde()

  }else{

    innerBodySelect()
    preguntaAleatoreaSelect()
  }


}



function innerBodyOrde(){

  let BodyOrde = document.querySelector(".pregunta-aleatoria")

  BodyOrde.innerHTML = "";

  BodyOrde.innerHTML += `<div class="progreso">
  <a href="home.html">
      <img  src="img/calcelar.png" alt="">
  </a>
  <div class="barra">
      
  </div>
  <p class="vida"></p>
</div>
<div class="pregunta">
</div>
<div class="contenedor_estr">
  <div class="primera-etq segunda-etq tercera-etq cuarta-etq quinta-etq"></div>
</div>
<div class="contenedor_etq">
</div>
<div class="btn-active correct incorrect">
<button id="run" type="submit" class="comprobar" disabled="disabled">COMPROBAR</button>
</div>`


}

function innerBodySelect(){

  let BodySelect = document.querySelector(".pregunta-aleatoria")

  BodySelect.innerHTML = "";

  BodySelect.innerHTML += `<div class="progreso">
  <a href="home.html">
      <img  src="img/calcelar.png" alt="">
  </a>
  <div class="barra">
      
  </div>
  <p class="vida"></p>
</div>
<div class="pregunta avtr pregunta-txt">
  
</div>
<a class="preguntas res1">

</a>
<a class="preguntas res2">

</a>
<a class="preguntas res3">

</a>

</div>
<div class="btn-active correct incorrect">
  <button id="run" type="submit" class="comprobar" disabled="disabled">COMPROBAR</button>
</div>

<div class="resCorrect" id="resCorrect" hidden></div>`


}

  



//codigo pregunta ordenar
var respuestasOrdenadas = [];



function mostrarPreguntaOrde(){
  
  let contenedor_etq = document.querySelector(".contenedor_etq")
  let pregunta = document.querySelector(".pregunta")
  let botones = preguntasOrdeDB[0]

  contenedor_etq.innerHTML= ''
  pregunta.innerHTML = ''

  localStorage.setItem("btn-Correct", botones.btnCorrect)

  pregunta.innerHTML += `
  <h1 class="pregunta-texto">${botones.pregunta}</h1>`

    contenedor_etq.innerHTML += `

        <button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${botones.btn1}" value="${botones.btn1}">
        </button>
        <button type="submit" class="btn-Orde" id="listarBoton2">
            <input type="image" name="botondeenvio" id="botondeenvio1" src="${botones.btn2}" value="${botones.btn2}">
        </button>
        <button type="submit" class="btn-Orde" id="listarBoton3"> 
            <input type="image" name="botondeenvio" id="botondeenvio2" src="${botones.btn3}" value="${botones.btn3}">
        </button>
        <button type="submit" class="btn-Orde" id="listarBoton4"> 
            <input type="image" name="botondeenvio" id="botondeenvio3" src="${botones.btn4}" value="${botones.btn4}">
        </button>
        <button type="submit" class="btn-Orde" id="listarBoton5">
            <input type="image" name="botondeenvio" id="botondeenvio4" src="${botones.btn5}" value="${botones.btn5}">
        </button>`

        preguntasOrdenar()
      }




function preguntasOrdenar(){

document.querySelector("#listarBoton1").addEventListener('click', function () {

let bn1 = document.getElementById('botondeenvio0').value;

respuestasOrdenadas.push(bn1);


console.log(respuestasOrdenadas);

insertar()

})

document.querySelector("#listarBoton2").addEventListener('click', function () {

  let bn2 = document.getElementById('botondeenvio1').value;

respuestasOrdenadas.push(bn2);
console.log(respuestasOrdenadas);


insertar()

})  

  

document.querySelector("#listarBoton3").addEventListener('click', function () {

  let bn3 = document.getElementById('botondeenvio2').value;

  respuestasOrdenadas.push(bn3);
  console.log(respuestasOrdenadas);
  
  
  insertar()

})


document.querySelector("#listarBoton4").addEventListener('click', function () {

  let bn4 = document.getElementById('botondeenvio3').value;

  respuestasOrdenadas.push(bn4);
  console.log(respuestasOrdenadas);
  
  
insertar()

})

document.querySelector("#listarBoton5").addEventListener('click', function () {

  let bn5 = document.getElementById('botondeenvio4').value;
  
  respuestasOrdenadas.push(bn5);
  console.log(respuestasOrdenadas);
  

  insertar()

})
}


function insertar(){
  

if (respuestasOrdenadas.length == 1){
  let insertarPreguntaOrde = document.querySelector(".primera-etq")

insertarPreguntaOrde.innerHTML = ''

insertarPreguntaOrde.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[0]}" value="${respuestasOrdenadas[0]}">
        </button> `
}else if(respuestasOrdenadas.length == 2){
  let insertarPreguntaOrde = document.querySelector(".primera-etq")
  let insertarPreguntaOrde1 = document.querySelector(".segunda-etq")

  insertarPreguntaOrde.innerHTML = ''
  insertarPreguntaOrde1.innerHTML = ''
  
  insertarPreguntaOrde.innerHTML +=  `
  <button type="submit" class="btn-Orde" id="listarBoton1">
              <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[0]}" value="${respuestasOrdenadas[0]}">
          </button> `  


insertarPreguntaOrde1.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[1]}" value="${respuestasOrdenadas[1]}">
        </button> `

}else if(respuestasOrdenadas.length == 3){
  let insertarPreguntaOrde = document.querySelector(".primera-etq")
  let insertarPreguntaOrde1 = document.querySelector(".segunda-etq")
  let insertarPreguntaOrde2 = document.querySelector(".tercera-etq")

  insertarPreguntaOrde.innerHTML = ''
  insertarPreguntaOrde1.innerHTML = ''
  insertarPreguntaOrde2.innerHTML = ''
  
  insertarPreguntaOrde.innerHTML +=  `
  <button type="submit" class="btn-Orde" id="listarBoton1">
              <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[0]}" value="${respuestasOrdenadas[0]}">
          </button> `  


insertarPreguntaOrde1.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[1]}" value="${respuestasOrdenadas[1]}">
        </button> `


insertarPreguntaOrde2.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[2]}" value="${respuestasOrdenadas[2]}">
        </button> `

}else if(respuestasOrdenadas.length == 4){
  let insertarPreguntaOrde = document.querySelector(".primera-etq")
  let insertarPreguntaOrde1 = document.querySelector(".segunda-etq")
  let insertarPreguntaOrde2 = document.querySelector(".tercera-etq")
  let insertarPreguntaOrde3 = document.querySelector(".cuarta-etq")

  insertarPreguntaOrde.innerHTML = ''
  insertarPreguntaOrde1.innerHTML = ''
  insertarPreguntaOrde2.innerHTML = ''
  insertarPreguntaOrde3.innerHTML = ''
  
  insertarPreguntaOrde.innerHTML +=  `
  <button type="submit" class="btn-Orde" id="listarBoton1">
              <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[0]}" value="${respuestasOrdenadas[0]}">
          </button> `  


insertarPreguntaOrde1.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[1]}" value="${respuestasOrdenadas[1]}">
        </button> `


insertarPreguntaOrde2.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[2]}" value="${respuestasOrdenadas[2]}">
        </button> `


insertarPreguntaOrde3.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[3]}" value="${respuestasOrdenadas[3]}">
        </button> `

}else if(respuestasOrdenadas.length == 5){
  let insertarPreguntaOrde = document.querySelector(".primera-etq")
  let insertarPreguntaOrde1 = document.querySelector(".segunda-etq")
  let insertarPreguntaOrde2 = document.querySelector(".tercera-etq")
  let insertarPreguntaOrde3 = document.querySelector(".cuarta-etq")
  let insertarPreguntaOrde4 = document.querySelector(".quinta-etq")

  insertarPreguntaOrde.innerHTML = ''
  insertarPreguntaOrde1.innerHTML = ''
  insertarPreguntaOrde2.innerHTML = ''
  insertarPreguntaOrde3.innerHTML = ''
  insertarPreguntaOrde4.innerHTML = ''
  
  insertarPreguntaOrde.innerHTML +=  `
  <button type="submit" class="btn-Orde" id="listarBoton1">
              <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[0]}" value="${respuestasOrdenadas[0]}">
          </button> `  


insertarPreguntaOrde1.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[1]}" value="${respuestasOrdenadas[1]}">
        </button> `


insertarPreguntaOrde2.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[2]}" value="${respuestasOrdenadas[2]}">
        </button> `


insertarPreguntaOrde3.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[3]}" value="${respuestasOrdenadas[3]}">
        </button> `


insertarPreguntaOrde4.innerHTML +=  `
<button type="submit" class="btn-Orde" id="listarBoton1">
            <input type="image" name="botondeenvio" id="botondeenvio0" src="${respuestasOrdenadas[4]}" value="${respuestasOrdenadas[4]}">
        </button> `


        localStorage.setItem("btn-Click",respuestasOrdenadas);
        activarComprobarOrde()

}

}

function activarComprobarOrde(){
  let button =  document.querySelector(".btn-active")
  button.innerHTML = ''
  button.innerHTML += `
  <button id="run" type="submit" class="comprobar-active"  onclick="comprobarOrde()">COMPROBAR</button>
`
}



//fin preguntas ordenamiento


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
  

}


//funciones preguntas aleatoreas

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


