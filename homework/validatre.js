function validare() {

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;
    if (username === '' || username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long';
        isValid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    if (password === '' || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }
    return isValid;
}
