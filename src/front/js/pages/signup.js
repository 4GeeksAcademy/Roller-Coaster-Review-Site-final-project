

// Function to handle signup
function signup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    alert("Full Name: " + fullname + "\nEmail: " + email + "\nPassword: " + password);
}

document.getElementById("signupButton").addEventListener("click", signup);
