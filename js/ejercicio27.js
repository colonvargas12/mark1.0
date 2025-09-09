function ejercicioC7(){
  const input = document.getElementById("arrClientes").value;
  const lista = input.split(";").map(x=>{
    const [tipo, credito] = x.split(",").map(Number);
    return {tipo, credito};
  });

  document.getElementById("pseudoC7").textContent=
`INICIO
LEER arreglo de clientes (tipo tarjeta, crédito actual)
PARA cada cliente HACER
  calcular nuevo crédito según tipo
  mostrar nuevo crédito
FIN PARA
FIN`;

  document.getElementById("whileC7").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener tipo y crédito actual
  calcular nuevo crédito
  contador = contador + 1
fin mientras`;

  document.getElementById("forC7").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener tipo y crédito actual
  calcular nuevo crédito
fin para`;

  const tbody = document.getElementById("tablaC7");
  tbody.innerHTML="";
  let contador = 0;
  while(contador < lista.length){
    const cli = lista[contador];
    let porcentaje = 0;
    switch(cli.tipo){
      case 1: porcentaje=0.25; break;
      case 2: porcentaje=0.35; break;
      case 3: porcentaje=0.40; break;
      default: porcentaje=0.50; break;
    }
    const nuevo = cli.credito*(1+porcentaje);
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = cli.tipo;
    fila.insertCell().textContent = `$${cli.credito.toFixed(2)}`;
    fila.insertCell().textContent = `$${nuevo.toFixed(2)}`;
    contador++;
  }
}

