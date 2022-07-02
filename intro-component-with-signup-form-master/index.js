const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const emailaddress = document.getElementById('emailaddress');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault()
        checkInputs()
})

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailaddressValue = emailaddress.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === '') {
        errorValidation(firstname, "First Name cannot be empty")
    } else {
        sucessValidation(firstname)
    }

    if (lastnameValue === '') {
        errorValidation(lastname, "Last Name cannot be empty")
    } else {
        sucessValidation(lastname)
    }

    if (emailaddressValue === '') {
        errorValidation(emailaddress, "Looks like this is not an email")
    } else {
        sucessValidation(emailaddress)
    }

    if (passwordValue === '') {
        errorValidation(password, "Password cannot be empty")
    } else if (passwordValue.length < 5){
        errorValidation(password, "Password cannot be short")
    } else {
        sucessValidation(password)
    }

}

function errorValidation (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'form-control error'
}

function sucessValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control'
}


