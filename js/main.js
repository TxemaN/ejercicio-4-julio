
/// VARIABLES --->>>

const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')
const genero = document.querySelector('#genero')
const listaGeneros = document.querySelector('#listaGeneros')
const listaErrores = document.querySelector('#listaErrores');
const contenedorPelis = document.querySelector("#contenedor-pelis");

const regExp = {
  titulo: /[a-zÑ-ÿ0-9\-\_\*\+\@\#\~\$\,\´]+$/i, // Corrección en la expresión. Estaba incompleta.
  director: /^[a-zÑ-ÿ\s]+$/i,
  anio: /^\d{4}$/
}

const fragment = document.createDocumentFragment();


/// ARRAYS --->>>

const arrayPelisUsuario = []

const arrayGeneros = ['Terror', 'Comedia', 'Romántica', 'Drama']

let elemento = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
}


/// EVENTOS --->>>

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const validado = validar();
if(validado)almacenarPelis() //cuando una if solo ejecuta UNA instruccion no necesita {}


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

  const pelicula ={
  titulo: document.querySelector('#titulo').value,

}
}

//Aquí usamos el array de pelis para las tablas con las pelis, el género, año...//
const pintarPelis = (arrayPelis) => {
  arrayPelis.forEach((item) => {



    /*  peli.append(datoPeli);
  
      fragment.append(peli);*/
  })

  //contenedorPelis.append(fragment);
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

/// INVOCACIONES --->>>

genero.append(crearOption('Elija género', ...arrayGeneros))
listaGeneros.append(crearOption('Filtra por género', ...arrayGeneros))