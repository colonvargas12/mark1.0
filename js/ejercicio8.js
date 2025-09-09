function textoParaVoz(texto) {
  return texto.replace(/\n/g,". ");
}

function hablarPromesa(texto){
  return new Promise(resolve=>{
    speechSynthesis.cancel();
    const voz=new SpeechSynthesisUtterance(textoParaVoz(texto));
    voz.lang="es-ES"; voz.rate=1.2; voz.pitch=0.5; voz.onend=resolve;
    speechSynthesis.speak(voz);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("btnCalcular").addEventListener("click",calcularPaquete);
});

async function calcularPaquete(){
  const peso=Number(document.getElementById("pesoPaquete").value);
  const destino=document.getElementById("destinoPaquete").value.trim();

  if(isNaN(peso)||peso<=0||peso>5){alert("Peso inválido (≤5 kg)");return;}
  
  const tarifaDestino={
    "Europa":60,
    "Asia":70,
    "América":50,
    "África":80
  };
  const costo=(tarifaDestino[destino]||50)*peso;

  // Pseudocódigo
  const pseudo=[
    "INICIO",
    "LEER peso, destino",
    "VALIDAR peso ≤5",
    "COSTO= tarifaPorDestino* peso",
    "ESCRIBIR costo",
    "FIN"
  ];
  const explPseudo=[
    "Inicio.",
    "Leemos peso y destino.",
    "Validamos que el peso no supere 5 kg.",
    "Calculamos costo según destino.",
    "Mostramos resultado.",
    "Fin."
  ];
  document.getElementById("pseudocodigoPaquete").textContent=pseudo.join("\n");
  document.getElementById("resultadoPaquete").textContent=`Costo envío: $${costo.toFixed(2)}`;

  await hablarPromesa("Ejercicio Paquetería Internacional");
  for(let idx=0;idx<pseudo.length;idx++){
    await hablarPromesa("Pseudocódigo: "+pseudo[idx]);
    await hablarPromesa("Explicación: "+explPseudo[idx]);
  }

  // WHILE
  const whileL=[
    "let contW=0;",
    "while(contW<1){",
    "  calcular costo=tarifaDestino* peso;",
    "  contW++;",
    "}"
  ];
  const explW=[
    "Inicializamos contador.",
    "Mientras contador<1, calculamos costo.",
    "Incrementamos contador.",
    "Fin del WHILE."
  ];
  document.getElementById("explicacionWhilePaquete").textContent=whileL.join("\n");
  document.getElementById("resultadoWhilePaquete").textContent=`Costo envío: $${costo.toFixed(2)}`;

  for(let idx=0;idx<whileL.length;idx++){
    await hablarPromesa("Código WHILE: "+whileL[idx]);
    await hablarPromesa("Explicación: "+explW[idx]);
  }

  // FOR
  const forL=[
    "for(let contF=0;contF<1;contF++){",
    "  calcular costo=tarifaDestino* peso;",
    "}"
  ];
  const explF=[
    "FOR ejecuta una vez.",
    "Calcula costo.",
    "Fin del FOR."
  ];
  document.getElementById("explicacionForPaquete").textContent=forL.join("\n");
  document.getElementById("resultadoForPaquete").textContent=`Costo envío: $${costo.toFixed(2)}`;

  for(let idx=0;idx<forL.length;idx++){
    await hablarPromesa("Código FOR: "+forL[idx]);
    await hablarPromesa("Explicación: "+explF[idx]);
  }

  // Tabla
  const tbody=document.getElementById("cuerpoTablaPaquete");
  tbody.innerHTML="";
  const fila=tbody.insertRow();
  fila.insertCell().textContent=1;
  fila.insertCell().textContent=peso;
  fila.insertCell().textContent=destino;
  fila.insertCell().textContent=costo.toFixed(2);
  await hablarPromesa(`Tabla: peso ${peso}, destino ${destino}, costo ${costo}`);
}
