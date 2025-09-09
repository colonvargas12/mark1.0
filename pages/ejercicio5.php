<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio 5 – Consultorio Médico</title>
  <link rel="stylesheet" href="../css/ejercicio5.css">
</head>
<body>
  <h1>Ejercicio 5 – Costo de Citas Médicas</h1>
  <p>Ingrese el número de la cita:</p>
  <input type="number" id="numeroCita">
  <button id="btnCalcular">Calcular Costo</button>

  <h2>Pseudocódigo</h2>
  <pre id="pseudocodigoCita" style="background-color:#eee;padding:10px;"></pre>
  <div id="resultadoCita"></div>

  <h2>WHILE en JS</h2>
  <pre id="explicacionWhileCita" style="background-color:#eee;padding:10px;"></pre>
  <div id="resultadoWhileCita"></div>

  <h2>FOR en JS</h2>
  <pre id="explicacionForCita" style="background-color:#eee;padding:10px;"></pre>
  <div id="resultadoForCita"></div>

  <h2>Tabla de Prueba de Escritorio</h2>
  <table border="1">
    <thead>
      <tr>
        <th>#</th>
        <th>Número Cita</th>
        <th>Costo Cita</th>
        <th>Acumulado</th>
      </tr>
    </thead>
    <tbody id="cuerpoTablaCita"></tbody>
  </table>

  <script src="../js/ejercicio5.js"></script>
</body>
</html>
