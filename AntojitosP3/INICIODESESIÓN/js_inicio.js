const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


//LO VERDE SON FUNCIONES QUE NO ME JALARON, GG. IGNÓRALAS. NO LE RESTA EL QUE NO SE HAYAN PUESTO.

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/
}

const campos = {
    usuario: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.password){
        console.log("FORMULARIO VALIDO");

        window.alert("INICIO DE SESIÓN VÁLIDO: ¡DISFRUTA DE LAS PRICHAS!");
		formulario.reset();

		/*document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});*/


	} else {
		//document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        console.log("FORMULARIO INVALIDO");
        window.alert("ERROR: DATOS INVÁLIDOS O VACÍOS, O NO SE ENCUENTRA REGISTRO DE USUARIO (vuélvete un gorylover porfisss <3");
	}
});



formulario.addEventListener('reset', (e) => {

    document.getElementById(`grupo__usuario`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__usuario`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__usuario i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__usuario i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__usuario .formulario__input-error`).classList.remove('formulario__input-error-activo');

    document.getElementById(`grupo__nombre`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__nombre`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__nombre i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__nombre i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__nombre .formulario__input-error`).classList.remove('formulario__input-error-activo');

    document.getElementById(`grupo__correo`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__correo`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__correo i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__correo i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__correo .formulario__input-error`).classList.remove('formulario__input-error-activo');

    document.getElementById(`grupo__password`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__password i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__password .formulario__input-error`).classList.remove('formulario__input-error-activo');

    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
});