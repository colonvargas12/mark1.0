function ejercicioC2(){
  const input = document.getElementById("arrLapices").value;
  const lista = input.split(",").map(Number);

  const precioUnitario = 1;

  // Pseudocódigo
  document.getElementById("pseudoC2").textContent=
`INICIO
LEER arreglo de cantidades
PARA cada cantidad HACER
  SI cantidad > 1000 ENTONCES
    aplicar 15% de descuento
  SINO
    aplicar 10% de descuento
  FIN SI
  mostrar costo total
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC2").textContent=
`contador=0
mientras contador < tamaño de lista
  verificar cantidad y aplicar descuento
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC2").textContent=
`para contador=0 hasta tamaño de lista-1
  verificar cantidad y aplicar descuento
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC2");
  tbody.innerHTML = "";
  let contador = 0;
  while(contador < lista.length){
    const cantidad = lista[contador];
    const costo = cantidad>1000 ? cantidad*precioUnitario*0.85 : cantidad*precioUnitario*0.9;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = cantidad;
    fila.insertCell().textContent = `$${costo.toFixed(2)}`;
    contador++;
  }
}
