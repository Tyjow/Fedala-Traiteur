function setBackgroundSelection() {
	switch (document.getElementById("selectEvent").value) {
		case "Mariage":
			return "img/contact/background-mariage.jpg";
		case "Baptême":
			return "img/contact/background-bapteme.jpg";
		case "Cocktail":
			return "img/contact/background-cocktail.jpg";
		case "Départ en retraite":
			return "img/contact/background-retraite.jpg";
	}
}

function setBackgroundInitial() {
	var imageURL = setBackgroundSelection();
	document.getElementById("contact-background").style.backgroundImage = "url('" + imageURL + "')";
}

function setBackground() {
	var imageURL = setBackgroundSelection();
	var bgDiv = document.getElementById("contact-background");
	bgDiv.style.opacity = '0';
	setTimeout (function() { bgDiv.style.backgroundImage = "url('" + imageURL + "')"; }, 250);
	setTimeout (function() { bgDiv.style.opacity = '1'; }, 250);
}
