function toggleMenu() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}

function logout() {
    window.location.href = "login.html"; // Redirect to the login page
}
