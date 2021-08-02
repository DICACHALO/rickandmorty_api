// URL API

const API = "https://rickandmortyapi.com/api/character"; //Las variables constantes las declaramso en mayúsculas

// Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      //llenarDatos(json.results), paginacion(json.info), console.log(json.results, json.info);
      llenarDatos(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// Dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 18rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="${pj.name}"></img>`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Estado: ${pj.status}</p>`;
    html += `<p class="card-text">Especie: ${pj.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

// Paginación
const paginacion = (data) => {
  let prevDisabled = "";
  let nextDisabled = "";

  let html = `<li class="page-item ${data.prev == null ? (prevDisabled = "disabled") : (prevDisabled = "")}"><a class="page-link" onclick="getData('${data.prev}')"> Anterior </a></li><li class="page-item ${data.next == null ? (nextDisabled = "disabled") : (nextDisabled = "")}"><a class="page-link" onclick="getData('${data.next}')"> Siguiente </a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

// Se ejecuta la API
getData(API);
