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

function validateUsername(username) {
    checkEmptyOrNull(username);
}

function validatePassword(password) {
    checkEmptyOrNull(password);
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

