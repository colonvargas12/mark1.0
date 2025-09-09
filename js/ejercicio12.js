function iniciarExplicacion(){
  const input=document.getElementById("pedidosInput").value;
  const cantidades=input
    .split(",")
    .map(n=>n.trim())
    .filter(n => n!=="")
    .map(n=>Number(n));

  if(cantidades.length === 0 || cantidades.some(isNaN)){
    alert("Ingresa cantidades válidas");
    return;
  }

  // --- Pseudocódigo ---
  const pseudo=[
    "INICIO",
    "LEER listaPedidos",
    "PARA cada pedido EN listaPedidos",
    "  SI pedido >= 1000 ENTONCES",
    "    precio=0.85",
    "  SINO",
    "    precio=0.90",
    "  FIN SI",
    "  total=pedido*precio",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";
  
  // --- WHILE ---
  const whileL=[
    "let contW=0;",
    "while(contW<cantidades.length){",
    "  let cant=cantidades[contW];",
    "  let precio=cant>=1000?0.85:0.90;",
    "  let total=cant*precio;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");
  
  // --- FOR ---
  const forL=[
    "for(let p=0;p<cantidades.length;p++){",
    "  let cant=cantidades[p];",
    "  let precio=cant>=1000?0.85:0.90;",
    "  let total=cant*precio;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  // --- Tabla ---
  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  cantidades.forEach((cant, iter)=>{
    const precio=cant>=1000?0.85:0.90;
    const total=cant*precio;
    const fila=tbody.insertRow();
    fila.insertCell().textContent=iter+1;
    fila.insertCell().textContent=cant;
    fila.insertCell().textContent=precio.toFixed(2);
    fila.insertCell().textContent=total.toFixed(2);
  });
}

// Asociar botón al evento
document.getElementById("btnCalcular").addEventListener("click",iniciarExplicacion);
