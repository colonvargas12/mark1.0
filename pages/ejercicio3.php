<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio 3 – Descuento en Trajes</title>
  <link rel="stylesheet" href="../css/ejercicio3.css">
</head>
<body>
   <img style="width:100px;height:100px;margin-left:10px;margin-top:10px;box-shadow:0 0 25px blue;" class="logo" src="../img/ChatGPT Image 6 sept 2025, 05_28_28 p.m..png" alt="">
<a style="margin-top:120px;
   position: absolute;
  top: 0;
  left:01;" href="../index.php">volver a pagina principal</a>  
 <img style="width:100px;height:100px;margin-top:10px;margin-right:10px;box-shadow:0 0 15px blue;"
  class="logo2" src="../img/TIGRILLO_LOAD_3.gif" alt="">
<center> <h1>Ejercicio 3 – Descuento en Trajes</h1>
  <p>Ingrese el precio del traje:</p>
  <input type="number" id="precioTraje">
  <button id="btnCalcular">Calcular Descuento</button></center>

  <h2>Pseudocódigo</h2>
  <pre id="pseudocodigoTraje" style="background-color:#eee;padding:10px;"></pre>
  <div id="resultadoTraje"></div>

  <h2>WHILE en JS</h2>
  <div id="seccionWhileTraje">
    <pre id="explicacionWhileTraje" style="background-color:#eee;padding:10px;"></pre>
    <div id="resultadoWhileTraje"></div>
  </div>

  <h2>FOR en JS</h2>
  <div id="seccionForTraje">
    <pre id="explicacionForTraje" style="background-color:#eee;padding:10px;"></pre>
    <div id="resultadoForTraje"></div>
  </div>

  <h2>Tabla de Prueba de Escritorio</h2>
  <table border="1">
    <thead>
      <tr>
        <th>#</th>
        <th>Precio Inicial</th>
        <th>Descuento</th>
        <th>Precio Final</th>
      </tr>
    </thead>
    <tbody id="cuerpoTablaTraje"></tbody>
  </table>

  <script src="../js/ejercicio3.js"></script>
</body>
</html>
