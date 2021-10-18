const loginIcon = document.querySelector('.login');
let formLoginContainer = document.querySelector('.form-login-container');
let formclose = document.querySelector('#formauto');
let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('header nav');

loginIcon.addEventListener('click', () => {
  formLoginContainer.classList.add('active');
});

formclose.addEventListener('click', () => {
  formLoginContainer.classList.remove('active');
});

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
})

