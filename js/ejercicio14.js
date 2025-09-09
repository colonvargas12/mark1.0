function iniciarExplicacion(){
  const input=document.getElementById("viajesInput").value;
  const viajes=input.split(";").map(v=>{
    const [tipo,d,p]=v.split(",");
    return {tipo:tipo.trim().toUpperCase(), dist:Number(d), pers:Number(p)};
  });

  if(viajes.some(v=>isNaN(v.dist)||isNaN(v.pers))){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaViajes",
    "PARA cada viaje EN listaViajes",
    "  SI personas<20 ENTONCES personas=20",
    "  SEGUN tipo DE autobús ASIGNA precio por km",
    "  costoTotal=personas*distancia*precio",
    "  costoPorPersona=costoTotal/personas",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<viajes.length){",
    "  let v=viajes[contW];",
    "  if(v.pers<20) v.pers=20;",
    "  let precio=v.tipo=='A'?2:v.tipo=='B'?2.5:3;",
    "  let total=v.pers*v.dist*precio;",
    "  let cPP=total/v.pers;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<viajes.length;f++){",
    "  let v=viajes[f];",
    "  if(v.pers<20) v.pers=20;",
    "  let precio=v.tipo=='A'?2:v.tipo=='B'?2.5:3;",
    "  let total=v.pers*v.dist*precio;",
    "  let cPP=total/v.pers;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  viajes.forEach((v, iter)=>{
    const pers = v.pers<20 ? 20 : v.pers;
    const precio = v.tipo=='A'?2:v.tipo=='B'?2.5:3;
    const total = pers*v.dist*precio;
    const cPP = total/pers;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = v.tipo;
    fila.insertCell().textContent = v.dist;
    fila.insertCell().textContent = v.pers;
    fila.insertCell().textContent = total.toFixed(2);
    fila.insertCell().textContent = cPP.toFixed(2);
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
