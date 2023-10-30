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
    alert('Correo Lider de equipo: ulises.hernandez1339@alumnos.udg.mx \n Correo All-hands person men: oscar.rivera1350@alumnos.udg.mx \n Correo Diseñadora y asistente de programador:melina.gonzalez1471@alumnos.udg.mx \n Correo Analista y programador: edwin.ramos1337@alumnos.udg.mx \n Correo Programador: arturo.gonzalez1404@alumnos.udg.mx');

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