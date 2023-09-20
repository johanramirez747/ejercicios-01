
/*VARIABLE*/

function ejercicio1 () {

 let opc = 29;

 while (opc|=0) (
    menu()
  )

 function menu () {
     /*PARA MOSTRAR EL MENU DE OPCIONES AL USUARIO INDICANDOLE CUALES HAY*/
     console.log ("#################################################################################################")
     console.log("Digite la opcion del que quiere saber el area y el perimetro de la figura \n 1. Calcular el area del triangulo \n2 2. Calcular perimetro del triangulo \n3 3. Calcular el area del rectangulo \n4 4. Calcular el perimetro del rectangulo  \n5 5. Calcular el area del cuadrado  \n6 6. Calcular el perimetro del cuadrado \n7 7. Calcular el area del circulo  \n8 8. Calcular el perimetro del circulo \n0 0. Salir")
     opc = parseInt (prompt ());

     console.log ("########################################################################################################################################################################################################################################################################################################################################################################################################")
     /*se ejecutara la ecucion de la opcion que se escogio*/

     switch (opc) {
         case 1 :
          b = parseInt (prompt ("digite la base del triangulo: "));
          h = parseInt (prompt ("Digite la altura del triangulo: "));
          Area = b * h /2;
          console.log ("El area del rectangulo es: ", Area, "cm2");
          break;
         case 2 :
         a = parseInt (prompt ("Digite el lado del triangulo: "));
         b = parseInt (prompt ("Digite otro lado del triangulo: "));
         c = parseInt (prompt ("Digite otro lado del triangulo: "));
         Perimetro = a + b + c;
         console.log ("El perimetro del triangulo es: ", Perimetro, "cm");
         break;
         case 3 :
         b = parseInt (prompt ("Digite la base del rectangulo: "));
         a = parseInt (prompt ("Digite el lado del rectangulo: "));
         Area = b * a;
         console.log ("El area del rectangulo es: ", Area, "cm2");
         break;
         case 4 :
         b = parseInt (prompt ("Digite la base del rectangulo: "));
         a = parseInt (prompt ("Digite el lado del rectangulo: "));
         Perimetro = 2 * (b + a);
         console.log ("El perimetro del rectangulo es: ", Perimetro, "cm");
         break;
         case 5 :
         a = parseInt (prompt ("Digite un lado del cuadrado: "));
         Area = Match.pow (a,2);
         console.log ("El area del cuadrado es: ", Area, "cm2");
         break;
         case 6 :
         a = parseInt (prompt ("Digite el lado del cuadrado: "));
         Perimetro = 4 * a;
         console.log ("El perimetro del cuadrado es: ", Perimetro, "cm");
         break;
         case 7 : 
         r = parseInt (prompt ("Digite el radio del circulo: "));
         Area = Math.PI * Match.pow (r,2);
         console.log ("El area del circulo es: ", Area, "cm2");
         break;
         case 8 : 
         r = parseInt (prompt ("Digite el radio del circulo: "));
         Perimetro = 2 * Match.PI * Match.pow (r,2);
         console.log ("El perimetro del circulo es: ", Perimetro, "cm");
         break;
         case 0 :
         console.log("Saliendo")
         break;
         default : console.error ("opcion invalidad, ingresar una correcta");
         break;
        }
    }
} 
