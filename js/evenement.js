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
	box[1].style.opacity = 1;
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
	box[1].style.opacity = 0;
}
