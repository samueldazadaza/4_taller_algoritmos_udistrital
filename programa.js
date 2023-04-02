// 1. escribir un programa que pregunte al usuario su nombre, y luego lo salude.
let nombre;
nombre = prompt();

//document.write(nombre);
console.log("hola" + nombre);


// 2. calcular el perimetro y area de un rectangulo dada su base y altura.
function calcular_area(base, altura){
    const area = base * altura;
    const perimetro = 2 * (base + altura);

    return [area, perimetro]
}
//retornar valores
let resultado = calcular(5,4);
//imprimir el area
console.log(resultado[0])



// 3. dados los catetos de un triangulo rectangulo, calcular su hipotenusa.
function calcular_hipotenusa(a, b){
    // Math.pow(a, 2)
    const hipotenusa = Math.sqrt(a**2 + b**2);
    return hipotenusa;
}

// 4. dados dos numeros, mostrar la suma, resta, division, y multiplicación de ambos.
function calculadora(a,b) {
    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);

}
calculadora(5,4);

// 5. calcular la media de tres numeros pedidos por teclado(terminal, consola).
function media(){
    //let campo_m = parseInt(document.getElementById("x").value);
    let campo_x = document.getElementById("x");
    let campo_y = document.getElementById("y");
    let campo_z = document.getElementById("z");

    //Casting: Transformar de manera explicita el tipo de dato de una varible en javascript.

    let x = parseInt(campo_x.value);
    let y = parseInt(campo_y.value);
    let z = parseInt(campo_z.value);

    let promedio = (x + y + z)/3;

    console.log(promedio);

    return promedio;
}

// 6. TAREA: 8am a 8:30am************************
// 6. Un alumno desea saber cual sera su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
// a. 55% del promedio de sus tres calificaciones parciales.
// b. 30% de la calificación del examen final.
// c. 15% de la calificación de un trabajo final.


// 7. ejercicio vehiculo con diferentes velocidades

function calcular_tiempo(){
    let v1 = parseInt(document.getElementById("x").value);
    let v2 = parseInt(document.getElementById("y").value);
    let d = parseInt(document.getElementById("z").value);

    let t = d/(v1 - v2);
    let tf = (t * 60);

    let resultado = document.getElementById("resultado");
    resultado.value = tf;
    return tf;
}
calcular_tiempo()


