class Coche {
    puertas = 0;
    // Método
    agregarPuerta ( puerta ) {
        this.puertas += parseInt( puerta );
        document.getElementById('totalPuertas').value = this.puertas.toString();
        document.getElementById('agregarBtn').setAttribute("disabled", true);
        document.getElementById('successMsg').style.display = 'block';
        setTimeout(() => {
           document.getElementById('successMsg').style.display = 'none';
           document.getElementById('agregarBtn').removeAttribute("disabled", false);
        }, 600);
    }
}

const coche = new Coche();