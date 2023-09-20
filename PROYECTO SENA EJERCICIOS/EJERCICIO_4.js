const prompt = require("prompt-sync")();
constfunction = require("./modulo");
//vectores
var personas = [];
//variables
var nombre = "";
var cedula = "";
var celular = "";
var email = "";
var cuidad_residencia = "";
var cuidad_origen = "";
var fecha_de_nacimiento = "";
var artista = "";
var cancion1 = "";
var cancion2 = "";
var cancion3 = "";
//validar los datos * validarlos

   while(personas.length < 6){
    let reg = personas.length;
    console.log("\nDIGITAR DATOS DE USUARIO #(reg)");
    nombre = function.validarDato(info = "nombre");
    cedula = function.validarDoc(personas);
    celular = function.validarDato(info = "celular");
    email = function.validarDato(info = "email");
    fecha_de_nacimiento = function.validarDato(info = "fecha");
    cuidad_residencia = function.validarDato(info = "residencia");
    cuidad_origen = function.validarDato(info = "origen");
    artista = function.validarDato(info = "artista");
    cancion1 = function.validarDato(info = "cancion1");
    cancion2 = function.validarDato(info = "cancion2");
    cancion3 = function.validarDato(info = "cancion3");

     
     let USUARIO = {
          Nombre:nombre,
          Documento:cedula,
          Celular: celular,
          Email:email,
          cuidad_residencia:cuidad_residencia,
          cuidad_origen:cuidad_origen,
          fecha_de_nacimiento:fecha_de_nacimiento,
          artista:artista,
          cancion1:cancion1,
          cancion2:cancion2,
          cancion3:cancion3,
        }
        personas.push(USUARIO);
   }
   var ganador = false;
   while (ganador === false){
     console.log("\n");
     var opc = prompt("opciones: realizar busqueda (b) - realizar sorteo (s): ");
     switch (opc) {
        case "b" :
            //realizar busquedas
            function.busqueda(personas);
        break;
        case "s" :
            //sentencias para el sorteo 
            function.sorteo(personas)
            ganador = true;
        break;
      }
    }
    console.log("\nGracias por participar en nuestro sorteo\n");