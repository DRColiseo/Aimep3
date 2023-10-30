const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false
}




const validarFormulario = (e) => {
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
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

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.nombre && campos.password && campos.correo){
        
        window.alert("<3 <3 <3 ¡FELICIDADES! AHORA ERES UN GORYLOVER <3 <3 <3");
        console.log("FORMULARIO VALIDADO");
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
        window.alert("(TnT) (TnT) (TnT) ERROR: ¡PRICHA, LLENA BIEN TODOS LOS DATOS! (TnT) (TnT) (TnT)");
        console.log("FORMULARIO INVALIDO");
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

/**
 * 
 * 

formulario.addEventListener('submit', (e) => {
    console.log("ENTRA EN FUNCIÓN");
    e.preventDefault();


    if(campos.usuario && campos.nombre && campos.password && campos.correo){
        formulario.reset();
        
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exitoso-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exitoso-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
/
*/
