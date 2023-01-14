menu = document.getElementById("menu-icon");
navbar = document.querySelector(".nav");

menu.onclick = () => {
    navbar.classList.toggle('open');
}