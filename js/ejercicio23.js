function ejercicioC3(){
  const input = document.getElementById("arrTrajes").value;
  const lista = input.split(",").map(Number);

  // Pseudocódigo
  document.getElementById("pseudoC3").textContent=
`INICIO
LEER arreglo de precios
PARA cada precio HACER
  SI precio > 2500 ENTONCES
    aplicar 15% de descuento
  SINO
    aplicar 8% de descuento
  FIN SI
  mostrar precio final
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC3").textContent=
`contador=0
mientras contador < tamaño de lista
  verificar precio y aplicar descuento
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC3").textContent=
`para contador=0 hasta tamaño de lista-1
  verificar precio y aplicar descuento
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC3");
  tbody.innerHTML = "";
  let contador = 0;
  while(contador < lista.length){
    const precio = lista[contador];
    const descuento = precio>2500 ? 0.15 : 0.08;
    const precioFinal = precio*(1-descuento);
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = `$${precio.toFixed(2)}`;
    fila.insertCell().textContent = `${(descuento*100).toFixed(0)}%`;
    fila.insertCell().textContent = `$${precioFinal.toFixed(2)}`;
    contador++;
  }
}

