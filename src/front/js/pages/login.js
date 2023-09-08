

// Function to handle login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace this with your actual login logic
    if (username === "yourUsername" && password === "yourPassword") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

document.getElementById("loginButton").addEventListener("click", login);