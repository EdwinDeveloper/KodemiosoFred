var $numeroRandom=0;
var $arrayApp=[];
var contador=0;
var tiempo=1000;
function start(){
    var $minimo = 1,$maximo=9;
        $numeroRandom = getRandom($minimo,$maximo);
         //console.log($numeroRandom);
        $arrayApp.push($numeroRandom);
        console.log($arrayApp);
        $arrayApp.forEach(($element)=>{
            tiempo=tiempo+1000;
            setTimeout(()=>{
                //$('.boton').css("background-color","red");
                //console.log($element);
                switchfunction($element);
                console.log($element);
            },tiempo);
});

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
    var $seleccionado = $(e.target).text();
});

