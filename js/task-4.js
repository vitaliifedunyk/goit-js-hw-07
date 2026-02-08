const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const { elements } = event.currentTarget;
    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if (!emailValue || !passwordValue) {
        alert(`All form fields must be filled in`)
    } else {
        const info = {
            email: emailValue,
            password: passwordValue
        };
        console.log(info);
        loginForm.reset()
    }

});