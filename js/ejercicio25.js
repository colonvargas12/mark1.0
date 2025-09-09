function ejercicioC5(){
  const input = document.getElementById("arrCitas").value;
  const lista = input.split(",").map(x=>Number(x));

  // Pseudocódigo
  document.getElementById("pseudoC5").textContent=
`INICIO
LEER arreglo de citas
inicializar acumulado=0
PARA cada cita HACER
  determinar costo según número de cita
  sumar costo al acumulado
  mostrar costo y acumulado
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC5").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener número de cita
  calcular costo según rango
  actualizar acumulado
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC5").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener número de cita
  calcular costo según rango
  actualizar acumulado
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC5");
  tbody.innerHTML="";
  let acumulado = 0;
  let contador = 0;
  while(contador < lista.length){
    const cita = lista[contador];
    let costo = 0;
    if(cita>=1 && cita<=3) costo=200;
    else if(cita>=4 && cita<=5) costo=150;
    else if(cita>=6 && cita<=8) costo=100;
    else costo=50;
    acumulado += costo;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = cita;
    fila.insertCell().textContent = `$${costo}`;
    fila.insertCell().textContent = `$${acumulado}`;
    contador++;
  }
}

