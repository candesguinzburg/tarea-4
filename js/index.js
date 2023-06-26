/* contar las veces que dice hola */
var nombre="pepe"

var deseo="buen dia"

var saludo="hola"

var presentacion="soy juan"

var otrosaludo="hola"

var contador= 0

let palabras=["pepe", "buen dia", "hola", "soy juan", "hola"]
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === "hola") {
       contador++
     }  
}
console.log( "dice la palabra hola " + contador + " veces")

/* promedio de notas */
var matematica= 8
var lengua= 9
var ingles= 4

resultado= matematica + lengua + ingles
promedio= resultado/3

console.log(`el promedio de la suma de las notas de matematicas:${matematica}, lengua:${lengua} e ingles:${ingles} es ${promedio} `)

/* cantidad de caracteres de todos los mensajes */


let caracteres=0
const mensajes= ["mensaje1", "mensaje2", "mensaje3" ]

for (let i = 0; i < mensajes.length; i++) {
     caracteres += mensajes[i].length;
    }
   if (caracteres<20) {
    console.log("el usuario recien empieza")
    }  
    else if (caracteres>20 && caracteres<50) {
        console.log("el usuario es nuevo")
        } 
    else{
        console.log("el usuarrio es recurrente")
        }
    
    
