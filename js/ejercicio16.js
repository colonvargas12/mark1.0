function iniciarExplicacion(){
  const input=document.getElementById("articulosInput").value;
  const articulos=input.split(";").map(v=>{
    const [clave,mp]=v.split(",");
    return {clave:Number(clave.trim()), mp:Number(mp.trim())};
  });

  if(articulos.some(a=>isNaN(a.clave)||isNaN(a.mp))){
    alert("Datos inválidos");
    return;
  }

  const pseudo=[
    "INICIO",
    "LEER listaArticulos",
    "PARA cada articulo EN listaArticulos",
    "  MANO_OBRA = 0.75 * MP",
    "  GASTOS = 0.35 * MP",
    "  COSTO_PRODUCCION = MP + MANO_OBRA + GASTOS",
    "  PRECIO_VENTA = COSTO_PRODUCCION * 1.45",
    "FIN"
  ];
  document.getElementById("pseudocodigo").textContent=pseudo.join("\n");
  document.getElementById("resultadoPseudo").textContent="Resultados abajo";

  const whileL=[
    "let contW=0;",
    "while(contW<articulos.length){",
    "  let a=articulos[contW];",
    "  let mo=a.mp*0.75;",
    "  let gf=a.mp*0.35;",
    "  let costo=a.mp+mo+gf;",
    "  let venta=costo*1.45;",
    "  contW++;",
    "}"
  ];
  document.getElementById("explicacionWhile").textContent=whileL.join("\n");

  const forL=[
    "for(let f=0;f<articulos.length;f++){",
    "  let a=articulos[f];",
    "  let mo=a.mp*0.75;",
    "  let gf=a.mp*0.35;",
    "  let costo=a.mp+mo+gf;",
    "  let venta=costo*1.45;",
    "}"
  ];
  document.getElementById("explicacionFor").textContent=forL.join("\n");

  const tbody=document.getElementById("cuerpoTabla");
  tbody.innerHTML="";
  articulos.forEach((a, iter)=>{
    const mo = a.mp*0.75;
    const gf = a.mp*0.35;
    const costo = a.mp + mo + gf;
    const venta = costo*1.45;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = iter+1;
    fila.insertCell().textContent = a.clave;
    fila.insertCell().textContent = a.mp;
    fila.insertCell().textContent = mo.toFixed(2);
    fila.insertCell().textContent = gf.toFixed(2);
    fila.insertCell().textContent = costo.toFixed(2);
    fila.insertCell().textContent = venta.toFixed(2);
  });
}

document.getElementById("btnCalcular").addEventListener("click", iniciarExplicacion);
