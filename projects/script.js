// this is only for registration
function register() {

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successfully!");
}


// this is for login only
function login() {

    let stUsername = localStorage.getItem("username");
    let stPassword = localStorage.getItem("password");

    let inputUsername;
    let inputPassword;

    let isValid = false;

    do {
        inputUsername = document.getElementById("loginUsername").value;
        inputPassword = document.getElementById("loginPassword").value;

        if (inputUsername === stUsername && inputPassword === stPassword) {
            alert("Login Successful!");
            isValid = true;   // ✅ fixed here
        } else {
            alert("Invalid User Or Password!");
            break;            // prevents infinite loop
        }

    } while (!isValid);
}
