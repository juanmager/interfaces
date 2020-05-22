

function applyhighlighter(){
    var parrafs = document.getElementsByClassName("highlighter").addEventListener('click',applyhighlighter());

    parrafs.classList.toggle("resaltado");
    }


    
// tratando.


// <!-- Ejercicio: resaltador
// Vamos a hacer un pequeño código que te va a ayudar cuando estudies, simplificándote la tarea de resaltar los párrafos importantes.
// Crea un documento HTML con al menos cinco párrafos( puedes usar lorem ipsum para generarlos rápido)
// Seleccionalos a todos y guardalos en una variable.
// Usando un for loop, recorrelos a todos y agregales un event listener que haga que cuando los clickeás, le ponga o le saque (toggle) 
// una clase "resaltado", que le ponga un background color amarillo y el color de la letra a rojo. Deberías usar el keyword this dentro 
// de la función callback para indicar que lo que tiene que cambiar es el párrafo que está siendo clickeado. 
// -->