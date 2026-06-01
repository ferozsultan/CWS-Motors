// alert("Hello World! Welcome to my website, you can find more about me and my work here. Feel free to explore and contact me if you have any questions or opportunities. Enjoy your stay!");


const navbarToggel = document.querySelector('.navbarToggel');
const navLink = document.querySelector('.navLink');


navbarToggel.addEventListener('click', () => {
    navbarToggel.classList.toggle('active');
    navLink.classList.toggle('active');
});


