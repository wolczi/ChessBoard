var xmlhttp, wzorxml;
var pole_tekstowe = document.getElementById("pole");
  
if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
	wzorxml= new XMLHttpRequest();
} 
  
xmlhttp.open("GET", "chess.xml", true);
xmlhttp.send();
wzorxml.open("GET", "wzor.xml", true);
wzorxml.send();

var buttonWstawPlik = document.getElementById("wstaw_plik");
var buttonWstawPole = document.getElementById("wstaw_pole");
var buttonCzysc = document.getElementById("czysc");

var parser, xmlDoc, x, y, z, i, txt, pom, pole;
	
buttonWstawPlik.onclick = function(){
	
	parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlhttp.responseText,"text/xml");
	pole_tekstowe.value = xmlhttp.responseText;
	
	x = xmlDoc.getElementsByTagName('bierka');
	y = xmlDoc.getElementsByTagName('pozycja');
	z = xmlDoc.getElementsByTagName('kolor');
	
	for (i = 0; i < x.length; i++) { 
		pom=""+y[i].childNodes[0].nodeValue;
		pole=document.getElementById(pom);
		
		if ( z[i].childNodes[0].nodeValue==="bialy" ){
			if(pole.classList.length==1) pole.classList.add("bialy");
			else {
				if(pole.classList.item(1)==="czarny") pole.classList.remove("czarny");
				else pole.classList.remove("bialy");

				pole.classList.add("bialy");
			}
		}
		else {
			if(pole.classList.length==1) pole.classList.add("czarny");
			else {
				if(pole.classList.item(1)==="czarny") pole.classList.remove("czarny");
				else pole.classList.remove("bialy");
				
				pole.classList.add("czarny");
			}
		} 
		
		//
		
        if ( (x[i].getAttributeNode("jaka").nodeValue)==="krol" ) { 
			pole.innerHTML = '<i class="fas fa-chess-king" aria-hidden="true"></i>'; 
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="goniec" ) { 
			pole.innerHTML = '<i class="fas fa-chess-bishop" aria-hidden="true"></i>';
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="skoczek" ) { 
			pole.innerHTML = '<i class="fas fa-chess-knight" aria-hidden="true"></i>'; 
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="wieza" ) {
			pole.innerHTML = '<i class="fas fa-chess-rook" aria-hidden="true"></i>'; 
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="pion" ) {
			pole.innerHTML = '<i class="fas fa-chess-pawn" aria-hidden="true"></i>'; 
		}
    }
	
}

buttonWstawPole.onclick = function(){
	
	parser = new DOMParser();
    xmlDoc = parser.parseFromString(pole_tekstowe.value,"text/xml");
	
	x = xmlDoc.getElementsByTagName('bierka');
	y = xmlDoc.getElementsByTagName('pozycja');
	z = xmlDoc.getElementsByTagName('kolor');
	
	
    for (i = 0; i < x.length; i++) { 
        pom=""+y[i].childNodes[0].nodeValue;
		pole=document.getElementById(pom);
		
		if ( z[i].childNodes[0].nodeValue==="bialy" ){
			if(pole.classList.length==1) pole.classList.add("bialy");
			else {
				if(pole.classList.item(1)==="czarny") pole.classList.remove("czarny");
				else pole.classList.remove("bialy");
				
				pole.classList.add("bialy");
			}
		}
		else {
			if(pole.classList.length==1) pole.classList.add("czarny");
			else {
				if(pole.classList.item(1)==="czarny") pole.classList.remove("czarny");
				else pole.classList.remove("bialy");
				
				pole.classList.add("czarny");
			}
		} 
		
		//
		
        if ( (x[i].getAttributeNode("jaka").nodeValue)==="krol" ) { 
			pole.innerHTML = '<i class="fas fa-chess-king" aria-hidden="true"></i>'; 
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="goniec" ) { 
			pole.innerHTML = '<i class="fas fa-chess-bishop" aria-hidden="true"></i>';
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="skoczek" ) { 
			pole.innerHTML = '<i class="fas fa-chess-knight" aria-hidden="true"></i>'; 
		}
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="wieza" ) {
			pole.innerHTML = '<i class="fas fa-chess-rook" aria-hidden="true"></i>'; 
		}
		
		else if ( (x[i].getAttributeNode("jaka").nodeValue)==="pion" ) {
			pole.innerHTML = '<i class="fas fa-chess-pawn" aria-hidden="true"></i>'; 
		}
    }
 
}

buttonCzysc.onclick = function(){
	var td = document.getElementsByTagName('td');
	
	pole_tekstowe.value=wzorxml.responseText;
	
	for (var i=0;i<td.length;i++) {
		td[i].innerHTML = '';
		if(td[i].classList[0]==="yellow") td[i].className="yellow"
		else td[i].className="gray"}

}
