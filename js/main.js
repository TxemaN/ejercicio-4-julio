const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')

const titulo = document.querySelector('#titulo');
const director = document.querySelector('#director');
const anio = document.querySelector('#anio');
const errores = document.querySelector('#listaErrores');
const regExp ={
    expresionTitulo: /[a-zÑ-ÿ0-9\-\_\*\+\@\#\~\$\,\´]+$/i, // Corrección en la expresión. Estaba incompleta.
    expresiondirector: /[a-zÑ-ÿ]/i, // Corrección en la expresión.
}

const fragmentPelis = document.createDocumentFragment();

const contenedorPelis = document.querySelector("#contenedor-pelis");



const arrayPelisUsuario = [{}]

let elemento = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
}

form.addEventListener('submit',(ev)=>{
		ev.preventDefault()
		validar();
   empujar();
  let mensaje = ''
    const titulo = titulo.value;
    const director = director.value;
    const anio = anio.value;
	});
 if (titulo.length == 0) {
        mensaje += '<li>No has nombrado película<li>'
    }
    if (director.length == 0) {
        mensaje += '<li>No has nombrado director<li>'
    }
    if (anio < 1800 || anio > 2023) {
        mensaje += '<li>Año incorrecto<li>'
    }
    if (mensaje !=''){
        errores.innerHTML=mensaje
}else {
    
}

 
});


//Aquí empujamos los datos de la pel al array//
const empujar = () => {

  elemento.titulo = document.getElementById("titulo").value;
  elemento.director = document.getElementById("director").value;
  elemento.anio = document.getElementById("anio").value;
  elemento.genero = document.getElementById("genero").value;
  arrayPelisUsuario + arrayPelisUsuario.push(elemento)


console.log(arrayPelisUsuario,elemento)
		
		
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


