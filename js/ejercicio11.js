function iniciarExplicacion() {
  const input = document.getElementById("numerosInput").value;

  // Separar por coma, quitar espacios y convertir a números
  const numeros = input
    .split(",")
    .map(n => n.trim())
    .filter(n => n !== "")
    .map(n => Number(n));

  if (numeros.length === 0 || numeros.some(isNaN)) {
    alert("Ingresa números válidos separados por coma");
    return;
  }

  // --- Pseudocódigo ---
  const pseudo = [
    "INICIO",
    "LEER listaNumeros",
    "contador = 0",
    "MIENTRAS contador < longitud(listaNumeros)",
    "  valorActual = listaNumeros[contador]",
    "  SI valorActual > 0 ENTONCES",
    "    ES positivo",
    "  SINO SI valorActual < 0 ENTONCES",
    "    ES negativo",
    "  SINO",
    "    ES neutro",
    "  contador++",
    "FIN MIENTRAS",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent = pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent = "Resultado mostrado abajo";

  // --- WHILE ---
  const whileL = [
    "let contW=0;",
    "while(contW<numeros.length){",
    "  let val=numeros[contW];",
    "  if(val>0) console.log('positivo');",
    "  else if(val<0) console.log('negativo');",
    "  else console.log('neutro');",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent = whileL.join("\n");
  document.getElementById("resultadoWhile").textContent = "Resultados abajo";

  // --- FOR ---
  const forL = [
    "for(let contF=0;contF<numeros.length;contF++){",
    "  let val=numeros[contF];",
    "  if(val>0) console.log('positivo');",
    "  else if(val<0) console.log('negativo');",
    "  else console.log('neutro');",
    "}"
  ];
  document.getElementById("explicacionFor").textContent = forL.join("\n");
  document.getElementById("resultadoFor").textContent = "Resultados abajo";

  // --- Tabla ---
  const tbody = document.getElementById("cuerpoTabla");
  tbody.innerHTML = "";

  numeros.forEach((val, iter) => {
    const res = val > 0 ? "positivo" : val < 0 ? "negativo" : "neutro";
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter + 1;
    fila.insertCell().textContent = val;
    fila.insertCell().textContent = res;
  });
}

// Asociar botón al evento
document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
