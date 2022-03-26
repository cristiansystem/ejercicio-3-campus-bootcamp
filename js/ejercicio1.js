'use stric'

//Ejercicio 1
function onSumNum( num ) {
    let resField = parseInt( document.getElementById("result").value );
    let result = resField + parseInt( num );
    document.getElementById("result").value = result;
    document.getElementById("numeros").value = undefined;
}

function buildNum( numero ) { 
    let dataNum = document.getElementById('numeros').value;
    document.getElementById('numeros').value = dataNum + numero;
}

function reset() {
    document.getElementById('result').value = 0;
    document.getElementById('numeros').value = 0;
}