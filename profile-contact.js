document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();


    var  name= document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var massage = document.getElementById("massage").value;
    var Remember = document.getElementById("Remember").value;

    alert("🙂Welcome, " + name + "! Your Message was successfully submitted!");

});