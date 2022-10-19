
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
   document.getElementById('formulario').classList.add('was-validated')

   var password2 = document.getElementById('password2');
   var password1 = document.getElementById('password1');
   if(password1.value !== password2.value) {
    console.log('contrasenias distintas!!')
    password1.classList.add('is-invalid')
    return;
}
    console.log('SUCCES!!')
}


