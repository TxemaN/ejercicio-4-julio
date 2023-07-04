
const form = document.querySelector('#pelisForm');
const titulo = document.querySelector('#titulo');
const director = document.querySelector('#director');
const anio = document.querySelector('#anio');
const errores = document.querySelector('#listaErrores');

const regExp ={
    expresionTitulo: /[a-zÑ-ÿ0-9\-\_\*\+\@\#\~\$\,\´]+$/i, // Corrección en la expresión. Estaba incompleta.
    expresiondirector: /[a-zÑ-ÿ]/i, // Corrección en la expresión.
}

const fragmentPelis = document.createDocumentFragment();

arrayPelisUsuario = [{}];

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let mensaje = ''
    const titulo = titulo.value;
    const director = director.value;
    const anio = anio.value;

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
    form.submit()
}
})





