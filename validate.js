const form = document.getElementById("container");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const firstError = document.querySelector(".firsterror");
const secondError = document.querySelector(".lasterror");

function firstNameError () {
    if(firstName.value === "") {
        firstError.style.display = "inline";
    } else{
        firstError.style.display = "none";
    }
}


 




