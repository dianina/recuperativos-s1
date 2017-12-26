/*
*DIANA CHAPARRO CASTRO
*/

/*
PROBLEMA No.3
Ejemplo: arr = [4, 5, 1, 2, 3, 4] → 4 + 5
            retorna 9
*/

/*
Dado arreglo.
Se crea la var suma
*/
var arr = [3,5,6,2,8,1];
var suma = [];
/*
Método forEach, permite iterar por cada elemento del arreglo, según la condición dada,
en este caso (sumar número con su adyacente)
*/
arr.forEach(function sumarA(num, index) {
/*
La condición de la iteración, será que el resultado (lo guardado en el arreglo suma),
tenga una posición menos que arr. (Porque, si tiene las mismas posiciones que arr, nos arroja un NaN en
la última iteración, esto, porque la ultima posición de arr se sumaría con "nada").
*/
    if ((arr.length - 1) != index) {
        suma.push(arr[index] + arr[index + 1]);
    }
});
/*
Ahora, Método "Math.max" me devuelve el resultado mayor de las sumas.
*/
alert("Resultado: " + Math.max(...suma));


--------------------------------------------------------------------------------------------------------
/*
PROBLEMA No.12
Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado
es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
*/

/*
Usuario define palabra a comprobar por medio de prompt...
*/

var palabra = prompt("Ingresar palabra para verificar si es palíndrome");

function esPalindrome(palabra) {
/*
Paso a paso: con método Split, se separan todas las letras de la palabra.
Con método reverse, se ordenan a la inversa.
Con mètodo join, se vuelve a unir este resultado en un string.
*/
    var str = palabra.split("").reverse().join("");
/*
Ahora, al compararse string inicial con string final, si ambos son iguales, tenemos una palabra es palíndrome.
*/

    if (palabra == str) {
        alert(true);
    } else {
        alert(false);
    }
}
esPalindrome(palabra);


--------------------------------------------------------------------------------------------------------

/*
PROBLEMA No.13
Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
*/

/*
Usuario define las dos palabras...
*/
word1=prompt("Ingrese la primera palabra");
word2=prompt("Ingrese la segunda palabra");

j=1;
cont=0;
/*
Asegurar resultado, pasando valores a minúsculas y verificando que largo de ambas sea el mismo...
*/
if(word1.toLowerCase().length === word2.toLowerCase().length)
  {
/*
Asegurando que las letras sean las mismas en cada palabra (OJO: indexOf es sensible a mayúsculas)
*/
    for( i=0 ; (i<word1.length) && (j>=0) ; i++ )
      {
        j = word2.toLowerCase().indexOf(word1.toLowerCase().charAt(i));
        cont++;
      }
    
    if(cont === word1.length && cont === word2.length)
      {
        alert("True");
      }
    else
      {
        alert("False");
      }
    
  }

--------------------------------------------------------------------------------------------------------
/*
PROBLEMA No.14
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Output nuevoArr = [2, 4, 6, 8, 10]
*/

var numbers = [];
var i;
/*
Por un prompt se piden los numeros del input arr
y se almacenan en el arreglo: numbers
*/
for (i = 0; i < 10; i++) {
  numbers.push(Number(prompt("Ingrese el numero " + (i + 1))));
}
/*
Ahora, la variable que almacenará a los pares...
*/
var numPares = [];
numbers.forEach(function(numbers, index) {
  if (numbers % 2 == 0) {
/*
Confirmando que es par. De cumplirse, se va al arreglo pares...
*/
  numPares.push(numbers);
    } else {
        return false;
    }
});

alert(numPares); //Testeando que se imprima el arreglo con los numeros pares incluídos.

--------------------------------------------------------------------------------------------------------

/*
PROBLEMA No.15
Ejemplo: input arr = [1, 2, 3, 4]
Output nuevoArr = [12, 24, 36, 48]
*/

/*
Pido los números por medio de un prompt. Se guardarán en el arreglo numbers.
*/

var numbers = [];
var i;

for (i = 0; i < 4; i++) {
  numbers.push(Number(prompt("Ingresa el numero " + (i + 1))));
}

var xDoce = [];
numbers.forEach(function(numbers, index) {
  /*
Ahora, en numbers itero con un forEach y multiplico cada posición por 12.
Llevo los resultados al arreglo xdoce, los cuáles se imprimirán en pantalla.
*/
    xDoce.push(numbers * 12);
});

alert(xDoce);