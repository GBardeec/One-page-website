const wrapper = document.querySelector('.wrapper');

// login/registration
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// open/close
const btnNavLogin = document.querySelector('.nav-btn');
const iconClose = document.querySelector('.icon-close');

// login/forgot
const forgotAdd = document.querySelector('btn-forgot');
const forgotRemove = document.querySelector('back-login');


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

btnNavLogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

forgotAdd.addEventListener('click', ()=> {
    wrapper.classList.add('active-forgot');
});

forgotRemove.addEventListener('click', ()=> {
    wrapper.classList.remove('active-forgot');
});