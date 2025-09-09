function iniciarExplicacion(){
  const input=document.getElementById("numerosInput").value;
  const numeros=input.split(",").map(n=>Number(n.trim()));
  if(numeros.some(n=>isNaN(n)||n<1||n>7)){
    alert("Ingrese números del 1 al 7");
    return;
  }

  const dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

  const pseudo=[
    "INICIO",
    "LEER listaNumeros",
    "PARA cada numero EN listaNumeros",
    "  ASIGNAR dia segun numero",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<numeros.length){",
    "  let num=numeros[contW];",
    "  let dia= dias[num-1];",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<numeros.length;f++){",
    "  let num=numeros[f];",
    "  let dia= dias[num-1];",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  numeros.forEach((num, iter)=>{
    const dia=dias[num-1];
    const fila=tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = num;
    fila.insertCell().textContent = dia;
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
