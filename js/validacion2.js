let nombre = document.getElementById("nombre");
let lastname = document.getElementById("apellido");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let regBtn = document.getElementById("regBtn");
let check = document.getElementById("terminos2");

function validarCheck () { 
    if(check.checked) {
        document.getElementById('botonterminos').classList.remove('estiloerror');
        document.getElementById('containerterminos').innerHTML = ``
        return true
    }
    else {
        document.getElementById('botonterminos').classList.add('estiloerror');
    document.getElementById('containerterminos').innerHTML =  
        `<div style='vertical-align: middle;
        padding: .375rem .75rem;
        margin-left: 20px;'> Debe aceptar los términos del servicio.</div>`
    return false}
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener("submit", validarFormulario);
  check.addEventListener('click', ()=> { validarCheck();  } );
  pass1.addEventListener("input", ()=> { validarpass(); validarpass2 ()  } );
  pass2.addEventListener("input", ()=> { validarpass(); validarpass2 () } );

});

function validarFormulario(evento) {
  evento.preventDefault();
  document.getElementById("formulario").classList.add("was-validated");

  validarpass();
  validarpass2 ();
  validarCheck ();

}

function validarpass () { 
    if(pass1.value !== pass2.value || pass1.value.length < 6 ) {
 
     pass2.classList.add('is-invalid')
     pass2.classList.remove('is-valid')
     return false
 }
 else { pass2.classList.remove('is-invalid')
 pass2.classList.add ('is-valid')
return true }}

 function validarpass2 (){
    if( pass1.value.length > 5 ) { 
     pass1.classList.add('is-valid');
     pass1.classList.remove('is-invalid');
     return true
    }
    else { pass1.classList.remove('is-valid');
    pass1.classList.add('is-invalid');
    return false}
 }

 function showAlertSuccess() {
    document.getElementById("alert-success").innerHTML = `
    <div class="alert show alert-success alert-dismissible fade" role="alert" >
  <p>Datos guardados correctamente</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick=closeAlert()></button>
</div>
<body class="bg-light">`; 
}

regBtn.addEventListener("click", function(){
    if(validarpass2() && validarpass() && validarCheck()){
      showAlertSuccess();  
    }     
});

function closeAlert(){
    document.getElementById("alert-success").innerHTML= ""
}