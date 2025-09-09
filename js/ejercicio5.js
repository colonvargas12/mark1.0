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
  document.getElementById("btnCalcular").addEventListener("click", calcularCita);
});

async function calcularCita() {
  const numero = Number(document.getElementById("numeroCita").value);
  if (isNaN(numero) || numero <= 0) {
    alert("Ingrese un número de cita válido.");
    return;
  }

  // Determinar costo
  let costo;
  if (numero <= 3) costo = 200;
  else if (numero <=5) costo = 150;
  else if (numero <=8) costo = 100;
  else costo = 50;

  // Calcular acumulado
  let acumulado = 0;
  for (let j=1; j<=numero; j++){
    if (j <=3) acumulado += 200;
    else if (j <=5) acumulado += 150;
    else if (j <=8) acumulado += 100;
    else acumulado += 50;
  }

  const pseudocodigo = [
    "INICIO",
    "LEER numeroCita",
    "SI numeroCita <= 3 ENTONCES",
    "  costo = 200",
    "SINO SI numeroCita <= 5 ENTONCES",
    "  costo = 150",
    "SINO SI numeroCita <= 8 ENTONCES",
    "  costo = 100",
    "SINO",
    "  costo = 50",
    "FIN SI",
    "acumulado = SUMA costos de 1 a numeroCita",
    "ESCRIBIR costo, acumulado",
    "FIN"
  ];

  const explicacionPseudo = [
    "Inicio del algoritmo.",
    "Leemos el número de la cita.",
    "Si la cita es 1 a 3, costo = 200.",
    "Si la cita es 4 a 5, costo = 150.",
    "Si la cita es 6 a 8, costo = 100.",
    "Si la cita es 9 o más, costo = 50.",
    "Calculamos el acumulado sumando los costos hasta la cita actual.",
    "Mostramos el costo de la cita y el acumulado.",
    "Fin del algoritmo."
  ];

  document.getElementById("pseudocodigoCita").textContent = pseudocodigo.join("\n");
  document.getElementById("resultadoCita").textContent = `Costo cita ${numero}: $${costo} – Acumulado: $${acumulado}`;

  await hablarPromesa("Ejercicio: calcular costo de citas médicas.");
  for (let idx=0; idx<pseudocodigo.length; idx++) {
    await hablarPromesa("Pseudocódigo: " + pseudocodigo[idx]);
    await hablarPromesa("Explicación: " + explicacionPseudo[idx]);
  }

  // --- WHILE ---
  const whileLineas = [
    "let contadorWhile = 1;",
    "let acumulado = 0;",
    "while(contadorWhile <= numero) {",
    "  if(contadorWhile <=3) costoIter = 200;",
    "  else if(contadorWhile <=5) costoIter = 150;",
    "  else if(contadorWhile <=8) costoIter = 100;",
    "  else costoIter = 50;",
    "  acumulado += costoIter;",
    "  contadorWhile++;",
    "}"
  ];
  const explicacionWhile = [
    "Inicializamos contador en 1 y acumulado en 0.",
    "Mientras contador <= numero, se calcula el costo de la cita actual.",
    "Sumamos el costo al acumulado.",
    "Incrementamos el contador para la siguiente cita.",
    "Fin del ciclo WHILE."
  ];
  document.getElementById("explicacionWhileCita").textContent = whileLineas.join("\n");
  document.getElementById("resultadoWhileCita").textContent = `Costo cita ${numero}: $${costo} – Acumulado: $${acumulado}`;

  await hablarPromesa("WHILE en JavaScript:");
  for (let idx=0; idx<whileLineas.length; idx++){
    await hablarPromesa("Código: " + whileLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionWhile[idx]);
  }

  // --- FOR ---
  const forLineas = [
    "let acumulado = 0;",
    "for(let contX=1; contX<=numero; contX++) {",
    "  if(contX <=3) costoIter = 200;",
    "  else if(contX <=5) costoIter = 150;",
    "  else if(contX <=8) costoIter = 100;",
    "  else costoIter = 50;",
    "  acumulado += costoIter;",
    "}"
  ];
  const explicacionFor = [
    "Inicializamos acumulado en 0.",
    "Ciclo FOR desde 1 hasta numero.",
    "Calculamos costo de cada cita según regla.",
    "Sumamos al acumulado.",
    "Fin del ciclo FOR."
  ];
  document.getElementById("explicacionForCita").textContent = forLineas.join("\n");
  document.getElementById("resultadoForCita").textContent = `Costo cita ${numero}: $${costo} – Acumulado: $${acumulado}`;

  await hablarPromesa("FOR en JavaScript:");
  for (let idx=0; idx<forLineas.length; idx++){
    await hablarPromesa("Código: " + forLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionFor[idx]);
  }

  // --- Tabla ---
  const tbody = document.getElementById("cuerpoTablaCita");
  tbody.innerHTML = "";
  for (let f=1; f<=numero; f++){
    let costoFila = f<=3 ? 200 : f<=5 ? 150 : f<=8 ? 100 : 50;
    let filaRow = tbody.insertRow();
    filaRow.insertCell().textContent = f;
    filaRow.insertCell().textContent = f;
    filaRow.insertCell().textContent = costoFila;
    let acumulFila = 0;
    for (let k=1;k<=f;k++){
      acumulFila += k<=3 ? 200 : k<=5 ? 150 : k<=8 ? 100 : 50;
    }
    filaRow.insertCell().textContent = acumulFila;
    await hablarPromesa(`Tabla: cita ${f}, costo ${costoFila}, acumulado ${acumulFila}`);
  }
}
