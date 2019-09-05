let ourForm = document.getElementById("our-form");
let ourField = document.getElementById('ourField');
let ourField = document.getElementById('ourList');

ourForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(ourField.value)
})
