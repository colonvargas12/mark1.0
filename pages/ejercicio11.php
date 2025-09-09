<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio B1 – N números positivos o negativos</title>
   <link rel="stylesheet" href="../css/ejercicio11.css">
</head>
<body>
  <img style="width:100px;height:100px;margin-left:10px;margin-top:10px;box-shadow:0 0 25px blue;" class="logo" src="../img/ChatGPT Image 6 sept 2025, 05_28_28 p.m..png" alt="">
<a style="margin-top:120px;
   position: absolute;
  top: 0;
  left:01;" href="../index.php">volver a pagina principal</a>  
 <img style="width:100px;height:100px;margin-top:10px;margin-right:10px;box-shadow:0 0 15px blue;"
  class="logo2" src="../img/TIGRILLO_LOAD_3.gif" alt="">
<center> <h1>Ejercicio B1 – N números positivos o negativos</h1>
  <p>Ingrese los números separados por coma:</p>
  <input type="text" id="numerosInput" placeholder="Ej: 4,-2,0,7,-9">
  <button id="btnCalcular">Procesar</button></center> 

  <h2>Pseudocódigo</h2>
  <pre id="pseudocodigo"></pre>
  <div id="resultadoPseudo"></div>
 

  <h2>WHILE en JS</h2>
  <pre id="explicacionWhile"></pre>
  <div id="resultadoWhile"></div>

  <h2>FOR en JS</h2>
  <pre id="explicacionFor"></pre>
  <div id="resultadoFor"></div>

 
  <h2>Tabla de Prueba de Escritorio</h2>
  <table border="1">
    <thead>
      <tr>
        <th>#</th>
        <th>Número</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody id="cuerpoTabla"></tbody>
  </table>

  <script src="../js/ejercicio11.js"></script>
</body>
</html>
