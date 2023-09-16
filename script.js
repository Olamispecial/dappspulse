const openButtons = document.querySelectorAll(".open-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");


function openPopup() {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
}

openButtons.forEach(function(button) {
    button.addEventListener("click", openPopup); 
});

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
});




const inputField = document.getElementById("text-input");
const message = document.getElementById("message");
const form = document.getElementById("my-form");

form.addEventListener("submit", function() {
    if (inputField.value.trim() === "") {
        event.preventDefault();
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
})