// CAMBIAR SECCIÓN
function mostrar(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}

// DATOS STEAM (ejemplo)
const juegosSteam = [
  {id:1, nombre:"Among Us", logros:100, estado:"Completado"},
  {id:2, nombre:"Bioshock", logros:50, estado:"Jugando"}
];

function filtrarSteam(letra) {
  let tabla = document.getElementById("tablaSteam");
  tabla.innerHTML = "<tr><th>ID</th><th>Nombre</th><th>Logros</th><th>Estado</th><th>Fecha</th><th>Archivo</th><th>Calificación</th><th>Fav</th></tr>";

  juegosSteam.forEach(j => {
    if (letra === "ALL" || j.nombre.startsWith(letra)) {
      tabla.innerHTML += `
        <tr>
          <td>${j.id}</td>
          <td>${j.nombre}</td>
          <td>${j.logros}</td>
          <td>${j.estado}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>⭐</td>
        </tr>`;
    }
  });
}

// RETRO
function cargarRetro(consola) {
  let tabla = document.getElementById("tablaRetro");
  tabla.innerHTML = "<tr><th>ID</th><th>Nombre</th><th>Logros</th><th>Estado</th><th>Fecha</th><th>Archivo</th><th>Calificación</th><th>Fav</th></tr>";

  tabla.innerHTML += `<tr><td>1</td><td>${consola} Game</td><td>100%</td><td>OK</td><td>-</td><td>-</td><td>10</td><td>⭐</td></tr>`;
}

// BLIZZARD
function cargarBlizzard(juego) {
  let div = document.getElementById("contenidoBlizzard");

  div.innerHTML = `
    <h3>Campaña: Completado</h3>
    <h4>Mapas</h4>
    <ul>
      <li>Mapa 1 - ✔</li>
      <li>Mapa 2 - ❌</li>
    </ul>
  `;
}

// FAN GAMES
function cargarFan(tipo) {
  let lista = document.getElementById("listaFan");
  lista.innerHTML = "";

  lista.innerHTML += `<li>${tipo} Game 1</li>`;
}

// SMW
document.getElementById("tablaSMW").innerHTML += `
<tr>
  <td>1</td><td>Hack 1</td><td>96</td><td>Completado</td>
  <td>2025</td><td>ZIP</td><td>9</td><td>⭐</td>
</tr>`;
