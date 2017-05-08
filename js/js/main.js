    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

function cambiarVideoMobile(){
	$("#elvideo").attr('src', 'videos/mobile.mp4');
}


$('document').ready(function(){
	
	 if( isMobile.any() ) cambiarVideoMobile();
	
	/*------ posicionar web arriba ---------*/
	
	$('html,body').animate({scrollTop:'0px'}, 0); 
	
	/*---------- declaramos las variables ----------*/
	$("#numero").val("");
	controlBarraSuperior=0;
	controlScroll=0;
	pasos=0;
	objetos = $("#objetos");
	textointro = $("#intro");
	textointro2 = $(".hastag_intro");
	botonintro = $(".btn_intro");
	infointro = $(".info");
	elvideo = $("#miseccion");
	miboton=$("#miboton");
	intro3=$("#intro3");
	alerta=$("#alerta");
	resultadofinal=$("#resultadofinal");
	botonfinal=$("#botonfinal");
	intro4=$("#intro4");
	nota=$("#nota");
	selector=$("#selector");
	conmutador=$("#conmutador");
	
	
	objeto_01 = $("#obj_01");
	objeto_02 = $("#obj_02");
	objeto_03 = $("#obj_03");
	objeto_04 = $("#obj_04");
	objeto_05 = $("#obj_05");
	objeto_06 = $("#obj_06");
	objeto_07 = $("#obj_07");
	objeto_08 = $("#obj_08");
	objeto_09 = $("#obj_09");
	objeto_10 = $("#obj_10");
	objeto_11 = $("#obj_11");
	objeto_12 = $("#obj_12");
	objeto_13 = $("#obj_13");
	objeto_14 = $("#obj_14");
	objeto_15 = $("#obj_15");
	objeto_16 = $("#obj_16");
	objeto_17 = $("#obj_17");
	objeto_18 = $("#obj_18");
	objeto_19 = $("#obj_19");
	objeto_20 = $("#obj_20");	
	
	/*----------------- fin declaracion de variables ------------------*/
	/*
	$('#elvideo').on('ended',function(){
		 $("#botonfinal").css("display","block"); 
	});	*/
	
	animacionIntro();

	var mivideo = document.getElementById('elvideo');	
	
	mivideo.addEventListener('timeupdate',function(){
	var currentTimeMs = mivideo.currentTime*1000;

	if(pasos==0){
		if(currentTimeMs > 3050){			
			mivideo.pause();
			
		}
	}else if(pasos==1){
		if(currentTimeMs > 4060){			
			mivideo.pause();
			mostrarBotonFinalColores();
		}
	}else if(pasos==2){
		if(currentTimeMs > 6000){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==3){
		if(currentTimeMs > 7460){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==4){
		if(currentTimeMs > 8950){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==5){
		if(currentTimeMs > 10130){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==6){
		if(currentTimeMs > 12050){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==7){
		if(currentTimeMs > 13250){			
			mivideo.pause();	
			mostrarBotonFinalColores();
		}
	}else if(pasos==8){
		if(currentTimeMs > 15120){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==9){
		if(currentTimeMs > 16280){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}else if(pasos==10){
		if(currentTimeMs > 18100){			
			mivideo.pause();
			mostrarBotonFinalColores();	
		}
	}
	},false);
	
	
	
	$(window).scroll(function(){
		posicionNueva = $(this).scrollTop();
	
		if(posicionNueva>100){
			controlBarraSuperior=1;
			
		} else{
			controlBarraSuperior=0;
		}
		cambiarHeader(controlBarraSuperior);
	})
	
	
});


function cambiarHeader(valor){
	if(valor==1){
		$("#cabecera").addClass("reducido");
	}else {
		$("#cabecera").removeClass("reducido");
	}	
}



function mostrarBotonFinalColores(){
	botonfinal.css("display","block");
	intro4.css("display","block");
	//aqui mostramos mensaje colores	
	TweenMax.to(intro4, 0, {opacity:0,delay:0});
	TweenMax.to(intro4, 1, {opacity:1,delay:0.1});
}
function mostrarAlerta(){
	TweenMax.to(intro3, 0.3, {opacity:0,delay:0});
	TweenMax.to(miboton, 0.3, {opacity:0,delay:0});
	alerta.css("display","block");
	TweenMax.to(alerta, 0, {scale:0.8,opacity:0,delay:0});
	
	TweenMax.to(alerta, 1, {scale:1,delay:0.3,ease: Back.easeOut.config( 1.7)});
	TweenMax.to(alerta, 0.5, {opacity:1,delay:0.3});
	setTimeout(function(){
		intro3.css("display","none");
		miboton.css("display","none");
	},300);
}

function cerrarAlerta(){	
	TweenMax.to(alerta, 1, {scale:0.8,ease: Back.easeIn.config(1.7)});
	TweenMax.to(alerta, 0.5, {opacity:0,delay:0.5});
	TweenMax.to(intro3, 0.5, {opacity:1,delay:1});
	TweenMax.to(miboton, 0.5, {opacity:1,delay:1});
	setTimeout(function(){
		alerta.css("display","none");
		intro3.css("display","block");
		miboton.css("display","block");
	},1000);
	$("#numero").val("");	
	$("#numero").focus();


}
function animacionIntro(){	
	
	textointro2.css("display","none");
	botonintro.css("display","none");
	infointro.css("display","none");
	intro3.css("display","none");
	
	setTimeout(function(){
		textointro.css("display","none");
		textointro2.css("display","block");
		botonintro.css("display","block");
		infointro.css("display","block");
		botonintro.addClass("animado");
	},3000);
	
	TweenMax.to(intro3, 0, {opacity:0,delay:0});
	TweenMax.to(objetos, 0, {opacity:0,delay:0});
	TweenMax.to(textointro, 0, {opacity:0,delay:0});
	TweenMax.to(textointro2, 0, {opacity:0,delay:0});
	TweenMax.to(botonintro, 0, {opacity:0,delay:0});
	TweenMax.to(infointro, 0, {opacity:0,delay:0});
	TweenMax.to(elvideo, 0, {opacity:0,delay:0});
	TweenMax.to(miboton, 0, {opacity:0,delay:0});
	
	TweenMax.to(textointro, 1, {opacity:1,delay:0.1});
	TweenMax.to(objetos, 1, {opacity:1,delay:1.5});	
	
	TweenMax.to(textointro, 0.5, {opacity:0,delay:2.5});
	TweenMax.to(textointro2, 0.5, {opacity:1,delay:3});
	TweenMax.to(infointro, 0.5, {opacity:1,delay:3.5});
	TweenMax.to(botonintro, 0.5, {opacity:1,delay:4});
	
}


function reproducirVideo(){	
	numero:Number;
	numero=$("#numero").val();
	if(numero>0 && numero<11){
		pasos=numero;
		TweenMax.to(miboton, 0.5, {opacity:0,delay:0});
		TweenMax.to(intro3, 0.5, {opacity:0,delay:0});
		
		
		setTimeout(function(){		
			miboton.css("display","none");
			intro3.css("display","none");
			var mivideo = document.getElementById('elvideo');
			mivideo.play();
		},500);
	}else{
		mostrarAlerta();	
	}
	
	
}

function separarContenido(){
	
	elvideo.css("display","block");	
	miboton.css("display","block");
	intro3.css("display","block");
	
	TweenMax.to(textointro2, 0.5, {opacity:0,delay:0});
	TweenMax.to(botonintro, 0.5, {opacity:0,delay:0});
	TweenMax.to(infointro, 0.5, {opacity:0,delay:0});
	TweenMax.to(elvideo, 1, {opacity:1,delay:0.5});
	TweenMax.to(intro3, 0.5, {opacity:1,delay:1});
	TweenMax.to(miboton, 0.5, {opacity:1,delay:1.5});
	
	setTimeout(function(){		
		Movimiento();
		textointro2.css("display","none");
		botonintro.css("display","none");
		infointro.css("display","none");
    },500);
	setTimeout(function(){		
		$('#elvideo')[0].play();
    },1000);
	setTimeout(function(){		
		$("#numero").focus();
    },4000);
}


function color(){
	botonfinal.css("display","none");
	intro4.css("display","none");
	resultadofinal.css("display","block");
	TweenMax.to(resultadofinal, 0, {scale:0.6,opacity:0,delay:0});
	
	TweenMax.to(resultadofinal, 1, {scale:1,delay:0.1,ease: Back.easeOut.config( 1.7)});
	TweenMax.to(resultadofinal, 0.5, {opacity:1,delay:0.1});
}

function Movimiento(){
  
	objeto_01.addClass("movimiento");
	objeto_02.addClass("movimiento");
	objeto_03.addClass("movimiento");
	objeto_04.addClass("movimiento");
	objeto_05.addClass("movimiento");
	objeto_06.addClass("movimiento");
	objeto_07.addClass("movimiento");
	objeto_08.addClass("movimiento");
	objeto_09.addClass("movimiento");
	objeto_10.addClass("movimiento");
	objeto_11.addClass("movimiento");
	objeto_12.addClass("movimiento");
	objeto_13.addClass("movimiento");
	objeto_14.addClass("movimiento");
	objeto_15.addClass("movimiento");
	objeto_16.addClass("movimiento");
	objeto_17.addClass("movimiento");
	objeto_18.addClass("movimiento");
	objeto_19.addClass("movimiento");
	objeto_20.addClass("movimiento");
	
}

function ReiniciarJuego(){
	TweenMax.to(resultadofinal, 0.5, {scale:0.6,delay:0,ease: Back.easeIn.config( 1.7)});
	TweenMax.to(resultadofinal, 0.3, {opacity:0,delay:0.2});
	setTimeout(function(){		
		resultadofinal.css("display","none");
    },500);
	
	var mivideo = document.getElementById('elvideo');
	pasos=0;
	mivideo.currentTime=0;
	mivideo.play();
	
	miboton.css("display","block");
	intro3.css("display","block");

	TweenMax.to(intro3, 0.5, {opacity:1,delay:1});
	TweenMax.to(miboton, 0.5, {opacity:1,delay:1.5});
	$("#numero").val("");
	
	setTimeout(function(){		
		$("#numero").focus();
    },4000);
		
	
}

/*----------------------- MOVIMIENTO WEB SCROLL ---------------------------*/
function bajarSec(numero){
	if(numero==1){
		$('html,body').animate({scrollTop:'0px'}, 'slow'); 
	}else{
		$('html, body').animate({scrollTop:$('.sec'+numero).position().top + 3 + 'px'}, 'slow');	
	}
}


/*------------------ GALERIA IMAGENES --------------------------------- */
posicionactivo=1;
function CambiarImagen(numero){
	/*ruta="images/galeria/galeria"+numero+".gif";
 	$("#grande").attr('src', "images/galeria/galeria"+numero+".gif");*/
	document.getElementById("supersize").innerHTML = "<img src='' id='grande'>";
	document.getElementById("grande").src = "images/galeria/galeria"+numero+".gif";
	
	$("#imagen"+posicionactivo).removeClass("activo");
	posicionactivo=numero;
	$("#imagen"+numero).addClass("activo");
	$('html, body').animate({scrollTop:$('.sec3').position().top + 3 + 'px'}, 'slow');
	
	
}

/*--------------------- MUSICA --------------------------------*/
var controlmusica=0;
function PararReproducirMusica(){
	if(controlmusica==0){
		var opcion=document.getElementById("musica");
		fadeSound(opcion,'up');
		controlmusica=1;
		nota.removeClass("desactivado");
		selector.removeClass("desactivado");
		conmutador.removeClass("desactivado");
		

	}else{
		var opcion=document.getElementById("musica");
		fadeSound(opcion,'down');
		controlmusica=0;
		nota.addClass("desactivado");
		selector.addClass("desactivado");
		conmutador.addClass("desactivado");
	}
	
}

function fadeSound(element,level){
	if(level == 'up'){
		
			i = 0;
			max = 100;
			element.volume = i;
			element.play();
			var interval = setInterval(function(){ 
					if(i >= max){
						clearInterval(interval);					
					}else{
						
						element.volume = i/100;
						
						i++;
						//console.log(i+"#"+i/100);
					}
				}, 
				10);
			
			
		}else if(level == 'down'){
			j = 100;
			max = 0;
			var interval = setInterval(function(){ 
				if(j <= max){
					element.pause();
					clearInterval(interval);
				}else{
				element.volume = j/100;
				j--;
				//console.log(j+"#"+j/100);
				}
				
				}, 
				10);
			
		}
}