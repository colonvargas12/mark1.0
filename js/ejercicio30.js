function ejercicioC10(){
  const input = document.getElementById("arrDias").value;
  const lista = input.split(",").map(Number);

  const diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

  document.getElementById("pseudoC10").textContent=
`INICIO
LEER arreglo de números
PARA cada número HACER
  mostrar día de la semana correspondiente
FIN PARA
FIN`;

  document.getElementById("whileC10").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener número
  mostrar día correspondiente
  contador = contador + 1
fin mientras`;

  document.getElementById("forC10").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener número
  mostrar día correspondiente
fin para`;

  const tbody = document.getElementById("tablaC10");
  tbody.innerHTML="";
  let contador=0;
  while(contador<lista.length){
    const num = lista[contador];
    const dia = (num>=1 && num<=7) ? diasSemana[num-1] : "Error";
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = num;
    fila.insertCell().textContent = dia;
    contador++;
  }
}
