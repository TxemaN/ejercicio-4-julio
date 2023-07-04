const form = document.querySelector("#pelisForm")
const boton = document.querySelector('#boton')

const arrayPelisUsuario=[{}]

let elemento = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
}
form.addEventListener('submit',(ev)=>{
		ev.preventDefault()
		validar();
	});


  const validar=()=>{

		elemento.titulo=document.getElementById("titulo").value;
		elemento.director=document.getElementById("director").value;
    elemento.anio=document.getElementById("anio").value;
    elemento.genero=document.getElementById("genero").value;
    arrayPelisUsuario.push(arrayPelisUsuario)

		
		}



console.log(arrayPelisUsuario,elemento)