//inicilicion de variables
let targetasDestapadas=0;
let tarjeta1=null;
let targeta_2 =null;
let primertargeta=null;
let segundatargeta=null;
let aciertos=0;
let mostrarAciertos = document.getElementById('Aciertos');
let movimientos=0;
let mostrarmovimientos =document.getElementById('movimientos');
let temporizador=false;
let mostrarTiempo=document.getElementById('tiempo_restante')
let timer=30;
let timer_inicial=30;
let tiemporegresivo=null;
//targeta 2
//arreglo aleatorio
let num=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num=num.sort(()=>{return Math.random()-0.5});
//contar tiempo
function contartiempo(){
    tiemporegresivo= setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} seg`;
        if (timer==0){
            clearInterval(tiemporegresivo);
            bloquearTarjeta();
        }
    }, 1000);
}
//vloquear targeta
function bloquearTarjeta(){
    for (let i = 0; i <=15; i++) {
        let tarjetabloqueada=document.getElementById(i);
        tarjetabloqueada.innerHTML=num[i];
        tarjetabloqueada.disabled=true;   
    }
}

//funcion destapar
function Destapar(id){
    if(temporizador==false){
        contartiempo();
        temporizador=true;
    }
    targetasDestapadas++;
    if(targetasDestapadas==1){
        //mostrar el primer numero
        tarjeta1= document.getElementById(id);
        primertargeta=num[id];
        tarjeta1.innerHTML=primertargeta;
        //desabilitar la targeta 1
        tarjeta1.disabled=true;
    }
    else if(targetasDestapadas==2){
        targeta_2=document.getElementById(id);
        segundatargeta=num[id];
        targeta_2.innerHTML=segundatargeta;
        //desabilitar targeta 2
        targeta_2.disabled=true;
        //incremetar movimintos
        movimientos++;
        mostrarmovimientos.innerHTML=`Movimientos: ${movimientos}`;

        if (primertargeta==segundatargeta){
            targetasDestapadas=0;

            //aciertos
            aciertos++;
            mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;
            if(aciertos==8){
                clearInterval(tiemporegresivo);
                mostrarAciertos.innerHTML=`Aciertos: ${aciertos} 😱 `;
                mostrarTiempo.innerHTML=`Fantastico solo te demoraste ${timer_inicial-timer} seg`;
                mostrarmovimientos.innerHTML=`Movimientos: ${movimientos} 😎`;
            }
        }
        else{
            //mostrar momentanemaneamtente los valores
            setTimeout(()=>{
                tarjeta1.innerHTML=' ';
                targeta_2.innerHTML=' ';
                tarjeta1.disabled=false;
                targeta_2.disabled=false;
                targetasDestapadas=0;

            },800);
        }

    }
}