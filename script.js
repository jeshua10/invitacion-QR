function entrar() {
    document.getElementById("pantalla1").style.display = "none";
    document.getElementById("pantalla2").style.display = "block";

    let musica = document.getElementById("musica");
    musica.play();

    mostrarPoema();
}

let poemas = [
    {
        texto: `No sé si fue tu sonrisa,<br>
        o la forma en que miras,<br>
        pero desde entonces...<br>
        no dejo de pensarte ✨`,
        imagen: "gato.jpg"
    },
    {
        texto: `Contigo todo se siente distinto,<br>
        más bonito, más especial,<br>
        como si el tiempo se detuviera<br>
        cuando estás cerca... 💕`,
        imagen: "negro blanco.jpg"
    },
    {
        texto: `A veces sin darme cuenta,<br>
        termino sonriendo solo,<br>
        y es porque en mi mente<br>
        apareces tú... 😳💖`,
        imagen: "gatopareja.jpg"
    },
    {
        texto: `No necesito mucho para ser feliz,<br>
        solo momentos contigo,<br>
        una sonrisa tuya<br>
        y el tiempo se vuelve perfecto... ✨`,
        imagen: "besos.jpg"
    },
    {
        texto: `Y si este momento es especial,<br>
        imagina lo que puede ser<br>
        una cita contigo... 💘`,
        imagen: "infarto.jpg"
    }
];

let indice = 0;

function mostrarPoema() {
    document.getElementById("textoPoema").innerHTML = poemas[indice].texto;
    document.getElementById("imagenPoema").src = poemas[indice].imagen;
}

function siguientePoema() {
    indice++;

    if (indice < poemas.length) {
        mostrarPoema();
    } else {
        document.getElementById("pantalla2").innerHTML = `
            <h2>💖 Te invito a una cita  💖</h2>
            <img src="foto.jpg" style="width:80%; max-width:300px; border-radius:15px; margin:20px 0;">
            <p>Viernes 3 de abril a las 5:00 PM 🥺💖</p>
            <button onclick="alert('TE AMO MI FLACA HERMOSA💕')">
                Aceptar 💘
            </button>
        `;
    }
}