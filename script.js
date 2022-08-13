const password = document.querySelector('input[name="password"');
const confirmPassword = document.querySelector('input[name="confirm-password"');
const wrongPasswordMessage = document.querySelector('.password-error');
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    if (password.value != confirmPassword.value) {
        wrongPasswordMessage.setAttribute('style','opacity: 1');
        e.preventDefault();
    }
});