const prompt = require("prompt-sync")();

var edades = [];
var loop = 0;
var sum = 0;
var menor = 0;
var mayor = 0;
var edad_baja = 0;
var edad_alta = 0;
var promedio = 0;

    while (loop < 10){

        let edad = prompt("Digitar edad: ");

        if(isNaN(edad)){
            console.log("El dato ingreasado no es numerico");
        }
        else{
            edad = parseInt(edad);

            if(edad >= 1 && edad <= 120){
                loop++;
                sum = sum+edad;
                edades.push(edad);
            }

            //GRUPOS ETARIOS
            if(edad <= 17){
                menor++;
                if (edad_baja == 0 || edad_baja > edad){
                    edad_baja = edad;
                }
            if(edad >= 18 && edad <= 59) {mayor++;}
            if(edad >= 60 && edad <= 120){
                adulto++;
                if(edad_alta < edad){
                    edad_alta = edad;
                }
            }
            else{
                console.log("El rango de edad no corresponde")
            }
          }

        }
    }
promedio = sum/loop;
console.log("\n");
console.log("Grupo de edad: ", edades);
console.log("Menores de edad: ", menor);
console.log("Mayores de edad: ", mayor);
console.log("Adulto mayor: ", mayor);
console.log("Edad mas baja: ", edad_baja)
console.log("Edad mas alta: ", edad_alta)
console.log("Promedio de edad: ", Promedio)