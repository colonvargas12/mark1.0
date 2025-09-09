function ejercicioC6(){
  const input = document.getElementById("arrArticulos").value;
  const lista = input.split(";").map(x=>{
    const [clave, mp] = x.split(",").map(Number);
    return {clave, mp};
  });

  // Pseudocódigo
  document.getElementById("pseudoC6").textContent=
`INICIO
LEER arreglo de artículos (clave, materia prima)
PARA cada artículo HACER
  calcular mano de obra = 75% de MP
  calcular gastos fabricación = 35% de MP
  calcular costo producción = MP + MO + GF
  calcular precio venta según clave
  mostrar costo producción y precio venta
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC6").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener clave y materia prima
  calcular MO y GF
  calcular costo producción
  calcular precio venta
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC6").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener clave y materia prima
  calcular MO y GF
  calcular costo producción
  calcular precio venta
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC6");
  tbody.innerHTML="";
  let contador = 0;
  while(contador < lista.length){
    const art = lista[contador];
    const MO = art.mp * 0.75;
    const GF = art.mp * 0.35;
    const costoProd = art.mp + MO + GF;
    let precioVenta = 0;
    switch(art.clave){
      case 1: precioVenta = costoProd * 1.3; break;
      case 2: precioVenta = costoProd * 1.25; break;
      case 3: precioVenta = costoProd * 1.45; break;
      case 4: precioVenta = costoProd * 1.5; break;
      case 5: precioVenta = costoProd * 1.2; break;
      case 6: precioVenta = costoProd * 1.6; break;
      default: precioVenta = costoProd * 1.3; break;
    }
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = art.clave;
    fila.insertCell().textContent = art.mp;
    fila.insertCell().textContent = `$${costoProd.toFixed(2)}`;
    fila.insertCell().textContent = `$${precioVenta.toFixed(2)}`;
    contador++;
  }
}
