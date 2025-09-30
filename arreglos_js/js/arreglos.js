
// Función auxiliar simple para mostrar el resultado en la interfaz
const mostrarResultado = (idDiv, mensaje) => {
    document.getElementById(idDiv).innerHTML = `<strong>Resultado:</strong> ${mensaje}`;
};

// =================================================================
// DEFINICIÓN DE LAS 10 FUNCIONES BASE (Usando solo for/if)
// =================================================================

// 1. Contar caracteres (E1)
const contarCaracteres = (palabra) => {
    return "La palabra tiene " + palabra.length + " letras.";
};

// 2. Contar apariciones de una letra (E2, E9)
const contarApariciones = (cadena, letra) => {
    let conteo = 0;
    const cadenaLimpia = cadena.toLowerCase();
    const letraLimpia = letra.toLowerCase();
    
    // Recorrer la cadena con un ciclo for
    for (let i = 0; i < cadenaLimpia.length; i++) {
        if (cadenaLimpia[i] === letraLimpia) {
            conteo++;
        }
    }
    return "La letra '" + letra + "' aparece " + conteo + " veces.";
};

// 3. Invertir un texto (E3)
const invertirCadena = (cadena) => {
    let invertida = "";
    // Recorrer la cadena hacia atrás
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
};

// 4. Comparar longitudes de cadenas (E4, E8)
const compararLongitudes = (cadena1, cadena2) => {
    if (cadena1.length > cadena2.length) {
        return "La primera cadena es más larga.";
    } else if (cadena2.length > cadena1.length) {
        return "La segunda cadena es más larga.";
    } else {
        return "Ambas tienen la misma longitud.";
    }
};

// 5. Iniciales de un nombre completo (E5)
const obtenerIniciales = (nombreCompleto) => {
    const palabras = nombreCompleto.trim().split(' ');
    let iniciales = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > 0) {
            // Usa charAt() para obtener la primera letra
            iniciales += palabras[i].charAt(0).toUpperCase() + ".";
        }
    }
    return iniciales;
};

// 6. Reemplazo de caracteres (E6)
const reemplazarCaracter = (cadena, buscar, reemplazar) => {
    // Reemplazamos sin usar replaceAll, solo con un ciclo for
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === buscar) {
            resultado += reemplazar;
        } else {
            resultado += cadena[i];
        }
    }
    return resultado;
};

// 7. Palabra palíndroma (E7)
const esPalindromo = (palabra) => {
    const limpia = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    let invertida = "";
    
    for (let i = limpia.length - 1; i >= 0; i--) {
        invertida += limpia[i];
    }
    // Devuelve true o false
    return limpia === invertida; 
};

// 8. Dividir oración en palabras (E10)
const dividirOracion = (frase) => {
    // Retorna el array usando split, la forma más sencilla para dividir
    return frase.trim().split(/\s+/).filter(word => word.length > 0);
};

// 9. Calcular Suma de un Array (Base para promedio)
const sumarArray = (numeros) => {
    let suma = 0;
    // Usamos el ciclo for para sumar
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};

// 10. Función Factorial (E24/E38)
const factorial = (num) => {
    if (num <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
};


// =================================================================
// CONTROLADORES DE EJECUCIÓN POR BLOQUE
// =================================================================

// FUNCIÓN CONTROLADORA DEL BLOQUE 1
const ejecutarB1 = (numEjercicio) => {
    let resultado = "";
    switch (numEjercicio) {
        case 1:
            resultado = contarCaracteres("Manzana"); 
            break;
        case 2:
            resultado = "En 'Me encanta el café', " + contarApariciones("Me encanta el café", "e"); 
            break;
        case 3:
            resultado = "Original: Quito → Invertido: " + invertirCadena("Quito"); 
            break;
        case 4:
            resultado = compararLongitudes("García", "Pérez"); 
            break;
        case 5:
            resultado = obtenerIniciales("Ana María Torres"); 
            break;
        case 6:
            // Reutiliza F6, reemplazando todas las 'o' por '#'
            resultado = reemplazarCaracter("Programador", "o", "#"); 
            break;
        case 7:
            const p7 = "radar";
            resultado = esPalindromo(p7) ? "La palabra '" + p7 + "' es un palíndromo." : "'" + p7 + "' no es un palíndromo."; 
            break;
        case 8:
            // Reutiliza F4 para determinar la más larga
            resultado = "La frase más larga es: '" + compararLongitudes("Me gusta el fútbol", "Prefiero el baloncesto") + "'"; 
            break;
        case 9:
            resultado = "En 'Examen de programación', " + contarApariciones("Examen de programación", "m"); 
            break;
        case 10:
            // Reutiliza F8 y junta el array con <br>
            resultado = dividirOracion("Me gusta aprender programación").join('<br>'); 
            break;
    }
    mostrarResultado('resultadoB1', resultado);
};

// FUNCIÓN CONTROLADORA DEL BLOQUE 2 (REUTILIZACIÓN DIRECTA)
const ejecutarB2 = (numEjercicio) => {
    let mensaje = "<strong>Reutilización de Lógica de Cadenas:</strong><br>";
    let resultados = [];
    
    // Se utiliza for/while/map() para aplicar las 10 funciones base a varios datos
    switch (numEjercicio) {
        case 1: // Contar caracteres en Arreglo. REUTILIZA F1
            const palabras = ["Manzana", "Pera", "Sandía"];
            for(let i = 0; i < palabras.length; i++) {
                resultados.push(contarCaracteres(palabras[i]));
            }
            break;
        case 2: // Contar Letra en Varias Frases. REUTILIZA F2
            const frases = ["Me encanta el café", "Estudio programación"];
            for(let i = 0; i < frases.length; i++) {
                resultados.push("En la frase " + (i+1) + ", la 'e' " + contarApariciones(frases[i], 'e'));
            }
            break;
        case 3: // Invertir Varios Textos. REUTILIZA F3
            const textos = ["Quito", "Lima"];
            for(let i = 0; i < textos.length; i++) {
                resultados.push(textos[i] + " → " + invertirCadena(textos[i]));
            }
            break;
        case 4: // Comparar Pares en Arreglo. REUTILIZA F4
            const pares = [["García", "Pérez"], ["Lopez", "Ramirez"]];
            for(let i = 0; i < pares.length; i++) {
                resultados.push(pares[i][0] + " vs " + pares[i][1] + ": " + compararLongitudes(pares[i][0], pares[i][1]));
            }
            break;
        case 5: // Iniciales de Varios Nombres. REUTILIZA F5
            const nombres = ["Ana María Torres", "Juan Carlos Pérez"];
            for(let i = 0; i < nombres.length; i++) {
                resultados.push(obtenerIniciales(nombres[i]));
            }
            break;
        case 6: // Reemplazo en Varios Textos. REUTILIZA F6
            const palabrasR = ["Programador", "Motor"];
            for(let i = 0; i < palabrasR.length; i++) {
                resultados.push("Original: " + palabrasR[i] + " → " + reemplazarCaracter(palabrasR[i], 'o', '#'));
            }
            break;
        case 7: // Palíndromos en Arreglo. REUTILIZA F7
            const palabrasP = ["radar", "oso", "casa"];
            for(let i = 0; i < palabrasP.length; i++) {
                const esP = esPalindromo(palabrasP[i]);
                resultados.push(palabrasP[i] + " → " + (esP ? 'es palíndromo' : 'no es palíndromo'));
            }
            break;
        case 8: // Frase Más Larga en Pares. REUTILIZA F4
            const paresL = [["Me gusta el fútbol", "Prefiero el baloncesto"], ["Hola", "Adiós"]];
            for(let i = 0; i < paresL.length; i++) {
                resultados.push("Par " + (i+1) + ": " + compararLongitudes(paresL[i][0], paresL[i][1]));
            }
            break;
        case 9: // Contar Carácter en Arreglo. REUTILIZA F2
            const datosC = [["Examen de programación", "m"], ["Hola mundo", "o"]];
            for(let i = 0; i < datosC.length; i++) {
                resultados.push("En el texto, '" + datosC[i][1] + "' " + contarApariciones(datosC[i][0], datosC[i][1]));
            }
            break;
        case 10: // Dividir Varias Oraciones. REUTILIZA F8
            const oraciones = ["Me gusta aprender programación", "Hola mundo"];
            for(let i = 0; i < oraciones.length; i++) {
                resultados.push("Oración: " + dividirOracion(oraciones[i]).join(', '));
            }
            break;
    }
    
    if (resultados.length > 0) mensaje += resultados.join('<br>');
    mostrarResultado('resultadoB2', mensaje);
};

// FUNCIÓN CONTROLADORA DEL BLOQUE 3 (SECUENCIALES)
const ejecutarB3 = (numEjercicio) => {
    let resultado = "";
    
    switch (numEjercicio) {
        case 17: // Promedio de 5 números. REUTILIZA F9
            const datos17 = [5, 7, 9, 3, 6];
            // F9 + División
            resultado = "Promedio = " + (sumarArray(datos17) / datos17.length);
            break;
        case 18: // Contar impares de 5
            const datos18 = [2, 5, 7, 8, 10];
            let impares = 0;
            for (let i = 0; i < datos18.length; i++) {
                if (datos18[i] % 2 !== 0) { impares++; }
            }
            resultado = "Cantidad de impares = " + impares;
            break;
        case 19: // Mayores de edad de 5
            const edades19 = [15, 22, 18, 30, 12];
            let mayores = 0;
            for (let i = 0; i < edades19.length; i++) {
                if (edades19[i] >= 18) { mayores++; }
            }
            resultado = "Mayores de edad: " + mayores;
            break;
        case 20: // Buscar valor (15) en 4 números
            const datos20 = [4, 8, 15, 23];
            const valor20 = 15;
            let existe = false;
            for (let i = 0; i < datos20.length; i++) {
                if (datos20[i] === valor20) { existe = true; break; }
            }
            resultado = existe ? "El valor " + valor20 + " existe." : "El valor " + valor20 + " no existe.";
            break;
        case 21: // Concatenar 3 palabras: REUTILIZA F8
            resultado = dividirOracion("Me gusta programar").join(' ');
            break;
        case 22: // Cubo de 3 números
            const datos22 = [2, 3, 4];
            let cubos = [];
            for (let i = 0; i < datos22.length; i++) {
                cubos.push(datos22[i] * datos22[i] * datos22[i]);
            }
            resultado = cubos.join(', ');
            break;
        case 23: // Tabla del 5 (hasta 10)
            let tabla = [];
            for (let i = 1; i <= 10; i++) {
                tabla.push(5 * i);
            }
            resultado = tabla.join(', ');
            break;
        case 24: // Factorial de 4: REUTILIZA F10
            resultado = factorial(4);
            break;
        case 25: // Mostrar Pares de 4
            const datos25 = [3, 8, 11, 14];
            let pares = [];
            for (let i = 0; i < datos25.length; i++) {
                if (datos25[i] % 2 === 0) { pares.push(datos25[i]); }
            }
            resultado = pares.join(', ');
            break;
        case 26: // Sumar 2 grupos de 3 números
            const A = [2, 4, 6], B = [1, 3, 5];
            let C = [];
            for (let i = 0; i < A.length; i++) {
                C.push(A[i] + B[i]);
            }
            resultado = "C=(" + C.join(', ') + ")";
            break;
    }
    mostrarResultado('resultadoB3', resultado);
};

// FUNCIÓN CONTROLADORA DEL BLOQUE 4 (REUTILIZACIÓN CONCEPTUAL)
const ejecutarB4 = (numEjercicio) => {
    let resultado = "";
    const datosBase = [5, 7, 9, 3, 6]; 
    
    // Usamos ciclos for, if y push para simular la reutilización con arrays
    switch (numEjercicio) {
        case 17: // Promedio de Arreglo: Lógica de suma y división. REUTILIZA F9
            resultado = "El promedio es " + (sumarArray(datosBase) / datosBase.length);
            break;
        case 18: // Contar Impares en Arreglo: Lógica de filtro y conteo
            let impares = 0;
            for (let i = 0; i < datosBase.length; i++) {
                if (datosBase[i] % 2 !== 0) { impares++; }
            }
            resultado = "Cantidad de impares: " + impares;
            break;
        case 19: // Mayores de Edad en Arreglo: Lógica de filtro y conteo
            const edades = [15, 22, 18, 30, 12];
            let mayores = 0;
            for (let i = 0; i < edades.length; i++) {
                if (edades[i] >= 18) { mayores++; }
            }
            resultado = "Mayores de edad: " + mayores;
            break;
        case 20: // Buscar Valor en Arreglo: Lógica de búsqueda
            const arr20 = [4, 8, 15, 23];
            const valor20 = 15;
            let existe = false;
            for (let i = 0; i < arr20.length; i++) {
                if (arr20[i] === valor20) { existe = true; break; }
            }
            resultado = existe ? "El valor " + valor20 + " sí existe en el arreglo." : "El valor " + valor20 + " no existe en el arreglo.";
            break;
        case 21: // Concatenar Arreglo de Palabras: Lógica de unión. REUTILIZA F8
            resultado = ["Me", "gusta", "programar"].join(' ');
            break;
        case 22: // Cubo de Elementos en Arreglo: Lógica de ciclo y push
            const datos22 = [2, 3, 4];
            let cubos = [];
            for (let i = 0; i < datos22.length; i++) {
                cubos.push(datos22[i] * datos22[i] * datos22[i]);
            }
            resultado = "[" + cubos.join(', ') + "]";
            break;
        case 23: // Tablas de Multiplicar de Arreglo: Lógica de ciclo y push
            const numeros37 = [3, 5];
            let tablas = [];
            for (let i = 0; i < numeros37.length; i++) {
                const num = numeros37[i];
                let tabla = [];
                for (let j = 1; j <= 10; j++) tabla.push(num * j);
                tablas.push("Tabla de " + num + ": " + tabla.join(','));
            }
            resultado = tablas.join('<br>');
            break;
        case 24: // Factorial de Elementos en Arreglo: Lógica de ciclo y REUTILIZA F10
            const datos24 = [4, 6];
            let factoriales = [];
            for (let i = 0; i < datos24.length; i++) {
                factoriales.push(factorial(datos24[i]));
            }
            resultado = "[" + factoriales.join(', ') + "]";
            break;
        case 25: // Copiar Pares a Otro Arreglo: Lógica de filtro y push
            const datos25 = [3, 8, 11, 14, 25];
            let pares = [];
            for (let i = 0; i < datos25.length; i++) {
                if (datos25[i] % 2 === 0) { pares.push(datos25[i]); }
            }
            resultado = "[" + pares.join(', ') + "]";
            break;
        case 26: // Suma de Dos Arreglos: Lógica de ciclo y push
            const A = [2, 4, 6], B = [1, 3, 5];
            let C = [];
            for (let i = 0; i < A.length; i++) {
                C.push(A[i] + B[i]);
            }
            resultado = "C=[" + C.join(', ') + "]";
            break;
    }
    mostrarResultado('resultadoB4', resultado);
};
