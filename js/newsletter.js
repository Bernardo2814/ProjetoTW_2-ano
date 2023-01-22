
var form = document.getElementById("newsletter-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("email-input").value;

    alert("Obrigado por subscrever a Newsletter com o email: " + email);
    
    window.location.href = "../index.html";
});
