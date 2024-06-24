const firstName = document.getElementsById("#firstname");
const ErrorOne = document.getElementById("#firsterror");
 

function firstNameError() {
    if(firstName.value === "") {
        ErrorOne.style.display = "inline";
    } else{
        ErrorOne.style.display = "none";
    }
}




