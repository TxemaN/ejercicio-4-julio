
/// VARIABLES --->>>

const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')
const genero = document.querySelector('#genero')
const listaGeneros = document.querySelector('#listaGeneros')
const listaErrores = document.querySelector('#listaErrores');
const contenedorPelis = document.querySelector("#contenedor-pelis");

const regExp = {
  titulo: /[a-zA-Z0-9\s]/i
  director: /^[a-zA-Z\s]$/i,
  anio: /^\d{4}$/
}

const fragment = document.createDocumentFragment();


/// ARRAYS --->>>

const arrayPelis = []

const arrayGeneros = ['Terror', 'Comedia', 'Romántica', 'Drama']


/// EVENTOS --->>>

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const validado = validar();
  if (validado) almacenarPelis() //cuando una if solo ejecuta UNA instruccion no necesita {}

});



/// FUNCIONES --->>>

const validar = () => {

  let mensaje = ''
  const titulo = document.querySelector('#titulo').value;
  const director = document.querySelector('#director').value;
  const anio = document.querySelector('#anio').value;

  const anioActual = new Date().getFullYear()

  if (!regExp.titulo.test(titulo)) {
    mensaje += '<li>No has nombrado película<li>'
  }
  if (!regExp.director.test(director)) {
    mensaje += '<li>No has nombrado director<li>'
  }
  if (!regExp.anio.test(anio) || (anio < 1800 || anio > anioActual)) {
    mensaje += '<li>Año incorrecto<li>'
  }
  if (mensaje != '') {
    listaErrores.innerHTML = mensaje
  } else {
    return true;
  }
}


const almacenarPelis = () => {

  const storedTitulo = document.querySelector('#titulo')
  const storedDirector = document.querySelector('#director')
  const storedAnio = document.querySelector('#anio')
  const storedGenero = document.querySelector('#genero')

  const pelicula = {
    titulo: storedTitulo,
    director: storedDirector,
    anio: storedAnio,
    genero: storedGenero
  }
  if (arrayPelis != ) {
    arrayPelis.push(pelicula)
  }
  form.reset()
}

const crearOption = (...arrayValores) => {
  console.log(arrayValores)
  arrayValores.forEach((item) => {
    let opciones = document.createElement('OPTION')

    opciones.value = item;
    opciones.text = item;
    fragment.append(opciones)
  })
  return fragment
}

const pintarPelis = (arrayPelis) => {
  arrayPelis.forEach((item) => {
let opciones = document.createElement('OPTION')

opciones.value = item;
opciones.text =item


    fragment.append(opciones)
  })

  return fragment
}

/// INVOCACIONES --->>>

genero.append(crearOption('Elija género', ...arrayGeneros))
listaGeneros.append(crearOption('Filtra por género', ...arrayGeneros))