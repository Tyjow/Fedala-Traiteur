function setBackground(caller) {
	switch (caller.value) {
		case "Mariage":
			var imageURL = "img/contact/background-mariage.jpg";
			break;
		case "Baptême":
			var imageURL = "img/contact/background-bapteme.jpg";
			break;
		case "Cocktail":
			var imageURL = "img/contact/background-cocktail.jpg";
			break;
		case "Départ en retraite":
			var imageURL = "img/contact/background-retraite.jpg";
			break;
	}
	document.getElementById("contact-background").style.backgroundImage = "url('" + imageURL + "')";
}