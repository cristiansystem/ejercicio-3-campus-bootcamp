'use stric'

function onSumNum( num ) {
    let resField = parseInt( document.getElementById("result").value );
    let result = resField + parseInt( num );
    document.getElementById("result").value = result;
}