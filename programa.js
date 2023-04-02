// 1. escribir un programa que pregunte al usuario su nombre, y luego lo salude.
// 2. calcular el perimetro y area de un rectangulo dada su base y altura.

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

// 6. TAREA: 8am a 8:30am

// 7. zzzz

