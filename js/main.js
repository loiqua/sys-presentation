let etoile1= document.querySelector("#star1");
let etoile2= document.querySelector("#star2");
let etoile3= document.querySelector("#star3");
let etoile4= document.querySelector("#star4");
let etoile5= document.querySelector("#star5");
let noteEnChiffre= document.querySelector("#note");
let tabNote= [etoile1,etoile2,etoile3,etoile4,etoile5];
//attribution de note avec les étoiles
let d=0;
function Note(a,b) {
	a.addEventListener("click",function (e) {
		for (var i =0; i <= b; i++) {
			tabNote[i].style.color="rgb(250,255,45)";
		}
		for (var a = 4; a >=(b+1); a--) {
			tabNote[a].style.color="rgb(222,222,222)";
		}
		noteEnChiffre.innerHTML=`(${b+1}/5)`;
		return d=b+1;
	})
}
function NoteEntree(a,c) {
	a.addEventListener("mouseover",function (e) {
			for (var i =0; i <= c; i++) {
				tabNote[i].style.color="rgb(250,255,45)";
			}
			for (var a = 4; a >=(c+1); a--) {
				tabNote[a].style.color="rgb(222,222,222)";
			}
			noteEnChiffre.innerHTML=`(${c+1}/5)`;
	})
}
function NoteSortie(a) {
	a.addEventListener("mouseout",function (e) {
		if (d==5) {

		}
		for (var i =0; i <d; i++) {
			tabNote[i].style.color="rgb(250,255,45)";
		}
		for (var a = 4; a >=d; a--) {
			tabNote[a].style.color="rgb(222,222,222)";
		}
		noteEnChiffre.innerHTML=`(${d}/5)`;
	})
}
NoteEntree(etoile1,0);
NoteEntree(etoile2,1);
NoteEntree(etoile3,2);
NoteEntree(etoile4,3);
NoteEntree(etoile5,4);
NoteSortie(etoile1);
NoteSortie(etoile2);
NoteSortie(etoile3);
NoteSortie(etoile4);
NoteSortie(etoile5);
Note(etoile1,0);
Note(etoile2,1);
Note(etoile3,2);
Note(etoile4,3);
Note(etoile5,4);
//apparition du menu sur mobile
let barMenu = document.querySelector(".bouton_menu");
let menu = document.querySelector("header");
let corps= document.querySelector("body");
let fermer = document.querySelector(".fa-close");
let liste = document.querySelector(".menu");
let header = document.querySelector(".pseudo_header");
let accMenu=0;
function fermerMenu() {
	fermer.addEventListener("click",function(e) {
		if (accMenu==1) {
			menu.style.opacity="0";
			menu.style.transform="translate(100%)";
			corps.style.opacity="1";
			accMenu--;
		}
	})
}
requestAnimationFrame(fermerMenu);
function apparition() {
	barMenu.addEventListener("click",function(e) {
	if (accMenu==0) {
		menu.style.opacity="1";
		menu.style.transform="translate(0%)";
		corps.style.opacity="0.7";
		accMenu++;
	}
})
}
requestAnimationFrame(apparition);
function fermerMenuParListe() {
	liste.addEventListener("click",function(e) {
		if (accMenu==1) {
			menu.style.opacity="0";
			menu.style.transform="translate(100%)";
			corps.style.opacity="1";
			accMenu--;
		}
	})
}
requestAnimationFrame(fermerMenuParListe);

