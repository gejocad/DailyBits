var opciones = document.getElementsByName('radio');


for( var i=0,il = opciones.length; i< il; i ++ ){
 opciones[i].onclick = clickHandler;
}

function clickHandler(){
  var button = document.getElementById('run')
  button.style.display = 'block';
}