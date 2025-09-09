function iniciarExplicacion(){
  const input=document.getElementById("edadesInput").value;
  const edades=input.split(",").map(e=>Number(e.trim()));

  if(edades.some(e=>isNaN(e))){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaEdades",
    "PARA cada edad EN listaEdades",
    "  ASIGNAR clasificación segun rango",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<edades.length){",
    "  let e=edades[contW];",
    "  let cat= e<=3?'Infante': e<=13?'Niño': e<=17?'Adolescente': e<=35?'Joven': e<=64?'Adulto':'Adulto mayor';",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<edades.length;f++){",
    "  let e=edades[f];",
    "  let cat= e<=3?'Infante': e<=13?'Niño': e<=17?'Adolescente': e<=35?'Joven': e<=64?'Adulto':'Adulto mayor';",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  edades.forEach((e, iter)=>{
    const cat= e<=3?'Infante': e<=13?'Niño': e<=17?'Adolescente': e<=35?'Joven': e<=64?'Adulto':'Adulto mayor';
    const fila=tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = e;
    fila.insertCell().textContent = cat;
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
