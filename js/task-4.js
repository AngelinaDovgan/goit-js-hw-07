const form = document.querySelector('.login-form');
function formHandler(event) {
    event.preventDefault();
    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
    } else { 
        const data = {
            email: emailValue,
            password: passwordValue
        };
        console.log(data);
        this.reset();
    }
}

form.addEventListener("submit", formHandler);
