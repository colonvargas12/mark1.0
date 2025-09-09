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
  document.getElementById("btnCalcular").addEventListener("click", calcularFabrica);
});

async function calcularFabrica() {
  const clave = Number(document.getElementById("clave").value);
  const mp = Number(document.getElementById("materiaPrima").value);

  if (isNaN(clave) || clave<1 || clave>6 || isNaN(mp) || mp<=0){
    alert("Ingrese datos válidos.");
    return;
  }

  const manoObra = mp*0.75;
  const gastos = mp*0.35;
  const costoProd = mp + manoObra + gastos;
  const precioVenta = costoProd*1.45;

  // --- Pseudocódigo ---
  const pseudocodigo = [
    "INICIO",
    "LEER clave, materiaPrima",
    "manoObra = 0.75 * materiaPrima",
    "gastos = 0.35 * materiaPrima",
    "costoProduccion = materiaPrima + manoObra + gastos",
    "precioVenta = costoProduccion * 1.45",
    "ESCRIBIR costoProduccion, precioVenta",
    "FIN"
  ];
  const explicacionPseudo = [
    "Inicio del algoritmo.",
    "Leemos clave y costo de materia prima.",
    "Calculamos mano de obra = 75% de materia prima.",
    "Calculamos gastos = 35% de materia prima.",
    "Costo de producción = materia prima + mano de obra + gastos.",
    "Precio de venta = costo producción * 1.45.",
    "Mostramos costo de producción y precio de venta.",
    "Fin del algoritmo."
  ];

  document.getElementById("pseudocodigoFabrica").textContent = pseudocodigo.join("\n");
  document.getElementById("resultadoFabrica").textContent = `Costo producción: $${costoProd.toFixed(2)} – Precio venta: $${precioVenta.toFixed(2)}`;

  await hablarPromesa("Ejercicio: calcular precio de venta en Fábrica El Cometa.");
  for (let idx=0; idx<pseudocodigo.length; idx++){
    await hablarPromesa("Pseudocódigo: " + pseudocodigo[idx]);
    await hablarPromesa("Explicación: " + explicacionPseudo[idx]);
  }

  // --- WHILE ---
  const whileLineas = [
    "let contW = 0;",
    "let costoProduccion = 0;",
    "while(contW < 1) {",
    "  manoObra = 0.75 * mp;",
    "  gastos = 0.35 * mp;",
    "  costoProduccion = mp + manoObra + gastos;",
    "  precioVenta = costoProduccion * 1.45;",
    "  contW++;",
    "}"
  ];
  const explicacionWhile = [
    "Inicializamos contW en 0.",
    "Mientras contW < 1, calculamos mano de obra y gastos.",
    "Calculamos costo de producción y precio de venta.",
    "Incrementamos contW para terminar el ciclo.",
    "Fin del WHILE."
  ];

  document.getElementById("explicacionWhileFabrica").textContent = whileLineas.join("\n");
  document.getElementById("resultadoWhileFabrica").textContent = `Costo producción: $${costoProd.toFixed(2)} – Precio venta: $${precioVenta.toFixed(2)}`;

  await hablarPromesa("WHILE en JavaScript:");
  for (let idx=0; idx<whileLineas.length; idx++){
    await hablarPromesa("Código: " + whileLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionWhile[idx]);
  }

  // --- FOR ---
  const forLineas = [
    "let costoProdF = 0;",
    "for(let contF=0; contF<1; contF++) {",
    "  manoObra = 0.75 * mp;",
    "  gastos = 0.35 * mp;",
    "  costoProdF = mp + manoObra + gastos;",
    "  precioVenta = costoProdF * 1.45;",
    "}"
  ];
  const explicacionFor = [
    "Inicializamos costoProdF en 0.",
    "Ciclo FOR que se ejecuta una vez.",
    "Calculamos mano de obra y gastos.",
    "Calculamos costo de producción y precio de venta.",
    "Fin del ciclo FOR."
  ];

  document.getElementById("explicacionForFabrica").textContent = forLineas.join("\n");
  document.getElementById("resultadoForFabrica").textContent = `Costo producción: $${costoProd.toFixed(2)} – Precio venta: $${precioVenta.toFixed(2)}`;

  await hablarPromesa("FOR en JavaScript:");
  for (let idx=0; idx<forLineas.length; idx++){
    await hablarPromesa("Código: " + forLineas[idx]);
    await hablarPromesa("Explicación: " + explicacionFor[idx]);
  }

  // --- Tabla de Prueba de Escritorio ---
  const tbody = document.getElementById("cuerpoTablaFabrica");
  tbody.innerHTML = "";
  const fila = tbody.insertRow();
  fila.insertCell().textContent = 1;
  fila.insertCell().textContent = clave;
  fila.insertCell().textContent = mp.toFixed(2);
  fila.insertCell().textContent = manoObra.toFixed(2);
  fila.insertCell().textContent = gastos.toFixed(2);
  fila.insertCell().textContent = costoProd.toFixed(2);
  fila.insertCell().textContent = precioVenta.toFixed(2);

  await hablarPromesa(`Tabla: Clave ${clave}, materia prima ${mp}, mano de obra ${manoObra}, gastos ${gastos}, costo producción ${costoProd}, precio venta ${precioVenta}`);
}
