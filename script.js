let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');


function celTofah(){
    let outputFah = parseFloat(1.8*celcius.value)+32;
    fahrenheit.value = outputFah.toFixed(2);
}


function fahToCel(){
    let outputCel = parseFloat((5/9)*(fahrenheit.value-32));
    celcius.value = outputCel.toFixed(2);
}


