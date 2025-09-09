function iniciarExplicacion(){
  const input=document.getElementById("citasInput").value;
  const citas=input.split(",").map(n=>Number(n.trim()));

  if(citas.length===0 || citas.some(isNaN)){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaCitas",
    "ACUMULADO=0",
    "PARA cada cita EN listaCitas",
    "  SEGUN numeroDeCita ASIGNA costo",
    "  ACUMULADO += costo",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "let acumulado=0;",
    "while(contW<citas.length){",
    "  let c=citas[contW];",
    "  let costo= c<=3?200: c<=5?150: c<=8?100:50;",
    "  acumulado+=costo;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "let acumulado=0;",
    "for(let f=0;f<citas.length;f++){",
    "  let c=citas[f];",
    "  let costo= c<=3?200: c<=5?150: c<=8?100:50;",
    "  acumulado+=costo;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  let acumulado=0;
  citas.forEach((c, iter)=>{
    const costo = c<=3?200: c<=5?150: c<=8?100:50;
    acumulado += costo;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = c;
    fila.insertCell().textContent = costo;
    fila.insertCell().textContent = acumulado;
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
