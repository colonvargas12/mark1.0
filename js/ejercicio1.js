function textoParaVoz(texto) {
  return texto
    .replace(/>/g, " mayor que ")
    .replace(/</g, " menor que ")
    .replace(/==/g, " es igual a ")
    .replace(/\+/g, " más ")
    .replace(/-/g, " menos ")
    .replace(/\*/g, " por ")
    .replace(/\//g, " entre ")
    .replace(/=/g, " es igual ")
    .replace(/\n/g, ". ");
}

function hablarPromesa(texto) {
  return new Promise(resolve => {
    speechSynthesis.cancel(); 
    const voz = new SpeechSynthesisUtterance(textoParaVoz(texto));
    voz.lang = "es-ES";
    voz.rate = 1.2;
    voz.pitch = 0.5;
    voz.onend = resolve;
    speechSynthesis.speak(voz);
  });
}

async function iniciarExplicacion() {
  const input = document.getElementById("dato");
  const numero = Number(input.value);

  if (isNaN(numero)) {
    alert("Por favor ingresa un número válido.");
    return;
  }

  const resultado = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "neutro";
  const mensajeFinal = `El número ${numero} es ${resultado}`;

  // --- PSEUDOCÓDIGO ---
  const pseudocodigoLineas = [
    "INICIO",
    "LEER numero",
    "SI numero > 0 ENTONCES",
    "  ES positivo",
    "SINO SI numero < 0 ENTONCES",
    "  ES negativo",
    "SINO",
    "  ES neutro",
    "FIN SI",
    "FIN"
  ];

  const explicacionPseudo = [
    "Inicio del algoritmo.",
    "Leemos el número ingresado por el usuario.",
    "Comprobamos si el número es mayor que cero.",
    "Si es mayor que cero, el número es positivo.",
    "En caso contrario, comprobamos si es menor que cero.",
    "Si es menor que cero, el número es negativo.",
    "Si no se cumple ninguna de las condiciones anteriores, entonces es neutro.",
    "Mostramos el resultado final.",
    "Fin de la estructura condicional.",
    "Fin del algoritmo."
  ];

  document.getElementById("seccionPseudocodigo").style.display = "block";
  document.getElementById("pseudocodigo").textContent = pseudocodigoLineas.join("\n");
  document.getElementById("resultadoPseudocodigo").textContent = mensajeFinal;

  await hablarPromesa("Ejercicio: determinar si un número es positivo, negativo o neutro.");
  for (let idx = 0; idx < pseudocodigoLineas.length; idx++) {
    await hablarPromesa("Pseudocódigo: " + pseudocodigoLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionPseudo[idx]);
  }

  // --- WHILE EN JS ---
  const whileLineas = [
    "let contadorWhile = 0;",
    "while (contadorWhile < 3) {",
    "  if (numero > 0) console.log('positivo');",
    "  else if (numero < 0) console.log('negativo');",
    "  else console.log('neutro');",
    "  contadorWhile++;",
    "}"
  ];

  const explicacionWhile = [
    "Inicializamos la variable contadorWhile en cero.",
    "Creamos un ciclo WHILE que se ejecuta mientras contadorWhile sea menor que tres.",
    "Dentro del ciclo, verificamos si el número es mayor que cero.",
    "Si no, verificamos si el número es menor que cero.",
    "Si ninguna condición se cumple, el número es neutro.",
    "Incrementamos contadorWhile para no generar un ciclo infinito.",
    "Fin del ciclo WHILE."
  ];

  document.getElementById("explicacionWhile").textContent = whileLineas.join("\n");
  document.getElementById("resultadoWhile").textContent = mensajeFinal;

  await hablarPromesa("WHILE en JavaScript:");
  for (let idx = 0; idx < whileLineas.length; idx++) {
    await hablarPromesa("Código: " + whileLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionWhile[idx]);
  }

  await hablarPromesa("Simulación paso a paso del WHILE:");
  let contadorWhile = 0;
  while (contadorWhile < 3) {
    let resWHILE = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "neutro";
    await hablarPromesa(`Iteración ${contadorWhile + 1}: El número ${numero} es ${resWHILE}`);
    contadorWhile++;
  }

  // --- FOR EN JS ---
  const forLineas = [
    "for (let contadorFor = 0; contadorFor < 3; contadorFor++) {",
    "  if (numero > 0) console.log('positivo');",
    "  else if (numero < 0) console.log('negativo');",
    "  else console.log('neutro');",
    "}"
  ];

  const explicacionFor = [
    "Iniciamos un ciclo FOR con la variable contadorFor en cero.",
    "El ciclo se ejecuta mientras contadorFor sea menor que tres.",
    "Verificamos si el número es mayor que cero.",
    "Si no, verificamos si es menor que cero.",
    "Si ninguna condición se cumple, el número es neutro.",
    "Fin del ciclo FOR."
  ];

  document.getElementById("seccionFor").style.display = "block";
  document.getElementById("explicacionFor").textContent = forLineas.join("\n");
  document.getElementById("resultadoFor").textContent = mensajeFinal;

  await hablarPromesa("FOR en JavaScript:");
  for (let idx = 0; idx < forLineas.length; idx++) {
    await hablarPromesa("Código: " + forLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionFor[idx]);
  }

  await hablarPromesa("Simulación paso a paso del FOR:");
  for (let contadorFor = 0; contadorFor < 3; contadorFor++) {
    let resFOR = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "neutro";
    await hablarPromesa(`Iteración ${contadorFor + 1}: El número ${numero} es ${resFOR}`);
  }

  // --- Tabla de prueba de escritorio ---
  const tbody = document.getElementById("cuerpoTabla");
  if (tbody) tbody.innerHTML = "";
  for (let filaIter = 0; filaIter < 3; filaIter++) {
    const resParcial = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "neutro";
    if (tbody) {
      const fila = tbody.insertRow();
      fila.insertCell().textContent = filaIter + 1;                    // iteración
      fila.insertCell().textContent = filaIter;                        // índice
      fila.insertCell().textContent = numero;                          // valor
      fila.insertCell().textContent = numero > 0 ? ">0" : numero < 0 ? "<0" : "==0"; // condición
      fila.insertCell().textContent = resParcial;                      // resultado
    }
    await hablarPromesa(`Tabla: Iteración ${filaIter + 1}, valor ${numero}, resultado ${resParcial}`);
  }

  await hablarPromesa(`Resumen final: ${mensajeFinal}`);
}
