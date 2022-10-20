
let nombre = document.getElementById("nombre");
let lastname = document.getElementById("apellido");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let check = document.getElementById("terminos");
let regBtn = document.getElementById("regBtn");


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

 function validarFormulario(evento) { 
    
    evento.preventDefault();
  // document.getElementById('formulario').classList.add('was-validated')


  
   if(pass1.value !== pass2.value || pass1.value.length < 6 ) {

    pass2.classList.add('is-invalid')
    pass2.classList.remove('is-valid')
   // return;
}
else { pass2.classList.remove('is-invalid')
pass2.classList.add ('is-valid') }

   if( pass1.value.length > 5 ) { 
    pass1.classList.add('is-valid')
    pass1.classList.remove('is-invalid')
   }
   else { pass1.classList.remove('is-valid')
   pass1.classList.add('is-invalid')}

    console.log('bton!!')

    if (nombre.value.length > 0 ) { 
        nombre.classList.add('is-valid')
        nombre.classList.remove('is-invalid')
    }
    else { nombre.classList.remove('is-valid')
    nombre.classList.add('is-invalid')}

    
    if (lastname.value.length > 0 ) { 
        lastname.classList.remove('is-invalid')
        lastname.classList.add('is-valid')
    }
    else { lastname.classList.remove('is-valid')
    lastname.classList.add('is-invalid')}

    if (email.value.length > 0  && email.value.includes('@') && email.value.includes('.') ) { 
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    else { email.classList.remove('is-valid')
    email.classList.add('is-invalid')}

    if(check.checked) {
        document.getElementById('botonterminos').classList.remove('estiloerror');
        document.getElementById('containerterminos').innerHTML = ``
    }
    else {
        document.getElementById('botonterminos').classList.add('estiloerror');
    document.getElementById('containerterminos').innerHTML =  
        `<div style='vertical-align: middle;
        padding: .375rem .75rem;
        margin-left: 20px;'> Debe aceptar los términos del servicio.</div>`
}

}


