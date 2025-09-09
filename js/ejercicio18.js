function iniciarExplicacion(){
  const input=document.getElementById("paquetesInput").value;
  const paquetes=input.split(";").map(v=>{
    const [peso,zona]=v.split(",");
    return {peso:Number(peso.trim()), zona:zona.trim()};
  });

  if(paquetes.some(p=>isNaN(p.peso)||p.zona==="")){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaPaquetes",
    "PARA cada paquete EN listaPaquetes",
    "  VALIDAR peso<=5",
    "  ASIGNAR tarifa segun zona",
    "  CALCULAR costo=tarifa*peso",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<paquetes.length){",
    "  let p=paquetes[contW];",
    "  if(p.peso>5){ alert('Excede peso'); continue; }",
    "  let tarifa = p.zona=='Europa'?60: p.zona=='Asia'?80:50;",
    "  let costo=p.peso*tarifa;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<paquetes.length;f++){",
    "  let p=paquetes[f];",
    "  if(p.peso>5){ alert('Excede peso'); continue; }",
    "  let tarifa = p.zona=='Europa'?60: p.zona=='Asia'?80:50;",
    "  let costo=p.peso*tarifa;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  paquetes.forEach((p, iter)=>{
    if(p.peso>5) return;
    const tarifa = p.zona=='Europa'?60: p.zona=='Asia'?80:50;
    const costo = p.peso*tarifa;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = p.peso;
    fila.insertCell().textContent = p.zona;
    fila.insertCell().textContent = costo.toFixed(2);
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
