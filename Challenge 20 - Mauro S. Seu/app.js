//todo .......... EJERCICIO 20 ..........

//-Escriba un programa que pregunte cuántos números se van a introducir, pida esos números,
// y escriba el mayor, el menor y la media aritmética.

// -Se recuerda que la media aritmética de un conjunto de valores es la suma de esos valores
// dividida por la cantidad de valores.

let numero_cantidad = parseInt(prompt("¿Cuántos números desea introducir en el sistema: "));
let numero_mayor = 0;
let numero_menor = 0;
let lista_numeros = [];
let suma = 0;


for(index = 0; index < numero_cantidad; index++) {
    lista_numeros [index] = parseInt(prompt("Ingrese un número: "));
    suma = (suma + lista_numeros[index]);
}

let mayor = Math.max(...lista_numeros);
let menor = Math.min(...lista_numeros);
let media = suma / numero_cantidad;

alert(`El número mayor es ${mayor}`);
alert(`El número menor es ${menor}`);
alert(`La media aritmetica es de = ${media}`);