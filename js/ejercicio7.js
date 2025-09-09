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
  return new Promise(resolve=>{
    speechSynthesis.cancel();
    const voz=new SpeechSynthesisUtterance(textoParaVoz(texto));
    voz.lang="es-ES"; voz.rate=1.2; voz.pitch=0.5; voz.onend=resolve;
    speechSynthesis.speak(voz);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("btnCalcular").addEventListener("click", calcularBanco);
});

async function calcularBanco(){
  const credito = Number(document.getElementById("credito").value);
  const tipo = document.getElementById("tipoTarjeta").value.trim();

  if(isNaN(credito) || credito<=0){
    alert("Ingrese un crédito válido"); return;
  }

  let porcentaje = 0;
  if(tipo=="1") porcentaje=25;
  else if(tipo=="2") porcentaje=35;
  else if(tipo=="3") porcentaje=40;
  else porcentaje=50;

  const nuevoCredito = credito*(1+porcentaje/100);

  // Pseudocódigo
  const pseudo=[
    "INICIO",
    "LEER credito, tipoTarjeta",
    "SI tipoTarjeta=1 ENTONCES porcentaje=25",
    "SINO SI tipoTarjeta=2 ENTONCES porcentaje=35",
    "SINO SI tipoTarjeta=3 ENTONCES porcentaje=40",
    "SINO porcentaje=50",
    "nuevoCredito = credito * (1 + porcentaje/100)",
    "ESCRIBIR nuevoCredito",
    "FIN"
  ];
  const explPseudo=[
    "Inicio.",
    "Leemos crédito y tipo de tarjeta.",
    "Si tipo 1, porcentaje 25.",
    "Si tipo 2, porcentaje 35.",
    "Si tipo 3, porcentaje 40.",
    "Si otro tipo, porcentaje 50.",
    "Calculamos nuevo crédito.",
    "Mostramos resultado.",
    "Fin."
  ];

  document.getElementById("pseudocodigoBanco").textContent = pseudo.join("\n");
  document.getElementById("resultadoBanco").textContent = `Nuevo crédito: $${nuevoCredito.toFixed(2)}`;

  await hablarPromesa("Ejercicio Banco XYZ");
  for(let idx=0; idx<pseudo.length; idx++){
    await hablarPromesa("Pseudocódigo: "+pseudo[idx]);
    await hablarPromesa("Explicación: "+explPseudo[idx]);
  }

  // WHILE
  const whileL=[
    "let contW=0;",
    "while(contW<1){",
    "  calcular nuevoCredito=credito*(1+porcentaje/100);",
    "  contW++;",
    "}"
  ];
  const explW=[
    "Inicializamos contador.",
    "Mientras contador<1, calculamos nuevo crédito.",
    "Incrementamos contador.",
    "Fin del ciclo WHILE."
  ];
  document.getElementById("explicacionWhileBanco").textContent = whileL.join("\n");
  document.getElementById("resultadoWhileBanco").textContent = `Nuevo crédito: $${nuevoCredito.toFixed(2)}`;

  await hablarPromesa("WHILE en JS");
  for(let idx=0; idx<whileL.length; idx++){
    await hablarPromesa("Código: "+whileL[idx]);
    await hablarPromesa("Explicación: "+explW[idx]);
  }

  // FOR
  const forL=[
    "for(let contF=0; contF<1; contF++){",
    "  calcular nuevoCredito=credito*(1+porcentaje/100);",
    "}"
  ];
  const explF=[
    "Ciclo FOR que se ejecuta una vez.",
    "Calcula nuevo crédito.",
    "Fin del FOR."
  ];
  document.getElementById("explicacionForBanco").textContent = forL.join("\n");
  document.getElementById("resultadoForBanco").textContent = `Nuevo crédito: $${nuevoCredito.toFixed(2)}`;

  await hablarPromesa("FOR en JS");
  for(let idx=0; idx<forL.length; idx++){
    await hablarPromesa("Código: "+forL[idx]);
    await hablarPromesa("Explicación: "+explF[idx]);
  }

  // Tabla
  const tbody=document.getElementById("cuerpoTablaBanco");
  tbody.innerHTML="";
  const fila=tbody.insertRow();
  fila.insertCell().textContent=1;
  fila.insertCell().textContent=credito.toFixed(2);
  fila.insertCell().textContent=tipo;
  fila.insertCell().textContent=porcentaje+"%";
  fila.insertCell().textContent=nuevoCredito.toFixed(2);
  await hablarPromesa(`Tabla: crédito ${credito}, tipo ${tipo}, porcentaje ${porcentaje}, nuevo crédito ${nuevoCredito}`);
}
