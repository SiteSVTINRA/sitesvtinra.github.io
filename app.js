function NewMenu(text, href){
	var nav = document.querySelector("nav ul");
	nav.length=0;

	var newMenu = document.createElement("li");
	let link = document.createElement("a");
	nav.appendChild(newMenu);
	newMenu.appendChild(link);

	link.innerHTML = text;
	link.setAttribute("href", href);

}

NewMenu("Accueil­­", "index.html");
NewMenu("L'INRA et le site de Gotheron", "hist.html");
NewMenu("L'essai de pêchers visité", "essai.html");
NewMenu("Bilan de notre sortie", "concl.html");
NewMenu("Annexe", "annexe.html")