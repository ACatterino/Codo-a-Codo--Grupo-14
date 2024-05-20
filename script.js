let flag = 0;
let nombreUsuario = "";

function saludarUsuario(){
    nombreUsuario = document.querySelector("#nombreUsuario").value;
    const saludoUsuario = document.querySelector(".saludoUser");
    if(nombreUsuario.length>=2){
        saludoUsuario.innerHTML = "Hola " + nombreUsuario + ", selecciona los turnos que vas a entrenar esta semana: ";
        /*vuelve invisible ciertos elemento y hace invisibles otros*/
        document.getElementById('ag_enviarNombre').classList.remove('visible');
        document.getElementById('ag_enviarNombre').classList.add('noVisible');
        document.getElementById('diasSemana').classList.remove('noVisible');
        document.getElementById('diasSemana').classList.add('visible');
        document.getElementById('ag_NConsulta').classList.remove('noVisible');
        document.getElementById('ag_NConsulta').classList.add('visible');
        document.getElementById('ag_reservaDias').classList.remove('noVisible');
        document.getElementById('ag_reservaDias').classList.add('visible');
        
    }
    else{
        alert('Debes ingresar un nombre de usuario');
    }
    flag++;
 }

 function calcularPase(){
    let diasSelects = document.getElementsByClassName("resaltar").length;
    console.log(flag);
    if (flag<=0 || nombreUsuario=="" || diasSelects <=0) {
        alert("Debe ingresar un nombre o elegir horarios para reservar turnos");
    }else{
     const pasediario = 1200;
     const paseSemanal = 5000;
     const paseMensual = 15000;
     let precioPase = 0;
     let tipoPase = "";
 
     
     if (diasSelects >= 7 && diasSelects <= 15){
        precioPase = paseSemanal;
        tipoPase = "plan semanal";
     }else if(diasSelects > 15){
        precioPase = paseMensual;
        tipoPase = "plan mensual"
     }else{
        precioPase = pasediario * diasSelects;
        tipoPase = "plan básico"
     }
    document.querySelector(".ag_precioFinal").classList.remove('noVisible');
     document.querySelector(".ag_precioFinal").classList.add('visible');
     document.querySelector(".ag_precioFinal").classList.add('centrar');
     document.querySelector(".precioFinal").innerHTML="Reservaste " + diasSelects + " turno/s. El valor de tu pase es $" + precioPase + ". Accediste al " + tipoPase + ".";
     
    }
 }


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ag_enviarNombre').addEventListener('click', function() {
        saludarUsuario();
    });


    //funcion para resaltar los horarios
    const horariosP = document.querySelectorAll('.horarios p');
    horariosP.forEach(p => {
        p.addEventListener('click', function() {
            p.classList.toggle('resaltar');
        });
    });

    //eventlistener para llamar a la funcion calcular pase
    document.getElementById('ag_reservaDias').addEventListener('click', function() {
        calcularPase();
    });
});

/*Sección contacto*/
function mensaje_contacto(){
    let nombre = document.getElementById("ct_nombre").value;
    let apellido = document.getElementById("ct_apellido").value;
    let mensaje = document.getElementById("ct_mensaje").value;
    let celular = document.getElementById("ct_celular").value;
    let email = document.getElementById("ct_email").value;

    /*valida los campos necesarios*/
    if (nombre.length>=3 && apellido.length>=3 &&mensaje.length>=3 && celular.length>=3 &&(email.length==0||emailValido(email))) {
        alert("Mensaje enviado!");
    }
    

}
/*Valida que el correo tenga su expresión regular*/
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  