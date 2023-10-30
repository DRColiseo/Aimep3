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

function info(){
    alert('Correo Lider de equipo: ulises.hernandez1339@alumnos.udg.mx \n Correo All-hands person: oscar.rivera1350@alumnos.udg.mx \n Correo Diseñadora y asistente de programador:melina.gonzalez1471@alumnos.udg.mx \n Correo Analista y programador: edwin.ramos1337@alumnos.udg.mx \n Correo Programador: arturo.gonzalez1404@alumnos.udg.mx');

}


function  cambio1(){
    document.getElementById("frase").innerHTML = "Símbolo lésbico y LGTB";
    document.getElementById("textoIconico").innerHTML = "En mi opinión Mary es el símbolo lésbico y LGTB 📺, más grande de la historia ella con sus platillos me ayudó a aceptarme tal y como soy, con todo e imperfecciones, porque nací así.";
    document.getElementById("citaIconcica").innerHTML = "-Lady Gaga";
    document.getElementById("boton1").style.backgroundColor = "#f07d69";
    document.getElementById("boton2").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton3").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton4").style.backgroundColor = "rgb(209, 206, 206)";
}

function cambio2(){
    document.getElementById("frase").innerHTML = "Cada platillo esta lleno de significado lésbico";
    document.getElementById("textoIconico").innerHTML = "Aime es la actriz más talentosa y versátil que ha tocado la tierra, puede interpretar desde drama hasta romance, desde comedias hasta cintas pornográficas, Además sus recetas cada platillo esta lleno de significado lésbico";
    document.getElementById("citaIconcica").innerHTML = "-Leonardo Dicaprio";
    document.getElementById("boton1").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton2").style.backgroundColor = "#f07d69";
    document.getElementById("boton3").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton4").style.backgroundColor = "rgb(209, 206, 206)";
}

function cambio3(){
    document.getElementById("frase").innerHTML = "Cada platillo es un beso al alma";
    document.getElementById("textoIconico").innerHTML = "Besa bien. Si folla como cocina me caso.";
    document.getElementById("citaIconcica").innerHTML = "-Nevrazca Draganzon";
    document.getElementById("boton1").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton2").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton3").style.backgroundColor = "#f07d69";
    document.getElementById("boton4").style.backgroundColor = "rgb(209, 206, 206)";
}

function cambio4(){
    document.getElementById("frase").innerHTML = "La empresaria mas exitosa del siglo 21";
    document.getElementById("textoIconico").innerHTML = "Annie es una empresaria y accionista excepcional. ";
    document.getElementById("citaIconcica").innerHTML = "-Elon Musk";
    document.getElementById("boton1").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton2").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton3").style.backgroundColor = "rgb(209, 206, 206)";
    document.getElementById("boton4").style.backgroundColor = "#f07d69";
}


function validarEmail(email){
    var correo=false;

    const mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value.match(mail)){
        var correo=true;

    }
    else{
        var correo=false;
    }
    return correo;
}

function envio(){
    correo=validarEmail(email)
    if(correo==true){
        alert("Registro Exitoso")
    }
   
}