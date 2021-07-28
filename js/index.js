



function index(){
    localStorage.setItem('correctas', 0);
    localStorage.setItem('incorrectas', 0);
    localStorage.setItem('tpreguntas', 0);
    localStorage.setItem('barras', 0);
    localStorage.setItem('vidas', 4);
    window.location.href = "log.html";
    
}

setTimeout(index, 3000);