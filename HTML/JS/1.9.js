
alertSitio();
nameU();

//Ejercicio datos user.-
function alertSitio() {
    alert("Bienvenidos a un sitio super mega archi divertido!!!. Pero disfrutalo con cautela.")
}

function nameU() {
    var nameUser = prompt("Ingresa tu nombre por favor:")
    alert(`Hola ${nameUser}!`)
    
    var ageUser = prompt("Ingresa tu edad por favor:")
    alert(`Hola, soy ${nameUser} y tengo ${ageUser} años!`)
}

// Ejercicio Calculador de Edad
calculadorEdad();
function calculadorEdad(anios) {
    var anios = prompt("Cuantos años tenes?: ")
    var cantDias = anios * 365;
    alert(`Viviste en total ${cantDias} dias`)
} 

