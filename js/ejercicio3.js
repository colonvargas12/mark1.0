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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", descuentoTraje);
});

async function descuentoTraje() {
  const input = document.getElementById("precioTraje");
  const precio = Number(input.value);

  if (isNaN(precio) || precio <= 0) {
    alert("Por favor ingresa un precio válido mayor a 0.");
    return;
  }

  let descuento = precio > 2500 ? 0.15 : 0.08;
  let precioFinal = precio * (1 - descuento);

  // --- Pseudocódigo ---
  const pseudocodigo = [
    "INICIO",
    "LEER precio",
    "SI precio > 2500 ENTONCES",
    "  descuento ← 0.15",
    "SINO",
    "  descuento ← 0.08",
    "FIN SI",
    "precioFinal ← precio - (precio * descuento)",
    "ESCRIBIR precioFinal",
    "FIN"
  ];
  const explicacionPseudo = [
    "Inicio del algoritmo.",
    "Se lee el precio del traje.",
    "Comprobamos si el precio es mayor que 2500.",
    "Si es mayor, aplicamos descuento del 15%.",
    "Si no, aplicamos descuento del 8%.",
    "Fin de la condición.",
    "Calculamos el precio final restando el descuento.",
    "Mostramos el precio final.",
    "Fin del algoritmo."
  ];

  document.getElementById("pseudocodigoTraje").textContent = pseudocodigo.join("\n");
  document.getElementById("resultadoTraje").textContent = `Precio final: $${precioFinal.toFixed(2)}`;

  await hablarPromesa("Ejercicio: aplicar descuento en trajes.");
  for (let idx = 0; idx < pseudocodigo.length; idx++) {
    await hablarPromesa("Pseudocódigo: " + pseudocodigo[idx]);
    await hablarPromesa("Explicación: " + explicacionPseudo[idx]);
  }

  // --- WHILE ---
  const whileLineas = [
    "let contadorWhile = 0;",
    "let precioTemp = precio;",
    "while (contadorWhile < 1) {",
    "  if(precioTemp > 2500) descuento = 0.15;",
    "  else descuento = 0.08;",
    "  precioFinal = precioTemp - (precioTemp * descuento);",
    "  contadorWhile++;",
    "}"
  ];
  const explicacionWhile = [
    "Inicializamos contadorWhile en 0.",
    "Creamos una variable temporal con el precio.",
    "Ciclo WHILE que se ejecuta una vez para simular el cálculo.",
    "Si precio > 2500, descuento = 15%.",
    "Si no, descuento = 8%.",
    "Calculamos el precio final.",
    "Incrementamos contadorWhile para finalizar el ciclo.",
    "Fin del ciclo WHILE."
  ];

  document.getElementById("explicacionWhileTraje").textContent = whileLineas.join("\n");
  document.getElementById("resultadoWhileTraje").textContent = `Precio final: $${precioFinal.toFixed(2)}`;

  await hablarPromesa("WHILE en JavaScript:");
  for (let idx = 0; idx < whileLineas.length; idx++) {
    await hablarPromesa("Código: " + whileLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionWhile[idx]);
  }

  // --- FOR ---
  const forLineas = [
    "let precioTemp = precio;",
    "for(let contadorX = 0; contadorX < 1; contadorX++) {",
    "  if(precioTemp > 2500) descuento = 0.15;",
    "  else descuento = 0.08;",
    "  precioFinal = precioTemp - (precioTemp * descuento);",
    "}"
  ];
  const explicacionFor = [
    "Creamos variable temporal con el precio.",
    "Iniciamos ciclo FOR que se ejecuta una vez para simular el cálculo.",
    "Si precioTemp > 2500, descuento = 15%.",
    "Si no, descuento = 8%.",
    "Calculamos el precio final.",
    "Fin del ciclo FOR."
  ];

  document.getElementById("explicacionForTraje").textContent = forLineas.join("\n");
  document.getElementById("resultadoForTraje").textContent = `Precio final: $${precioFinal.toFixed(2)}`;

  await hablarPromesa("FOR en JavaScript:");
  for (let idx = 0; idx < forLineas.length; idx++) {
    await hablarPromesa("Código: " + forLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionFor[idx]);
  }

  // --- Tabla de prueba de escritorio ---
  const tbody = document.getElementById("cuerpoTablaTraje");
  tbody.innerHTML = "";
  const filaRow = tbody.insertRow();
  filaRow.insertCell().textContent = 1;
  filaRow.insertCell().textContent = precio.toFixed(2);
  filaRow.insertCell().textContent = (descuento*100) + "%";
  filaRow.insertCell().textContent = precioFinal.toFixed(2);

  await hablarPromesa(`Tabla: Precio inicial ${precio.toFixed(2)}, descuento ${(descuento*100)}%, precio final ${precioFinal.toFixed(2)}`);
  await hablarPromesa(`Resumen final: Precio final ${precioFinal.toFixed(2)}`);
}
