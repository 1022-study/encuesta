var sP = document.getElementById("post");


function post(a) {
    var p = document.createElement("p");

    p.innerHTML = a;

    sP.appendChild(p);
}

function postT(a, b) {

    var h1 = document.createElement("h1");
    var line = document.createElement("hr");
    var p = document.createElement("p");

    h1.innerHTML = a;
    p.innerHTML = b;

    sP.appendChild(h1);
    sP.appendChild(line);
    sP.appendChild(p);
}

//post("titulo de prueba", "Esto es el parrafo de prueba.");

post("El siguiente cuestionario tiene la finalidad de evaluar su opinión con respecto a la presencialidad o virtualidad con respecto a su asistencia para realizar sus estudios.");