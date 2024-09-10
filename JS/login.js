const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
    } else {
        document.getElementById('emailError').textContent = '';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById('email').value;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful!');
        // Here you can add code to submit the form data to the server
    }
});