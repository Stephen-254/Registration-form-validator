const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const firstError = document.querySelector(".errorone");
const secondError = document.querySelector(".errortwo");
const form = document.getElementById("container");

/*Empty field*/
form.addEventListener("submit", function(event) {
    let isValid = true;

    if (firstName.value.trim() === "") {
        firstError.style.display = "inline";
        isValid = false;
    } else {
        firstError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault();
    }
});



