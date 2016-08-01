// fonctions de gestion du flou des images (traiteur-1.html)
function addBlur(target) {
	document.getElementById(target).classList.add('blur');
}
function remBlur(target) {
	document.getElementById(target).classList.remove('blur');
}

// fonction de gestion du sous menu location (location.html)
function show(target) {
	var list_hide = document.getElementsByClassName('cacher');
	for (var i = 0; i < list_hide.length; i++) {
		list_hide[i].style.display = 'none';
	}
	document.getElementById(target).style.display = 'flex';
	document.getElementById('content-height').style.marginTop = '80px';
	document.getElementById('onglets').style.marginTop = '80px';
}

// gestion des tuiles de la page d’accueil (index.html)

// affichage/masquage du texte au survol
function showHover (hoverID) {
	var hover =  document.getElementById(hoverID);
	var imgID = "img-" + hoverID;
	var img = document.getElementById(imgID);
	var boxClass = "box-" + hoverID;
	var box = document.getElementsByClassName(boxClass);
	img.classList.add('black');
	hover.style.opacity = 1;
	box[0].style.opacity = 1;
	box[0].style.top = "30px";
	box[0].style.left = "50px";
	box[1].style.opacity = 1;
	box[1].style.bottom = "30px";
	box[1].style.right = "50px";
}
function hideHover (hoverID) {
	var hover =  document.getElementById(hoverID);
	var imgID = "img-" + hoverID;
	var img = document.getElementById(imgID);
	var boxClass = "box-" + hoverID;
	var box = document.getElementsByClassName(boxClass);
	img.classList.remove('black');
	hover.style.opacity = 0;
	box[0].style.opacity = 0;
	box[0].style.top = "40%";
	box[0].style.left = "20%";
	box[1].style.opacity = 0;
	box[1].style.bottom = "40%";
	box[1].style.right = "20%";
}

// effet de retournement
$(function rotation(){
	$(".tuile").flip({
		axis: "y",
		reverse: true,
		trigger: "click",
		speed: 1000
	});
	$(".tuile-large").flip({
		axis: "x",
		reverse: false,
		trigger: "click", 
		speed: 1000
	});
});
