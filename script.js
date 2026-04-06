// =======================
// CAMBIO DE SECCIONES
// =======================
function mostrar(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}

// =======================
// VARIABLES GLOBALES
// =======================
let datosSteam = [];
let datosRetro = {};
let datosBlizzard = {};
let datosFan = {};
let datosSMW = [];

// =======================
// CARGA DE JSON
// =======================
async function cargarDatos() {
  try {
    const [steam, retro, blizzard, fan, smw] = await Promise.all([
      fetch("data/steam.json").then(r => r.json()),
      fetch("data/retro.json").then(r => r.json()),
      fetch("data/blizzard.json").then(r => r.json()),
      fetch("data/fangames.json").then(r => r.json()),
      fetch("data/smw.json").then(r => r.json())
    ]);

    datosSteam = steam;
    datosRetro = retro;
    datosBlizzard = blizzard;
    datosFan = fan;
    datosSMW = smw;

    console.log("Datos cargados correctamente");
  } catch (error) {
    console.error("Error cargando JSON:", error);
  }
}

// Ejecutar carga al iniciar
cargarDatos();


// =======================
// STEAM
// =======================
function filtrarSteam(letra) {
  let tabla = document.getElementById("tablaSteam");

  tabla.innerHTML = `
    <tr>
      <th>ID</th><th>Nombre</th><th>Logros</th><th>Estado</th>
      <th>Fecha</th><th>Archivo</th><th>Calificación</th><th>Fav</th>
    </tr>`;

  datosSteam.forEach(j => {
    if (letra === "ALL" || j.nombre.toUpperCase().startsWith(letra)) {
      tabla.innerHTML += `
        <tr>
          <td>${j.id}</td>
          <td>${j.nombre}</td>
          <td>${j.logros}</td>
          <td>${j.estado}</td>
          <td>${j.fecha}</td>
          <td>${j.archivo}</td>
          <td>${j.calificacion}</td>
          <td>${j.favorito ? "⭐" : ""}</td>
        </tr>`;
    }
  });
}


// =======================
// RETROACHIEVEMENTS
// =======================
function cargarRetro(consola) {
  let tabla = document.getElementById("tablaRetro");

  tabla.innerHTML = `
    <tr>
      <th>ID</th><th>Nombre</th><th>Logros</th><th>Estado</th>
      <th>Fecha</th><th>Archivo</th><th>Calificación</th><th>Fav</th>
    </tr>`;

  if (!datosRetro[consola]) return;

  datosRetro[consola].forEach(j => {
    tabla.innerHTML += `
      <tr>
        <td>${j.id}</td>
        <td>${j.nombre}</td>
        <td>${j.logros}</td>
        <td>${j.estado}</td>
        <td>${j.fecha || "-"}</td>
        <td>${j.archivo || "-"}</td>
        <td>${j.calificacion || "-"}</td>
        <td>${j.favorito ? "⭐" : ""}</td>
      </tr>`;
  });
}


// =======================
// BLIZZARD
// =======================
function cargarBlizzard(juego) {
  let div = document.getElementById("contenidoBlizzard");

  let data = datosBlizzard[juego];
  if (!data) return;

  let mapasHTML = data.mapas.map(m =>
    `<li>${m.nombre} - ${m.completado ? "✔" : "❌"}</li>`
  ).join("");

  div.innerHTML = `
    <h3>Campaña: ${data.campania}</h3>
    <h4>Mapas</h4>
    <ul>${mapasHTML}</ul>
  `;
}


// =======================
// FANGAMES
// =======================
function cargarFan(tipo) {
  let lista = document.getElementById("listaFan");
  lista.innerHTML = "";

  if (!datosFan[tipo]) return;

  datosFan[tipo].forEach(j => {
    lista.innerHTML += `<li>${j}</li>`;
  });
}


// =======================
// SMW CENTRAL
// =======================
function cargarSMW() {
  let tabla = document.getElementById("tablaSMW");

  tabla.innerHTML = `
    <tr>
      <th>ID</th><th>Nombre</th><th>Salidas</th><th>Estado</th>
      <th>Fecha</th><th>Archivo</th><th>Calificación</th><th>Fav</th>
    </tr>`;

  datosSMW.forEach(j => {
    tabla.innerHTML += `
      <tr>
        <td>${j.id}</td>
        <td>${j.nombre}</td>
        <td>${j.salidas}</td>
        <td>${j.estado}</td>
        <td>${j.fecha}</td>
        <td>${j.archivo}</td>
        <td>${j.calificacion}</td>
        <td>${j.favorito ? "⭐" : ""}</td>
      </tr>`;
  });
}


// =======================
// AUTO-CARGAS INICIALES
// =======================

// Esperar a que carguen los datos y luego inicializar
setTimeout(() => {
  filtrarSteam("ALL");
  cargarSMW();
}, 500);
