const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')
const contenedorPelis = document.querySelector("#contenedor-pelis");
fragment = document.createDocumentFragment

const arrayPelisUsuario = [{}]

let elemento = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
}
form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  empujar();
});

//Aquí empujamos los datos de la pel al array//
const empujar = () => {

  elemento.titulo = document.getElementById("titulo").value;
  elemento.director = document.getElementById("director").value;
  elemento.anio = document.getElementById("anio").value;
  elemento.genero = document.getElementById("genero").value;
  arrayPelisUsuario.push(elemento)


}

//Aquí usamos el array de pelis para las tablas con las pelis, el género, año...//
const pintarPelis = () => {
  arrayPelisUsuario.forEach((item) => {

    document.getElementById("tituloTabla").textContent=item.titulo;
    document.getElementById("directorTabla").textContent=item.director;
    document.getElementById("anioTabla").textContent=item.anio;
    document.getElementById("generoTabla").textContent=item.genero;

    peli.append(datoPeli);

    fragment.append(peli);
  })
  contenedorPelis.append(fragment);
}

console.log(arrayPelisUsuario, elemento)