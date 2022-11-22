const usernameInput = document.getElementById("username-field");
const passwordInput = document.getElementById("password-field");
const emailInput = document.getElementById("email-field");
const usernameErrorMessage = document.getElementById("username-error-message")
const passwordErrorMessage = document.getElementById("password-error-message")
const emailErrorMessage = document.getElementById("email-error-message")
const loginButton = document.querySelector("#login-form-submit")

function validateForm(event, type) {
    event.preventDefault();
    if(type === "login") {
        validateUsername(usernameInput);
        validatePassword(passwordInput);
    } else if (type === "register"){
        validateUsername(usernameInput);
        validatePassword(passwordInput);
        validateEmail(emailInput);
    } else {
        return false;
    } 
}

// regex from https://stackoverflow.com/questions/60792074/validate-username-with-regex-in-javascript
function validateUsername(username) {
    checkEmptyOrNull(username);
    let usernameRegex = /^([a-z0-9]|[-._](?![-._])){4,20}$/;
    if (!(usernameRegex.test(username.value))) {
        displayErrorMessage(username)
    }
}


// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// regex from:  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
function validatePassword(password) {
    checkEmptyOrNull(password);
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!(passwordRegex.test(password.value))) {
        displayErrorMessage(password)
    }
}

// regex from https://www.w3resource.com/javascript/form/email-validation.php
function validateEmail(email) {
    checkEmptyOrNull(email);
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
    displayErrorMessage(email)
    }
}

function checkEmptyOrNull(input) {
    return input.value === "" || input.value === null ? displayErrorMessage(input) : false;
}

function displayErrorMessage(input) {
    input.classList.add("error-border");
    let field = input.name;
    let errorMessage = document.getElementById(`${field}-error-message`)
    errorMessage.innerHTML = `Invalid ${field}`;
}

function clearErrorMessage(input) {
    input.classList.remove("error-border");
    document.getElementById(`${input.name}-error-message`).innerHTML = "";
    
}

