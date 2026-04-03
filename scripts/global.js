const hamburgerButton = document.querySelector('.hamburger-button');

const navMenu = document.querySelector('header nav ul');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    navMenu.classList.toggle('.hidden');
})