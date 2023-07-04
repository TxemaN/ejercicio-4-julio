const formulario = document.querySelector("#pelisForm")
const titulillo = document.querySelector("#titulo")
const directorcillo = document.querySelector("#director")
const generozuelo = document.querySelector("#genero")
const boton = document.querySelector('#boton')

const arrayPelisUsuario=[{}]

let elemento = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
}
formulario.addEventListener('submit',(ev)=>{
		ev.preventDefault()
		validar();
	});


  const validar=()=>{

		elemento.titulo=titulillo.value;
		elemento.director=directorcillo.value;
    elemento.anio=document.getElementById("anio").value;
    elemento.genero=generozuelo.value;
    return arrayPelisUsuario.push(arrayPelisUsuario)

		
		}



console.log(validar())