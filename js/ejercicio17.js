function iniciarExplicacion(){
  const input=document.getElementById("clientesInput").value;
  const clientes=input.split(";").map(v=>{
    const [credito,tipo]=v.split(",");
    return {credito:Number(credito.trim()), tipo:tipo.trim()};
  });

  if(clientes.some(c=>isNaN(c.credito)||c.tipo==="")){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaClientes",
    "PARA cada cliente EN listaClientes",
    "  SEGUN tipo ASIGNA porcentajeAumento",
    "  NUEVO_CREDITO = credito + (credito*porcentajeAumento)",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<clientes.length){",
    "  let c=clientes[contW];",
    "  let pct= c.tipo=='1'?0.25: c.tipo=='2'?0.35: c.tipo=='3'?0.40:0.50;",
    "  let nuevo=c.credito*(1+pct);",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<clientes.length;f++){",
    "  let c=clientes[f];",
    "  let pct= c.tipo=='1'?0.25: c.tipo=='2'?0.35: c.tipo=='3'?0.40:0.50;",
    "  let nuevo=c.credito*(1+pct);",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  clientes.forEach((c, iter)=>{
    const pct = c.tipo=='1'?0.25: c.tipo=='2'?0.35: c.tipo=='3'?0.40:0.50;
    const nuevo = c.credito*(1+pct);
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = c.credito.toFixed(2);
    fila.insertCell().textContent = c.tipo;
    fila.insertCell().textContent = nuevo.toFixed(2);
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
