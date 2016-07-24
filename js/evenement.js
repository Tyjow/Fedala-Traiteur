/* show text on hover */
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

/* hide text when leaving hover */
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

/* JQUERY POUR LES TUILES */


$(function rotation(){
    
      $("#tuile-1").flip({
        axis: "y",
        reverse: false,
        trigger: "click", 
        speed: 1000
          
      });
    });