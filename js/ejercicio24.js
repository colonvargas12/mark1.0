function ejercicioC4(){
  const input = document.getElementById("arrViajes").value;
  const lista = input.split(";").map(x=>{
    const [tipo, km, personas] = x.split(",");
    return {tipo: tipo.trim().toUpperCase(), km: Number(km), personas: Number(personas)};
  });

  // Pseudocódigo
  document.getElementById("pseudoC4").textContent=
`INICIO
LEER arreglo de viajes (tipo, km, personas)
PARA cada viaje HACER
  si personas < 20 entonces personas = 20
  determinar tarifa por tipo
  calcular costo total y costo por persona
  mostrar resultados
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC4").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener viaje
  verificar personas mínimas
  calcular costos
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC4").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener viaje
  verificar personas mínimas
  calcular costos
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC4");
  tbody.innerHTML = "";
  let contador = 0;
  while(contador < lista.length){
    const viaje = lista[contador];
    const personas = viaje.personas < 20 ? 20 : viaje.personas;
    let tarifa = 0;
    if(viaje.tipo==="A") tarifa=2.0;
    else if(viaje.tipo==="B") tarifa=2.5;
    else if(viaje.tipo==="C") tarifa=3.0;
    const costoTotal = tarifa*viaje.km*personas;
    const costoPersona = costoTotal/personas;
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = viaje.tipo;
    fila.insertCell().textContent = viaje.km;
    fila.insertCell().textContent = viaje.personas;
    fila.insertCell().textContent = `$${costoTotal.toFixed(2)}`;
    fila.insertCell().textContent = `$${costoPersona.toFixed(2)}`;
    contador++;
  }
}
