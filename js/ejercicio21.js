function ejercicioC1(){
  const input = document.getElementById("arrNumeros").value;
  const lista = input.split(",").map(Number);

  // Pseudocódigo
  document.getElementById("pseudoC1").textContent=
`INICIO
LEER arreglo de números
PARA cada número HACER
  SI número > 0 ENTONCES
    mostrar "positivo"
  SINO SI número < 0 ENTONCES
    mostrar "negativo"
  SINO
    mostrar "neutro"
FIN PARA
FIN`;

  // WHILE
  document.getElementById("whileC1").textContent=
`contador=0
mientras contador < tamaño de lista
  verificar si número es positivo, negativo o neutro
  contador = contador + 1
fin mientras`;

  // FOR
  document.getElementById("forC1").textContent=
`para contador=0 hasta tamaño de lista-1
  verificar si número es positivo, negativo o neutro
fin para`;

  // Tabla
  const tbody = document.getElementById("tablaC1");
  tbody.innerHTML = "";
  let contador = 0;
  while(contador < lista.length){
    const valor = lista[contador];
    const clasificacion = valor>0?"positivo":valor<0?"negativo":"neutro";
    const fila = tbody.insertRow();
    fila.insertCell().textContent = contador+1;
    fila.insertCell().textContent = valor;
    fila.insertCell().textContent = clasificacion;
    contador++;
  }
}
