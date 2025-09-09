document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('calcular');
  if (!btn) return;
  btn.addEventListener('click', iniciarExplicacion);
});

function textoParaVoz(texto) {
  return texto
    .replace(/>=/g, " mayor o igual que ")
    .replace(/</g, " menor que ")
    .replace(/==/g, " igual a ")
    .replace(/\+/g, " más ")
    .replace(/-/g, " menos ")
    .replace(/\*/g, " por ")
    .replace(/\//g, " entre ")
    .replace(/=/g, " es igual a ")
    .replace(/\n/g, ". ");
}

function hablarPromesa(texto) {
  return new Promise(resolve => {
    speechSynthesis.cancel();
    const voz = new SpeechSynthesisUtterance(textoParaVoz(texto));
    voz.lang = 'es-ES';
    voz.rate = 1.3;  
    voz.pitch = -10;    
    voz.onend = resolve;
    voz.onerror = resolve;
    speechSynthesis.speak(voz);
  });
}

async function iniciarExplicacion() {
  const btn = document.getElementById('calcular');
  btn.disabled = true;
  speechSynthesis.cancel();

  const cantidadEl = document.getElementById('cantidad');
  const resultadoEl = document.getElementById('resultado');
  const seccionPseudocodigo = document.getElementById('seccionPseudocodigo');
  const pseudocodigoEl = document.getElementById('pseudocodigo');
  const resultadoPseudocodigo = document.getElementById('resultadoPseudocodigo');
  const seccionWhile = document.getElementById('seccionWhile');
  const explicacionWhile = document.getElementById('explicacionWhile');
  const resultadoWhile = document.getElementById('resultadoWhile');
  const seccionFor = document.getElementById('seccionFor');
  const explicacionFor = document.getElementById('explicacionFor');
  const resultadoFor = document.getElementById('resultadoFor');
  const cuerpoTabla = document.getElementById('cuerpoTabla');

  let cantidad = Number(cantidadEl.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Por favor ingresa una cantidad válida mayor que 0.');
    btn.disabled = false;
    return;
  }

  // cálculo del precio
  let precio = cantidad >= 1000 ? 0.85 : 0.90;
  let total = cantidad * precio;
  resultadoEl.textContent = `Total a pagar: $${total.toFixed(2)}`;

  // --- PSEUDOCÓDIGO ---
  const pseudocodigo = `INICIO
  LEER cantidad
  SI cantidad >= 1000 ENTONCES
    precio ← 0.85
  SINO
    precio ← 0.90
  FIN SI
  total ← cantidad * precio
  ESCRIBIR "Total a pagar: " total
FIN`;
  seccionPseudocodigo.style.display = 'block';
  pseudocodigoEl.textContent = pseudocodigo;
  resultadoPseudocodigo.textContent = `Resultado: $${total.toFixed(2)}`;

  await hablarPromesa('Ejercicio: Leer cuántos lápices compra un cliente y calcular el costo.');
  await hablarPromesa('Pseudocódigo. Primero se lee la cantidad de lápices.');
  await hablarPromesa('Si la cantidad es mayor o igual a mil, el precio será cero punto ochenta y cinco. En caso contrario, será cero punto noventa.');
  await hablarPromesa('Después, se multiplica la cantidad por el precio para calcular el total. Finalmente se muestra el resultado.');

  // --- WHILE COMPLETO EN JAVASCRIPT ---
  seccionWhile.style.display = 'block';
  let textoWhile = `
<pre><code class="language-js">let contador = 1;
let totalParcial = 0;

while (contador <= cantidad) {
  totalParcial = totalParcial + precio;
  contador = contador + 1;
}

console.log("Total a pagar (while): $" + totalParcial.toFixed(2));</code></pre>`;
  explicacionWhile.innerHTML = textoWhile; // ahora muestra con formato <pre><code>

  // Ejecutar el while
  let contadorW = 1;
  let totalParcialW = 0;
  while (contadorW <= cantidad) {
    totalParcialW += precio;
    contadorW++;
  }
  resultadoWhile.textContent = `Total: $${totalParcialW.toFixed(2)}`;

  await hablarPromesa('WHILE en JavaScript: paso a paso.');
  await hablarPromesa('Se inicializa el contador en uno y total parcial en cero.');
  await hablarPromesa('Mientras el contador sea menor o igual a la cantidad de lápices, se suma el precio al total parcial y se aumenta el contador.');
  await hablarPromesa('Al finalizar el ciclo, se muestra el total a pagar.');

  // --- FOR COMPLETO EN JAVASCRIPT ---
  seccionFor.style.display = 'block';
  let textoFor = `
<pre><code class="language-js">let totalParcial = 0;

for (let contador = 1; contador <= cantidad; contador++) {
  totalParcial = totalParcial + precio;
}

console.log("Total a pagar (for): $" + totalParcial.toFixed(2));</code></pre>`;
  explicacionFor.innerHTML = textoFor;

  // Ejecutar el for
  let totalParcialF = 0;
  for (let contadorF = 1; contadorF <= cantidad; contadorF++) {
    totalParcialF += precio;
  }
  resultadoFor.textContent = `Total: $${totalParcialF.toFixed(2)}`;

  await hablarPromesa('FOR en JavaScript: paso a paso.');
  await hablarPromesa('Se inicializa el total parcial en cero.');
  await hablarPromesa('Para cada contador desde uno hasta la cantidad de lápices, se suma el precio al total parcial.');
  await hablarPromesa('Al finalizar el ciclo, se muestra el total a pagar.');

  // --- Tabla de prueba de escritorio ---
  cuerpoTabla.innerHTML = '';
  const mostrar = Math.min(5, cantidad);
  for (let contador = 1; contador <= mostrar; contador++) {
    const parcial = contador * precio;
    const fila = cuerpoTabla.insertRow();
    fila.insertCell().textContent = contador;
    fila.insertCell().textContent = contador;
    fila.insertCell().textContent = cantidad;
    fila.insertCell().textContent = cantidad >= 1000 ? 'Mayor o igual a 1000' : 'Menor a 1000';
    fila.insertCell().textContent = `$${parcial.toFixed(2)}`;

    await hablarPromesa(`Iteración ${contador}, subtotal acumulado ${parcial.toFixed(2)} dólares.`);
  }

  if (cantidad > mostrar) {
    await hablarPromesa(`Se muestran solo las primeras ${mostrar} iteraciones como ejemplo. El ciclo completo se ejecutaría ${cantidad} veces.`);
  }

  await hablarPromesa(`Resumen final: Precio unitario ${precio}, total a pagar ${total.toFixed(2)} dólares.`);

  btn.disabled = false;
}
