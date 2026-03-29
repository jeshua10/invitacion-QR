function entrar() {
    document.getElementById("pantalla1").style.display = "none";
    document.getElementById("pantalla2").style.display = "block";

    let musica = document.getElementById("musica");
    musica.play();
}