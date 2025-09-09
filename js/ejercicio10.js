function textoParaVoz(texto){return texto.replace(/\n/g,". ");}

function hablarPromesa(texto){
  return new Promise(resolve=>{
    speechSynthesis.cancel();
    const voz=new SpeechSynthesisUtterance(textoParaVoz(texto));
    voz.lang="es-ES";voz.rate=1.2;voz.pitch=0.5;voz.onend=resolve;
    speechSynthesis.speak(voz);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("btnCalcular").addEventListener("click",mostrarDia);
});

async function mostrarDia(){
  const num=Number(document.getElementById("numeroDia").value);
  if(isNaN(num)||num<1||num>7){alert("Número inválido (1-7)");return;}

  const dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
  const dia=dias[num-1];

  // Pseudocódigo
  const pseudo=[
    "INICIO",
    "LEER número",
    "VALIDAR número entre 1 y 7",
    "DÍA=dias[num-1]",
    "ESCRIBIR DÍA",
    "FIN"
  ];
  const explPseudo=[
    "Inicio",
    "Leemos número",
    "Validamos rango",
    "Obtenemos día de la semana",
    "Mostramos día",
    "Fin"
  ];
  document.getElementById("pseudocodigoDia").textContent=pseudo.join("\n");
  document.getElementById("resultadoDia").textContent=`Día: ${dia}`;

  await hablarPromesa("Ejercicio: Número equivalente a día de la semana");
  for(let idx=0;idx<pseudo.length;idx++){
    await hablarPromesa("Pseudocódigo: "+pseudo[idx]);
    await hablarPromesa("Explicación: "+explPseudo[idx]);
  }

  // WHILE
  const whileL=[
    "let contW=0;",
    "while(contW<1){",
    "  DÍA=dias[num-1];",
    "  contW++;",
    "}"
  ];
  const explW=[
    "Inicializamos contador",
    "WHILE ejecuta una vez",
    "Obtenemos día",
    "Incrementamos contador"
  ];
  document.getElementById("explicacionWhileDia").textContent=whileL.join("\n");
  document.getElementById("resultadoWhileDia").textContent=`Día: ${dia}`;
  for(let idx=0;idx<whileL.length;idx++){
    await hablarPromesa("Código WHILE: "+whileL[idx]);
    await hablarPromesa("Explicación: "+explW[idx]);
  }

  // FOR
  const forL=[
    "for(let contF=0;contF<1;contF++){",
    "  DÍA=dias[num-1];",
    "}"
  ];
  const explF=[
    "FOR ejecuta una vez",
    "Obtenemos día",
    "Fin FOR"
  ];
  document.getElementById("explicacionForDia").textContent=forL.join("\n");
  document.getElementById("resultadoForDia").textContent=`Día: ${dia}`;
  for(let idx=0;idx<forL.length;idx++){
    await hablarPromesa("Código FOR: "+forL[idx]);
    await hablarPromesa("Explicación: "+explF[idx]);
  }

  // Tabla
  const tbody=document.getElementById("cuerpoTablaDia");
  tbody.innerHTML="";
  const fila=tbody.insertRow();
  fila.insertCell().textContent=1;
  fila.insertCell().textContent=num;
  fila.insertCell().textContent=dia;
  await hablarPromesa(`Tabla: Número ${num}, día ${dia}`);
}
