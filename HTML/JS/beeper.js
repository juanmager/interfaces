//var boton = document.querySelector("button").addEventListener("click", btnfunction());

function btnfunction(){
    document.querySelector("button").addEventListener("click", functioncall());
        function functioncall(){
            var addparrafo = document.getElementById("body");
            addparrafo.insertAdjacentHTML("afterend", "<p> Beeeeeeep! </p>");
            addparrafo.classList.toggle("rainbow");
        }
}

// Si bien necesita mejorar, funcionalidad hecha.


// Ejercicio: Beeper
// Crea un HTML que tenga un botón (podés usar un tag button) que diga "BEEP".
// Crea un archivo .js y vinculalo a tu html usando un tag script, ahí vas a escribir tu código JavaScript.
// Selecciona el botón (document.querySelector…) y agrégale un event listener para que:
// cada vez que un usuario haga click en el botón se ejecute una función (callback) que seleccione
//  el body y le agregue un párrafo <p> al final que diga 'BEEP'.
// Acá vas a tener que poner .insertAdjacentHTML("beforeend", "LO QUE QUIERAS AGREGAR") , porque
//  innerHTML no funciona bien con eventos.
// Ojo, cada vez que aprieta el botón debería sumarse un nuevo párrafo, no remplazar al anterior,
// así que asegurate de usar +=.
// Crea un archivo .css, vincúlalo a tu html y crea una clase que se llame .color. Dentro ponele 
// un background color del color que quieras.
// Vuelve a la función callback del evento y agrégale una línea que haga un 
// .classList.toggle("color") sobre el body, cambiándole el color con cada click.
// Ahora define la función del callback afuera del evento, guardándola en una variable que se llame seEjecutaEnEvento. reemplaza la función 
// callback por la variable seEjecutaEnEvento (que contiene la misma función) y asegúrate de que el programa funcione igual.
 