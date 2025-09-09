function ejercicioC9(){
  const input = document.getElementById("arrEdades").value;
  const lista = input.split(",").map(Number);

  document.getElementById("pseudoC9").textContent=
`INICIO
LEER arreglo de edades
PARA cada edad HACER
  clasificar según rango
  mostrar categoría
FIN PARA
FIN`;

  document.getElementById("whileC9").textContent=
`contador=0
mientras contador < tamaño de lista
  obtener edad
  clasificar según rango
  contador = contador + 1
fin mientras`;

  document.getElementById("forC9").textContent=
`para contador=0 hasta tamaño de lista-1
  obtener edad
  clasificar según rango
fin para`;

  const tbody = document.getElementById("tablaC9");
  tbody.innerHTML="";
  let contador=0;
  while(contador<lista.length){
    const edad = lista[contador];
    let cat="";
    if(edad>=1 && edad<=3) cat="Infante";
    else if(edad>=4 && edad<=13) cat="Niño";
    else if(edad>=14 && edad<=17) cat="Adolescente";
    else if(edad>=18 && edad<=35) cat="Joven";
    else if(edad>=36 && edad<=64) cat="Adulto";
    else if(edad>=65) cat="Adulto mayor";
    else cat="Edad no válida";

    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = edad;
    fila.insertCell().textContent = cat;
    contador++;
  }
}
