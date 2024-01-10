function sendComment() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let textInput = document.getElementById('text-input');
	let mobileNumber = 51944502272;    /* Mobile number here [currently: Joel's] */

	if (name.value.trim() == "")
    {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Por favor ingresa su nombre');
		return false;
	}
	if (email.value.trim() == "")
    {
		email.style.background = "lightpink";
		email.style.border = "4px solid red";
		alert('Por favor ingresa su correo electronico');
		return false;
	}

	let url = `https://wa.me/${mobileNumber}?text=` + "Name: " + name.value + "%0a" + "Email ID: " + email.value + "%0a" + "Message: " + textInput.value;

	window.open(url, '_blank').focus();
}

/* for the carousel */
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

