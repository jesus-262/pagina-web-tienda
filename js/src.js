var boton = [document.getElementsByClassName('control_left'),document.getElementsByClassName('control_right')];
var TAG = document.getElementsByTagName("nav");
var conteo_de_compra=1;
var conteo_de_precio=0;
var mira=0;
var guardar_articulo;
var solo_titulo=1;

pagina = (getUrlVars()["pagina"])? parseInt(getUrlVars()["pagina"]) : 1;
seguir=-1;
 var enchufeTV;
$(window).resize(function() {
	if($(window).width()>940){
		TAG[0].style.display ="block";
	}else {
		TAG[0].style.display ="none";
	}
});


function botoncito(){

	if(TAG[0].style.display =="none" || TAG[0].style.display == "" ){
			TAG[0].style.display ="block";
			
	}else{
			TAG[0].style.display ="none";
	}

}

function url (valores) {

	var url_completo = window.location.search.substr(1);; 
	var url = url_completo.split ("?");
	var urll = url[2].replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ');
	console.log(urll)
	return url[valores];
	

}
function urll (valores) {

	var url_completo = window.location.search.substr(1);; 
	var url = url_completo.split ("?");
	var urll = url[2].replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ').replace('%20', ' ');
	console.log(urll)
	return urll;
	

}

function cargarArticulo(){
	
	if(link=="Index"){
     	enchufeTV="noticias";
	}
	if(link=="Tecnologia"){
		enchufeTV="noticias2";
	}
	if (link=="Promociones") {
		enchufeTV="noticias3";
	};
	
	 index = (contenido.noticias.length >= 12)? 12 : contenido.noticias.length;
	if(pagina > 1 && contenido.noticias.length - (pagina-1)*12 >= 12){
		index = 12;
	}else if(pagina > 1){
		index = contenido.noticias.length - (pagina-1)*12;
	}
	for (var i = 0; i < index; i++) {
		crearArticulo(contenido[enchufeTV][i].tipoN,contenido[enchufeTV][(pagina-1)*12 + i]);
		
	};



	for (var i = 0; i < index; i++) {
		conteo(i);
	}



}




function conteo(valor){

	selector = jQuery(".titulo");
	comperar=jQuery("#myText");


	$(selector[valor]).click(function(){

			if(conteo_de_precio==0){

					 mira=parseFloat(contenido[enchufeTV][valor].precio);
					 document.getElementById("input2").value = mira;
					 conteo_de_precio=conteo_de_precio+mira;
			}else {
					conteo_de_precio=conteo_de_precio+mira;
					mira=parseFloat(contenido[enchufeTV][valor].precio);
					document.getElementById("input2").value = conteo_de_precio;

			}

			document.getElementById("input").value = conteo_de_compra++;

					crearPrecio(selector[valor].innerText)
					guardar_articulo=selector[valor].innerText;

					$("#content_compra")[0].style.display ="block";
						for (var i = 0; i <= index; i++) {
							
							$(".fullW")[i].style.marginRight ="30%";



							if(i!=valor){

							$(".fullW")[i].style.display ="none";

							}
						}
	});
}



function crearPrecio(tipoN){

	if (solo_titulo==1) {
				var titulo2 = document.createElement("p");
				titulo2.className ="titulo2";
				titulo2.innerText = tipoN;
				latI2 = document.getElementById('content_compra');
				latI2.getElementsByClassName("content_compra2")[0].appendChild(titulo2);
				solo_titulo++;	
	};
}

function crearArticulo(tipoN,news){
 
			seguir++;
			var articulo = document.createElement("article");
			
			(link == "Promociones")? articulo.className ="fullF" : articulo.className ="fullW";
			
			var image_w = document.createElement("div");
			
			var img2 = document.createElement("img");
			img2.src = news.img;

			image_w.appendChild(img2);
	
			 titulo = document.createElement("p");
			titulo.className ="titulo";
			titulo.innerText = news.titulo;


			articulo.appendChild(image_w);
			articulo.appendChild(titulo);

			latI = document.getElementById('Publicacion');
			latI.getElementsByClassName("Articulos")[0].appendChild(articulo);
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});

	return vars;
}

$(function(){

	$("header").hover(function() {
	    $("#overlay").css("background: rgba(0,0,0,0);"
	);
	});
		
	if(link!="Index"){

		$("#content")[0].style.marginTop ="5%";
		$(".slides")[0].style.display ="none";

	}else{
		  $(".slides").slidesjs({
		    play: {
		      active: true,
		        // [boolean] Generate the play and stop buttons.
		        // You cannot use your own buttons. Sorry.
		      effect: "slide",
		        // [string] Can be either "slide" or "fade".
		      interval: 6000,
		        // [number] Time spent on each slide in milliseconds.
		      auto: true,
		        // [boolean] Start playing the slideshow on load.
		      swap: true,
		        // [boolean] show/hide stop and play buttons
		      pauseOnHover: false,
		        // [boolean] pause a playing slideshow on hover
		      restartDelay: 2500
		        // [number] restart delay on inactive slideshow
		    }
		  });

	}
	
	if (link=="Promociones") {


		$("boton").ePulse();
		$("boton").ePulse({

		  // animation speed
		  speed: 'fast',

		  // ripple size
		  size: 'medium',

		  // background color
		  bgColor: '#fff100',

		  // trigger event
		  event: 'click',

		  autoDelete: true,
		  reverseOpacity: false,
		  forceContainerStyles: false

	});

	}

	if(link!="Tu_Compra"){
		cargarArticulo();
		crearArticulo();

	}
	if(link=="Tu_Compra"){

		document.getElementById("myText").value = urll(2);
		document.getElementById("myText2").value = url(0);
		document.getElementById("myText3").value = url(1);

	}
});

$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

});