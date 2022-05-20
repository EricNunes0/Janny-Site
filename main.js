function teste(argh) {
var local = 'Olá, este é o site do Anibot. Ainda está em desenvolvimento...';
}

/*function teste() {
globalizacao = 'uhu';
}

teste();
document.write(globalizacao);*/

var local = 'Olá, este é o site do Anibot. Ainda está em desenvolvimento...';

globalizacao = 'uhu';

const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
	const topPaginaNaJanela=window.pageYOFFset+((window.innerHeight*3)/4);
	elementos.forEach(function(elemento){
		if(topPaginaNaJanela > elemento.offsetTop){
			elemento.classList.add(animacaoClass);
		}else{
			elemento.classList.remove(animacaoClass);
		}
	});
}

if(elementos.length){
	window.addEventListener('scroll',function(){
		animaScroll();
	})
}