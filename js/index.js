let xhr = new XMLHttpRequest();

let servResponse = document.getElementById("response");

document.forms.ourForm.onsubmit = function(element) {
    element.preventDefault();
};