window.onload = function (){

	var peliculas = [{
		Numero: "1",
		Titulo: "Mision de rescate",
		Duracion: "99M",
		Director: "Sam Hargrave",
		Anio: "2020",
		Imagen: '001.png'
	},
	{
		Numero: "2",
		Titulo: "A ciegas",
		Duracion: "89M",
		Director: "Sam Hargrave",
		Anio: "2020",
		Imagen: '002.png'
	},
	{
		Numero: "3",
		Titulo: "Spenser Confidential",
		Duracion: "85M",
		Director: "Peter Berg",
		Anio: "2020",
		Imagen: '003.png'
	},
	{
		Numero: "4",
		Titulo: "Escuadrón 6",
		Duracion: "83M",
		Director: "Michael Bay",
		Anio: "2019",
		Imagen: '004.png'
	},
	{
		Numero: "5",
		Titulo: "Misterio a bordo",
		Duracion: "73M",
		Director: "Kyle Newacheck",
		Anio: "2019",
		Imagen: '005.png'
	},
	{
		Numero: "6",
		Titulo: "El irlandés",
		Duracion: "64M",
		Director: "Martin Scorsese",
		Anio: "2019",
		Imagen: '006.png'
	},
	{
		Numero: "7",
		Titulo: "Triple frontera",
		Duracion: "63M",
		Director: "J,C,Chandor",
		Anio: "2019",
		Imagen: '007.png'
	},
	{
		Numero: "8",
		Titulo: "La otra Missy",
		Duracion: "59M",
		Director: "Happy Madison",
		Anio: "2020",
		Imagen: '008.png'
	},
	{
		Numero: "9",
		Titulo: "El hoyo",
		Duracion: "56M",
		Director: "Galder Gaztelu-Urrutia",
		Anio: "2019",
		Imagen: '009.png'
	},
	{
		Numero: "10",
		Titulo: "La cita perfecta",
		Duracion: "48M",
		Director: "Chris Nelson",
		Anio: "2019",
		Imagen: '010.png'
	}]



	let $botonGenerar = document.querySelector('#boton-generar');


	$botonGenerar.addEventListener('click', cargarPeliculas);

	var nodoPeliculas = document.getElementById("peliculas");

	var numero=0;

	function cargarPeliculas(){
		for (let movie of peliculas) {

			let nodoBoton = document.createElement('button');
			nodoBoton.classList.add('btn', 'btn-primary');
			nodoBoton.textContent = '+ Punto ';
			nodoBoton.setAttribute("id", "botonId"+movie['Numero'] );
			nodoBoton.style.background = 'pink';


			let nodoRow = document.createElement('div');
			nodoRow.classList.add('row');

			let nodoPeliculaTitulo = document.createElement('h1');
			nodoPeliculaTitulo.textContent =movie['Numero'] +' ' + movie['Titulo'];
			nodoPeliculaTitulo.style.color = 'pink';

			let nodoPeliculaParrafo = document.createElement('p');
			nodoPeliculaParrafo.classList.add('cart-tittle');
			nodoPeliculaParrafo.textContent = movie['Director'];
			nodoPeliculaParrafo.style.color = 'white';

			let nodoRanking = document.createElement('h5');
			nodoRanking.textContent = 'Ranking '+(11-movie['Numero']);
			nodoRanking.setAttribute("id", "rankingId"+movie['Numero']);
			nodoRanking.style.color = 'white';


			let nodoPeliculaImagen = document.createElement('img');
			nodoPeliculaImagen.classList.add('img-fluid');
			nodoPeliculaImagen.setAttribute('src', 'peliculas/'+movie['Imagen']);

			let nodoTitulo = document.createElement('div');
			nodoTitulo.classList.add('col-sm-6');

			let nodoDescripcion = document.createElement('div');
			nodoDescripcion.classList.add('col-sm-6');


			nodoTitulo.appendChild(nodoPeliculaTitulo);
			nodoTitulo.appendChild(nodoPeliculaParrafo);
			nodoDescripcion.appendChild(nodoRanking);

			nodoRow.appendChild(nodoTitulo);
			nodoRow.appendChild(nodoDescripcion);


			let nodoRowImagen = document.createElement('div');
			nodoRowImagen.classList.add('row');



			let divImagen = document.createElement('div');
			divImagen.classList.add('col-sm-6');

			let divBoton = document.createElement('div');
			divBoton.classList.add('col-sm-6');

			divImagen.appendChild(nodoPeliculaImagen);
			divBoton.appendChild(nodoBoton);

			nodoRowImagen.appendChild(divImagen);
			nodoRowImagen.appendChild(divBoton);


			nodoPeliculas.appendChild(nodoRow);
			nodoPeliculas.appendChild(nodoRowImagen);


			nodoBoton.addEventListener("click", (function(tId, bId){
				return function(){
					var cadena=document.getElementById(tId).innerHTML;
					numero=parseInt(cadena.substring(8,cadena.length))+1;
					document.getElementById(tId).innerHTML=cadena.substring(0,8)+numero;
					//alert(cadena.substring(0,8));
				}
				
			}
			)("rankingId"+movie['Numero'], "botonId"+movie['Numero']),false);


		}

	}
	
}