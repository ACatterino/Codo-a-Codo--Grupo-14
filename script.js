function saludarUsuario(){
    const nombreUsuario = document.querySelector("#nombreUsuario").value;
    const saludoUsuario = document.querySelector(".saludoUser");
    saludoUsuario.innerHTML = "Hola " + nombreUsuario + ", selecciona los turnos que vas a entrenar esta semana: ";
 }

 function calcularPase(){
     const pasediario = 1200;
     const paseSemanal = 5000;
     const paseMensual = 15000;
     let precioPase = 0;
     let tipoPase = "";
 
     let diasSelects = document.getElementsByClassName("resaltar").length;
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

     document.querySelector(".precioFinal").innerHTML="Reservaste " + diasSelects + " turno/s. El valor de tu pase es $" + precioPase + ". Accediste al " + tipoPase + ".";
 }


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('saludar').addEventListener('click', function() {
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
    document.getElementById('reservaDias').addEventListener('click', function() {
        calcularPase();
    });
});
