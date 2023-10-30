function Arturo() {
    alert('Correo: arturo.gonzalez1404@alumnos.udg.mx');
}
function Edwin(){
    alert('Correo: edwin.ramos1337@alumnos.udg.mx');
}
function Meli(){
    alert('Correo: melina.gonzalez1471@alumnos.udg.mx');
}
function Oscar(){
    alert('Correo: oscar.rivera1350@alumnos.udg.mx');
}
function Uli(){
    alert('Correo: ulises.hernandez1339@alumnos.udg.mx');
}

function funcion() {
    switch (document.getElementById("categorias").value) {
        case "1":
            window.location.href = "http://127.0.0.1:5500/Tercera_pagina.html";
            break;
        case "2":
            window.location.href = "http://127.0.0.1:5500/Tercera_pagina2.html";
            break;
        case "3":
            window.location.href = "http://127.0.0.1:5500/Tercera_pagina3.html";
            break;
        case "4":
            window.location.href = "http://127.0.0.1:5500/Tercera_pagina4.html";
            break;
        case "5":
            window.location.href = "http://127.0.0.1:5500/Tercera_pagina5.html";
            break;
    }
}