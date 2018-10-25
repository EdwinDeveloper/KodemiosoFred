var $numeroRandom=0;
var $arrayApp=[];
var contador=0;
var tiempo=1000;
function start(){
    var $minimo = 1,$maximo=9;
        $numeroRandom = getRandom($minimo,$maximo);
    //console.log($numeroRandom);
    function getRandom($min, $max) {
        return Math.trunc( Math.random()* ($max - $min) + $min);
    }
    $arrayApp.push($numeroRandom);
    console.log($arrayApp);
    $arrayApp.forEach(($element)=>{
        tiempo=tiempo+1000;
        setTimeout(()=>{
            $('.boton').css("background-color","red");
            //console.log($element);
            switch($element){
                case 1: $('.button-1').css("background-color","blue");
                    break;
                case 2: $('.button-2').css("background-color","brown");
                    break;
                case 3: $('.button-3').css("background-color","orange");
                    break;
                case 4: $('.button-4').css("background-color","yellow");
                    break;
                case 5: $('.button-5').css("background-color","gray");
                    break;
                case 6: $('.button-6').css("background-color","skyblue");
                    break;
                case 7: $('.button-7').css("background-color","black");
                    break;
                case 8: $('.button-8').css("background-color","purple");
                    break;
                case 9: $('.button-9').css("background-color","white");
                    break;
            }
            console.log($element);
         },tiempo);
});

}

$('#start-button').on('click',()=>{
            start();
});

