let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let cPassError = document.getElementById("c_pass-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

let contactName = document.getElementById("contact-name");
let contactPhone = document.getElementById("contact-phone");
let contactEmail = document.getElementById("contact-email");
let contactPassword = document.getElementById("contact-password");
let contactConfirmPassword = document.getElementById("confirm-password");
let contactMessage = document.getElementById("contact-message");

contactName.addEventListener("keyup", validateName);
contactPhone.addEventListener("keyup", validatePhone);
contactEmail.addEventListener("keyup", validateEmail);
contactPassword.addEventListener("keyup", validatePassword);
contactConfirmPassword.addEventListener("keyup", validateConfirmPassword);
contactMessage.addEventListener("keyup", validateMessage);

function validateName() {
	let name = contactName.value;
	if (name.length === 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}
    // name must be atleast 5 characters
    if(name.length < 5){
        nameError.innerHTML = 'Name should have at least 5 characters';
        return false;
    }
       
	// if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
	// 	nameError.innerHTML = "";
	// 	return false;
	// }
	nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}

function validatePhone() {
	let phone = contactPhone.value;
	if (phone.length === 0) {
		phoneError.innerHTML = "Phone no. is required";
		return false;
	}
	if (phone.length !== 10) {
		phoneError.innerHTML = "Phone no. should be 10 digits";
		return false;
	}
	if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = "Only digits please!";
		return false;
	}
	phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}
function validateEmail() {
	let email = contactEmail.value;
	if (email.length === 0) {
		emailError.innerHTML = "Email is required";
		return false;
	}
	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = "Email Invalid";
		return false;
	}
	emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}
function validatePassword() {
    // Assuming contactPassword, contactName, and passError are defined somewhere in your code
    let password = contactPassword.value;

    if (password.length < 8) {
        passwordError.innerHTML = 'Password must have at least 8 characters';
        return false;
    } else if (password.toLowerCase() === 'password') {
        passwordError.innerHTML = 'Password cannot be “password”';
        return false;
    } else if (password.toLowerCase() === contactName.value.split(' ').join('').toLowerCase()) {
        passwordError.innerHTML = 'Password cannot be your name';
        return false;
    }else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
        passwordError.innerHTML = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
        return false;
    }

    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateConfirmPassword() {
   
    let confirm_password = contactConfirmPassword.value;
    if(contactPassword.value != confirm_password){
        cPassError.innerHTML = 'Password does not match';
        return false;
        }
        cPassError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

function validateMessage() {
	let message = contactMessage.value;
	let required = 10;
	let left = required - message.length;

	if (left > 0) {
		messageError.innerHTML = left + " more characters required";
		return false;
	}
	messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}

function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();
    let isPasswordValid = validatePassword();
    let isCPasswordValid = validateConfirmPassword();
    
	if (
		!validateName() ||
		!validatePhone() ||
		!validateEmail() ||
        !validatePassword() ||
        !validateConfirmPassword() ||
		!validateMessage()
	) {
		submitError.style.display = "block";
		submitError.innerHTML = "Please fix error to submit!";
		setTimeout(function () {
			submitError.style.display = "none";
		}, 3000);
		return false;
	}

    return isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isCPasswordValid ;
}
