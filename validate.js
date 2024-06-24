
function validateForm() {
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const terms = document.getElementById("terms");
    const query = document.querySelector('input[name="query"]:checked');
    
    const ErrorOne = document.getElementById("firsterror");
    const ErrorLast = document.getElementById("lasterror");
    const ErrorEmail = document.getElementById("emailerror");
    const ErrorMessage = document.getElementById("messageerror");
    const ErrorTerms = document.getElementById("termserror");
    const ErrorQuery = document.getElementById("queryerror");

    let isValid = true;

    
    if (firstName.value === "") {
        ErrorOne.style.display = "inline";
        isValid = false;
    } else {
        ErrorOne.style.display = "none";
    }

    if (lastName.value === "") {
        ErrorLast.style.display = "inline";
        isValid = false;
    } else {
        ErrorLast.style.display = "none";
    }

    if (email.value === "" || !email.validity.valid) {
        ErrorEmail.style.display = "inline";
        isValid = false;
    } else {
        ErrorEmail.style.display = "none";
    }

    if (!query) {
        ErrorQuery.style.display = "inline";
        isValid = false;
    } else {
        ErrorQuery.style.display = "none";
    }

    if (message.value === "") {
        ErrorMessage.style.display = "inline";
        isValid = false;
    } else {
        ErrorMessage.style.display = "none";
    }

    if (!terms.checked) {
        ErrorTerms.style.display = "inline";
        isValid = false;
    } else {
        ErrorTerms.style.display = "none";
    }

    if( isValid) {
        alert("Message Sent!")
    } 

    return isValid;
}







