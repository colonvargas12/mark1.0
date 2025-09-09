function iniciarExplicacion(){
  const input=document.getElementById("preciosInput").value;
  const precios=input
    .split(",")
    .map(n => n.trim())
    .filter(n => n !== "")
    .map(n => Number(n));

  if(precios.length === 0 || precios.some(isNaN)){
    alert("Ingresa precios válidos");
    return;
  }

  // --- Pseudocódigo ---
  const pseudo=[
    "INICIO",
    "LEER listaPrecios",
    "PARA cada precio EN listaPrecios",
    "  SI precio > 2500 ENTONCES",
    "    descuento = 15%",
    "  SINO",
    "    descuento = 8%",
    "  FIN SI",
    "  precioFinal = precio - precio*descuento/100",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  // --- WHILE ---
  const whileL=[
    "let contW=0;",
    "while(contW<precios.length){",
    "  let p=precios[contW];",
    "  let desc=p>2500?15:8;",
    "  let final=p - p*desc/100;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  // --- FOR ---
  const forL=[
    "for(let idxF=0;idxF<precios.length;idxF++){",
    "  let p=precios[idxF];",
    "  let desc=p>2500?15:8;",
    "  let final=p - p*desc/100;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  // --- Tabla ---
  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  precios.forEach((p, iter)=>{
    const desc = p>2500?15:8;
    const final = p - p*desc/100;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = p;
    fila.insertCell().textContent = desc+"%";
    fila.insertCell().textContent = final.toFixed(2);
  });
}

// Asociar botón al evento
document.getElementById("btnCalcular").addEventListener("click",iniciarExplicacion);
