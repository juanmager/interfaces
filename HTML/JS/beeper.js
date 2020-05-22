function btnfunction(){
    document.querySelector("button").addEventListener("click", functioncall());
}

var seEjecutaEnEvento = functioncall();

function functioncall(){
    var addparrafo = document.getElementById("body");
    addparrafo.insertAdjacentHTML("afterend", "<p> Beeeeeeep! </p>");
    addparrafo.classList.toggle("rainbow");
}

//Bueno, si bien, me tira un error porque me ponel el "Beeeeeep!" de entrada, creo que la idea esta.


//Bueno, si bien la funcionalidad la cumple, no termino de comprender si esta funcion esta siendo "callback"
//O si o si tiene que tener el formato:
// function lala(callback){
//     var soso = getElem....;
//     callback();
// }



// Ejercicio: Beeper
// Selecciona el botón (document.querySelector…) y agrégale un event listener para que:
// cada vez que un usuario haga click en el botón se ejecute una función (callback) que seleccione
//  el body y le agregue un párrafo <p> al final que diga 'BEEP'.
// Acá vas a tener que poner .insertAdjacentHTML("beforeend", "LO QUE QUIERAS AGREGAR"), porque innerHTML no funciona bien con eventos.
// Vuelve a la función callback del evento y agrégale una línea que haga un  .classList.toggle("color") sobre el body, 
// cambiándole el color con cada click.
// Ahora define la función del callback afuera del evento, guardándola en una variable que se llame seEjecutaEnEvento. reemplaza la función 
// callback por la variable seEjecutaEnEvento (que contiene la misma función) y asegúrate de que el programa funcione igual.
 