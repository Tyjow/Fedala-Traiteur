/* show text on hover */
function showHover (hoverID, imgID) {
	var hover =  document.getElementById(hoverID);
	var img = document.getElementById(imgID);
	hover.style.opacity = 1;
	img.classList.add('black');
}

/* hide text when leaving hover */
function hideHover (hoverID, imgID) {
	var hover =  document.getElementById(hoverID);
	var img = document.getElementById(imgID);
	hover.style.opacity = 0;
	img.classList.remove('black');
}
