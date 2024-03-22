/* 1. Dados 10 valores numéricos, informar cual es el mayor de ellos por pantalla//

function mayorDeLos10NumerosIngresados(){
}
mayorDeLos10NumerosIngresados([333,12,33,88,77,14,13,3,33333,30]);

// 2. Dados 50 números enteros, informar el promedio de los mayores que 100 y la suma de los menores que –10 por pantalla//

function promedioDeLosMayoresYSumaMenores(numero){

    var promedioMayores=0;
    var cantidadMayores=0;
    var sumaMayores=0;
    var sumaMenores=0;
    var sumaTotalMenores=0;

    for (var i=0; i<numero.length; i++){
        if (numero[i]>=100){
            cantidadMayores++;
            sumaMayores= sumaMayores + numero[i];
        }
        if (numero[i]<-10){
            sumaMenores= sumaMenores+numero[i];
        }
    }

promedioMayores=sumaMayores / cantidadMayores;
sumaTotalMenores = sumaMenores;

console.log("El promedio de los mayores que 100 fue"+promedioMayores);
console.log("La suma de los menores de -10 fue"+sumaMenores);

}

promedioDeLosMayoresYSumaMenores([10,150,-55,-33,45,33,33333333]);

//3. Se ingresa un conjunto de valores positivos terminado con un valor negativo. Se pide desarrollar el programa que imprima el valor máximo del conjunto y su posición relativa dentro del mismo (el número de orden en el que fue ingresado). //

function posicionRelativaValorMaximoDelConjunto (numeros){
    
    var numeroMaximo= -999999999;
    var posicion=0;

    numeroMaximo= numeros[0];
    posicion=1;

    for(var i=0; i<numeros.length; i++){
        if(numeros[i]>numeroMaximo){
            numeroMaximo=numeros[i];
            posicion= i+1;
        }
    }
    console.log ("El valor maximo del conjunto es"+numeroMaximo);
    console.log("La posicion es"+posicion);
}

posicionRelativaValorMaximoDelConjunto([33,121,3333333333,56,54,69,5487,-989]);
    

// 4. Dado un valor numérico entero m, determinar e imprimir un listado con los m primeros múltiplos de 3 que no sean múltiplos de 5.//

function primerosMultiplosDe3Sin5 (m){
var multiplosEncontrados = 0;
var numeroActual=3;
while (multiplosEncontrados<m){
    if (numeroActual%3==0 && numeroActual%5!==0){
        console.log(numeroActual);
        multiplosEncontrados++;

    }
    numeroActual++;
}
}
const m=10;
console.log("Los primeros", m, "multiplos de 3 que no son multiplos de 5 son");
primerosMultiplosDe3Sin5(m);

//5. Se ingresa un número con el formato YYYYMMDD. A partir de ese número mostrar el año (YYYY), el mes (MM) y el día (DD).//

function mostrarAñoMesYDia (){
    var añoMesDia = 20220414;

    const año=Math.floor(añoMesDia/10000);
    const mes=Math.floor((añoMesDia%10000)/100);
    const dia= añoMesDia %100;

    console.log("La fecha ingresada fue "+añoMesDia);
    console.log("Año: "+año);
    console.log("Mes: "+mes);
    console.log("Dia: "+dia);

}
mostrarAñoMesYDia();

//6. Dadas dos fechas en formato AAAAMMDD, informar cual es la más reciente.//

function informarLaFechaMasRecientes(){

    var fecha1=20230630, fecha2=20230107;
    var fechaMasReciente=0;

    if(fecha1>fechaMasReciente){
        fechaMasReciente=fecha1;
    }
    if(fecha2>fecha1){
        fechaMasReciente=fecha2;
    }
    console.log("La fecha mas reciente es ", fechaMasReciente);
}
informarLaFechaMasRecientes();


//9. Desarrollar la función pow que recibe una base y un exponente y retorne la potencia.//

function pow(base, exponente){
    var resultado =1;

    if (exponente==0){
        return 1;
    }
    for (var i=0; i<exponente; i++){
        resultado*=base;
    }
    // console.log(resultado); ACA NO
    return resultado;
}
const base=2;
const exponente=3;
//ACA LLAMO A LA FUNCION
console.log(pow(base, exponente));


// 10.Desarrollar una función que dado un número nos diga si es primo.//

function informarSiElNumeroEsPrimo(numero){
    if (numero<=1){
     return false;
    }
    var index=2;
    var divisorEncontrado=false;

    while(index<(numero/2) && !divisorEncontrado){
        if (numero%index==0){
            divisorEncontrado=true;
        }

        index++;
    }
    return !divisorEncontrado;
}
console.log(informarSiElNumeroEsPrimo(17));
console.log(informarSiElNumeroEsPrimo(15));
console.log(informarSiElNumeroEsPrimo(1));

//ULTIMA CLASE PRESENCIAL MODULO 1//

//12. Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar para alcanzar dicho monto, dando prioridad a los billetes de mayor valor//

     const valoresMonetarios= [1000,500,200,100,50,20,10,5,2,1];
     const billetesUsados=[0,0,0,0,0,0,0,0,0,0,0];

     function pagarMonto(valor){
        var monto=0;
        var i=0;

        while(monto!=valor){
            if((valoresMonetarios[i]+monto)<=valor){
            }
        }
     }

//EJERCICIO DADO POR EL PROFE// 
//Crear una funcion que reciba un array como parametro y que devuelva otro array sin los elementos duplicados//

function arraySinLosElementosDupli(array){
    var respuesta= [];

    respuesta.push(array[0]);
    for(var i=0; i<array.length;i++){
        const seRepite=respuesta.includes(array[i]);
        if(!seRepite){
            respuesta.push(array[i]);
        }
    }

    return respuesta;
}
console.log(arraySinLosElementosDupli([33,55,87,9,7,3,33,77,88,130,3,30,13]));




//EJERCICIO DADO POR EL PROFE//
//Crear una funcion que reciba una cadena como parametro y devuelva el string invertido//

//Crear una funcion que reciba un string como parametro y que cuente la cantidad de vocales que contiene//

 function cadenaInvertido(nombre){

    var nombreInvertido="";
    
    for(var i=nombre.length-1;i>=0;i--){
        nombreInvertido+=nombre[i];
    }    
        return nombreInvertido;
 
}
console.log(cadenaInvertido("Tomas"));





function vocalesQueContiene(palabra){
    var cantidadDeVocales = 0;
    const vocales=["a","e","i","o","u"];

    for (var i=0; i<palabra.length;i++){
        const tieneVocales = vocales.includes(palabra[i]);
    //const tieneVocales=palabra.includes(vocales[i]);
        if (tieneVocales){
            cantidadDeVocales++;
        }
    }
    return cantidadDeVocales;
}
console.log("La cant. de vocales son: " + vocalesQueContiene("Tomas"));
*/


// Una funcion que nos diga si una palabra es palindromo//
 
function esPalindromo(palabra){

    var palabraInvertida ="";
    var siEsPalindromo= false;

    for(var i=palabra.length-1;i>=0;i--){
        palabraInvertida+=palabra[i];
    }    
    if (palabraInvertida==palabra){
        siEsPalindromo = true;
        console.log("la palabra es palindromo");
    }
    return siEsPalindromo;
}
console.log(esPalindromo("ana"));



//Funcion que dado un numero calcule su factorial