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
  document.getElementById("btnCalcular").addEventListener("click", calcularViaje);
});

async function calcularViaje() {
  const tipo = document.getElementById("tipoBus").value.toUpperCase();
  const distancia = Number(document.getElementById("distancia").value);
  let personas = Number(document.getElementById("personas").value);

  if (!["A","B","C"].includes(tipo) || isNaN(distancia) || distancia<=0 || isNaN(personas) || personas<=0) {
    alert("Ingrese datos válidos.");
    return;
  }

  if (personas < 20) personas = 20; // cobrar mínimo 20

  let precioKM = tipo === "A" ? 2.0 : tipo === "B" ? 2.5 : 3.0;
  let costoTotal = precioKM * distancia * personas;
  let costoPersona = costoTotal / personas;

  const pseudocodigo = [
    "INICIO",
    "LEER tipoBus, distancia, personas",
    "SI personas < 20 ENTONCES",
    "  personas ← 20",
    "FIN SI",
    "SEGÚN tipoBus",
    "  A → precioKM = 2.0",
    "  B → precioKM = 2.5",
    "  C → precioKM = 3.0",
    "FIN SEGÚN",
    "costoTotal ← precioKM * distancia * personas",
    "costoPersona ← costoTotal / personas",
    "ESCRIBIR costoTotal, costoPersona",
    "FIN"
  ];
  const explicacionPseudo = [
    "Inicio del algoritmo.",
    "Leemos tipo de autobús, distancia y número de personas.",
    "Si hay menos de 20 personas, cobrar como 20.",
    "Asignamos personas = 20 si aplica.",
    "Dependiendo del tipo de autobús, asignamos precio por km.",
    "Si tipo A → 2.0, B → 2.5, C → 3.0",
    "Calculamos el costo total multiplicando precio por km, distancia y personas.",
    "Calculamos el costo por persona.",
    "Mostramos los resultados.",
    "Fin del algoritmo."
  ];

  document.getElementById("pseudocodigoBus").textContent = pseudocodigo.join("\n");
  document.getElementById("resultadoBus").textContent = `Costo total: $${costoTotal.toFixed(2)} – Costo por persona: $${costoPersona.toFixed(2)}`;

  await hablarPromesa("Ejercicio: calcular costo de viaje por autobuses.");
  for (let idx=0; idx<pseudocodigo.length; idx++) {
    await hablarPromesa("Pseudocódigo: " + pseudocodigo[idx]);
    await hablarPromesa("Explicación: " + explicacionPseudo[idx]);
  }

  // --- WHILE ---
  const whileLineas = [
    "let contadorWhile = 0;",
    "while(contadorWhile < 1) {",
    "  if(personas < 20) personas = 20;",
    "  let precioKM = tipo === 'A' ? 2.0 : tipo === 'B' ? 2.5 : 3.0;",
    "  let costoTotal = precioKM * distancia * personas;",
    "  let costoPersona = costoTotal / personas;",
    "  contadorWhile++;",
    "}"
  ];
  const explicacionWhile = [
    "Inicializamos contadorWhile en 0.",
    "Ciclo WHILE que se ejecuta una vez.",
    "Si personas < 20, asignamos 20.",
    "Asignamos precio por km según tipo de autobús.",
    "Calculamos costo total.",
    "Calculamos costo por persona.",
    "Incrementamos contadorWhile para salir del ciclo."
  ];
  document.getElementById("explicacionWhileBus").textContent = whileLineas.join("\n");
  document.getElementById("resultadoWhileBus").textContent = `Costo total: $${costoTotal.toFixed(2)} – Costo por persona: $${costoPersona.toFixed(2)}`;

  await hablarPromesa("WHILE en JavaScript:");
  for (let idx=0; idx<whileLineas.length; idx++){
    await hablarPromesa("Código: " + whileLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionWhile[idx]);
  }

  // --- FOR ---
  const forLineas = [
    "let precioKM = tipo === 'A' ? 2.0 : tipo === 'B' ? 2.5 : 3.0;",
    "for(let contadorX = 0; contadorX < 1; contadorX++) {",
    "  if(personas < 20) personas = 20;",
    "  let costoTotal = precioKM * distancia * personas;",
    "  let costoPersona = costoTotal / personas;",
    "}"
  ];
  const explicacionFor = [
    "Asignamos precio por km según tipo de autobús.",
    "Ciclo FOR que se ejecuta una vez.",
    "Si personas < 20, asignamos 20.",
    "Calculamos costo total.",
    "Calculamos costo por persona.",
    "Fin del ciclo FOR."
  ];

  document.getElementById("explicacionForBus").textContent = forLineas.join("\n");
  document.getElementById("resultadoForBus").textContent = `Costo total: $${costoTotal.toFixed(2)} – Costo por persona: $${costoPersona.toFixed(2)}`;

  await hablarPromesa("FOR en JavaScript:");
  for (let idx=0; idx<forLineas.length; idx++){
    await hablarPromesa("Código: " + forLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionFor[idx]);
  }

  // --- Tabla ---
  const tbody = document.getElementById("cuerpoTablaBus");
  tbody.innerHTML = "";
  const filaRow = tbody.insertRow();
  filaRow.insertCell().textContent = 1;
  filaRow.insertCell().textContent = tipo;
  filaRow.insertCell().textContent = distancia;
  filaRow.insertCell().textContent = personas;
  filaRow.insertCell().textContent = costoTotal.toFixed(2);
  filaRow.insertCell().textContent = costoPersona.toFixed(2);

  await hablarPromesa(`Tabla: Tipo ${tipo}, distancia ${distancia}, personas ${personas}, costo total ${costoTotal.toFixed(2)}, costo por persona ${costoPersona.toFixed(2)}`);
}
