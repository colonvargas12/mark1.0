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
  document.getElementById("btnCalcular").addEventListener("click",clasificarEdad);
});

async function clasificarEdad(){
  const edad=Number(document.getElementById("edad").value);
  if(isNaN(edad)||edad<0){alert("Edad inválida"); return;}

  let clasificacion="";
  if(edad<=3) clasificacion="Infante";
  else if(edad<=13) clasificacion="Niño";
  else if(edad<=17) clasificacion="Adolescente";
  else if(edad<=35) clasificacion="Joven";
  else if(edad<=64) clasificacion="Adulto";
  else clasificacion="Adulto mayor";

  // Pseudocódigo
  const pseudo=[
    "INICIO",
    "LEER edad",
    "SI edad<=3 ENTONCES Clasificación=Infante",
    "SINO SI edad<=13 ENTONCES Clasificación=Niño",
    "SINO SI edad<=17 ENTONCES Clasificación=Adolescente",
    "SINO SI edad<=35 ENTONCES Clasificación=Joven",
    "SINO SI edad<=64 ENTONCES Clasificación=Adulto",
    "SINO Clasificación=Adulto mayor",
    "ESCRIBIR Clasificación",
    "FIN"
  ];
  const explPseudo=[
    "Inicio",
    "Leemos la edad",
    "Comprobamos si edad≤3",
    "Si edad≤13",
    "Si edad≤17",
    "Si edad≤35",
    "Si edad≤64",
    "Sino Adulto mayor",
    "Mostramos clasificación",
    "Fin"
  ];
  document.getElementById("pseudocodigoEdad").textContent=pseudo.join("\n");
  document.getElementById("resultadoEdad").textContent=`Clasificación: ${clasificacion}`;

  await hablarPromesa("Ejercicio: Clasificación de edades");
  for(let idx=0;idx<pseudo.length;idx++){
    await hablarPromesa("Pseudocódigo: "+pseudo[idx]);
    await hablarPromesa("Explicación: "+explPseudo[idx]);
  }

  // WHILE
  const whileL=[
    "let contW=0;",
    "while(contW<1){",
    "  clasificacion según edad",
    "  contW++;",
    "}"
  ];
  const explW=[
    "Inicializamos contador",
    "Ejecutamos WHILE",
    "Clasificamos edad",
    "Incrementamos contador"
  ];
  document.getElementById("explicacionWhileEdad").textContent=whileL.join("\n");
  document.getElementById("resultadoWhileEdad").textContent=`Clasificación: ${clasificacion}`;
  for(let idx=0;idx<whileL.length;idx++){
    await hablarPromesa("Código WHILE: "+whileL[idx]);
    await hablarPromesa("Explicación: "+explW[idx]);
  }

  // FOR
  const forL=[
    "for(let contF=0;contF<1;contF++){",
    "  clasificacion según edad",
    "}"
  ];
  const explF=[
    "FOR ejecuta una vez",
    "Clasificamos edad",
    "Fin FOR"
  ];
  document.getElementById("explicacionForEdad").textContent=forL.join("\n");
  document.getElementById("resultadoForEdad").textContent=`Clasificación: ${clasificacion}`;
  for(let idx=0;idx<forL.length;idx++){
    await hablarPromesa("Código FOR: "+forL[idx]);
    await hablarPromesa("Explicación: "+explF[idx]);
  }

  // Tabla
  const tbody=document.getElementById("cuerpoTablaEdad");
  tbody.innerHTML="";
  const fila=tbody.insertRow();
  fila.insertCell().textContent=1;
  fila.insertCell().textContent=edad;
  fila.insertCell().textContent=clasificacion;
  await hablarPromesa(`Tabla: Edad ${edad}, clasificación ${clasificacion}`);
}

