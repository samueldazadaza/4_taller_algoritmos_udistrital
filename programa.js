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

