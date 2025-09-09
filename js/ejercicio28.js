function ejercicioC8(){
  const input = document.getElementById("arrPaquetes").value;
  const lista = input.split(";").map(x=>{
    const [peso, zona] = x.split(",");
    return {peso:Number(peso), zona};
  });

  document.getElementById("pseudoC8").textContent=
`INICIO
LEER arreglo de paquetes (peso, zona)
PARA cada paquete HACER
  validar peso <=5
  calcular costo según zona
  mostrar costo o error
FIN PARA
FIN`;

  document.getElementById("whileC8").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener peso y zona
  validar peso y calcular costo
  contador = contador + 1
fin mientras`;

  document.getElementById("forC8").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener peso y zona
  validar peso y calcular costo
fin para`;

  const tbody = document.getElementById("tablaC8");
  tbody.innerHTML="";
  let contador=0;
  while(contador<lista.length){
    const pkg = lista[contador];
    let costo = 0;
    if(pkg.peso>5){
      costo = "Error, excede 5 kg";
    }else{
      switch(pkg.zona.toLowerCase()){
        case "europa": costo=60*pkg.peso; break;
        case "asia": costo=80*pkg.peso; break;
        case "america": costo=50*pkg.peso; break;
        default: costo="Zona no válida"; break;
      }
    }
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = pkg.peso;
    fila.insertCell().textContent = pkg.zona;
    fila.insertCell().textContent = typeof costo==="number"?`$${costo.toFixed(2)}`:costo;
    contador++;
  }
}
