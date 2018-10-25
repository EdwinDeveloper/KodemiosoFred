//variable guardamos numero ramdom
var $numeroRandom=0;
//Array para guardar los valores randoms creados
var $arrayApp=[];
//
var $arrayUser=[];
//Contador de iteraciones del juego (va sumando)
var $contadorJuego=0;
//Contador de iternacion del usuario al presionar cada boton
var $contadorUser=0;
var $contadorEnAumento=1;
//var bandera=0;
function start(){
    var $minimo = 1,$maximo=9;

        //obtenemos el numero random
    
         //console.log($numeroRandom);

         //Añadimos el nuevo valor al arreglos  
        //console.log($numeroRandom); 
        $numeroRandom = getRandom($minimo,$maximo);
        $arrayApp.push($numeroRandom);
        let intervalo = setInterval(()=>{
            $contadorJuego++;
            //console.log("ciclo : array "+$contadorJuego); 
                if($contadorJuego<=$contadorEnAumento){
                        switchfunction($arrayApp[$contadorJuego-1]);
                }else{
                    clearInterval(intervalo);
                }               
        },2000);
        console.log($arrayApp);
}
function switchfunction($element){
    switch($element){
        case 1: $('.button-1').addClass('extra-1');
                setTimeout(()=>{
                    $('.button-1').removeClass('extra-1');
                },1000);
            break;
        case 2: $('.button-2').addClass('extra-2');
                setTimeout(()=>{
                    $('.button-2').removeClass('extra-2');
                },1000);
            break;
        case 3: $('.button-3').addClass('extra-3');
                setTimeout(()=>{
                    $('.button-3').removeClass('extra-3');
                },1000);
            break;
        case 4: $('.button-4').addClass('extra-4');
                setTimeout(()=>{
                    $('.button-4').removeClass('extra-4');
                },1000);
            break;
        case 5: $('.button-5').addClass('extra-5');
                setTimeout(()=>{
                    $('.button-5').removeClass('extra-5');
                },1000);
            break;
        case 6: $('.button-6').addClass('extra-6');
                setTimeout(()=>{
                    $('.button-6').removeClass('extra-6');
                },1000);
            break;
        case 7: $('.button-7').addClass('extra-7');
                setTimeout(()=>{
                    $('.button-7').removeClass('extra-7');
                },1000);
            break;
        case 8: $('.button-8').addClass('extra-8');
                setTimeout(()=>{
                    $('.button-8').removeClass('extra-8');
                },1000);
            break;
        case 9: $('.button-9').addClass('extra-9');
                setTimeout(()=>{
                    $('.button-9').removeClass('extra-9');
                },1000);
            break;
    }
}
function getRandom($min, $max) {
    return Math.trunc( Math.random()* ($max - $min) + $min);
}
$('#start-button').on('click',()=>{
            start();
});
$('#start-test').on('click',()=>{
    $('.boton').addClass('nueva-clase');
    setTimeout(()=>{
        $('.boton').removeClass('nueva-clase');
    },1000);
});
function iluminar(numeroRandom){

    setTimeout(()=>{

    },1000);
}
$('.boton').on('click',(e)=>{
    var $a =$(e.target).text();
    let $divMensaje=$('.mensaje');
    //if para verificar si el usuario introduce un valor correcto
    if($a==$arrayApp[$contadorUser]){
        //Añadimos mensaje de correcto
        $divMensaje.html('BIEN AMIGO');
        //Añadimos la clase de correcto
        $divMensaje.addClass('mensaje-success');
        setTimeout(()=>{
            //Despues de medio segundo retiramos el mensaje
            $divMensaje.html('BIENVENIDO');
            //Despues de medio segundo, retiramos la clase success
            $divMensaje.removeClass('mensaje-success');
            //cadamos el tamaño actual del arreglo del juego
        },500);
    }else{
        //Mensaje error en caso de fallo
        $contadorUser=0;
        $contadorJuego=0;
        $arrayApp=[];
        $divMensaje.html('GAME OVER');
        //Añadimos la clase error en caso de fallo del usuario
        $divMensaje.addClass('mensaje-fail');
        //Comparamos uno por uno la seleccion del usuario y los del array del jugo
    }
    //Nuestro contador para aumentar la posicion
    $contadorUser++;

    // console.log("Contador user : "+$contadorUser);
    // console.log("Contador Aumento : "+$contadorEnAumento);
    // console.log("a : "+$a+ "  "+$arrayApp[$contadorUser-1]);
    if($contadorUser===$contadorEnAumento){
        $contadorEnAumento++;
        $contadorUser=0;
        $contadorJuego=0;
        $('.main-container').addClass('extra-main-container');
        setTimeout(()=>{
            $('.main-container').removeClass('extra-main-container');
            start();
            console.log("ciclo : "+$contadorEnAumento);
        },1000);
    }else{
        console.log("Fin del juego");
    };
});

