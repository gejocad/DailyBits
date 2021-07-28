let cursoCompletado = localStorage.getItem("barras")


if(cursoCompletado == 10){
    cambiarImagenHtml()
}

function cambiarImagenHtml(){
    let imageHtml = document.querySelector(".curso-inicial")

    imageHtml.innerHTML = ''
    
    imageHtml.innerHTML +=  `
                <a class="" href="curso.html" onclick="setLs()">
                    <img class="curso-inicial" src="./img/html-active.png" alt="">
                </a> `
    }