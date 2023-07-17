
/// VARIABLES --->>>

const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')
const genero = document.querySelector('#genero')
const listaGeneros = document.querySelector('#listaGeneros')
const listaErrores = document.querySelector('#listaErrores');
const contenedorPelis = document.querySelector("#contenedor-pelis");

const regExp = {
  titulo: /[a-zA-Z0-9\s]/i,
  director: /^[a-zA-Z\s]/i,
  anio: /^\d{4}$/
};

const fragment = document.createDocumentFragment();


/// ARRAYS --->>>

const arrayPelis = [];

const arrayGeneros = ['Terror', 'Comedia', 'Romántica', 'Drama'];


/// EVENTOS --->>>

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const validado = validar();
  if (validado) almacenarPelis() //cuando una if solo ejecuta UNA instruccion no necesita {}
  pintarPelis(arrayPelis)
});

listaGeneros.addEventListener('change', (ev) => {
  if (ev.target.matches('#listaGeneros')) {
    filtrarPorGenero(ev.target.value)
    console.log(crearOption)
}
})


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
    titulo: storedTitulo.value,
    director: storedDirector.value,
    anio: storedAnio.value,
    genero: storedGenero.value
  }
  if (arrayPelis != 'Filtra por género') {
    arrayPelis.push(pelicula)
  }
  form.reset()
}

const crearOption = (...arrayValores) => {

  arrayValores.forEach((item) => {
    let opciones = document.createElement('OPTION')

    opciones.value = item;
    opciones.text = item;
    fragment.append(opciones)
    console.log(opciones.value)
  })
  return fragment
}

const pintarPelis = (arrayPelis) => {
  contenedorPelis.innerHTML = '';
  arrayPelis.forEach((item) => {
    let parrafoPelis = document.createElement('TR')
    let tituloPelis = document.createElement('TD')
    let directorPelis = document.createElement('TD')
    let anioPelis = document.createElement('TD')
    let generoPelis = document.createElement('TD')

    tituloPelis.textContent = item.titulo;
    directorPelis.textContent = item.director;
    anioPelis.textContent = item.anio;
    generoPelis.textContent = item.genero;
    
    parrafoPelis.append(tituloPelis)
    parrafoPelis.append(directorPelis)
    parrafoPelis.append(anioPelis)
    parrafoPelis.append(generoPelis)
    fragment.append(parrafoPelis)
  })
  contenedorPelis.append(fragment)
};

const filtrarPorGenero = (generoSeleccionado) => {
  if (generoSeleccionado === 'Filtra por género') {
    pintarPelis(arrayPelis)
  } else {
    const pelisFiltradas = arrayPelis.filter((pelicula) => pelicula.genero === generoSeleccionado);
    pintarPelis(pelisFiltradas);
  }
}

/// INVOCACIONES --->>>

contenedorPelis.append(fragment);
genero.append(crearOption('Elija género', ...arrayGeneros));
listaGeneros.append(crearOption('Filtra por género', ...arrayGeneros))