function validate(e) {
    e.preventdefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value; 
    const age = document.getElementById('age').value;
    const msgbox = document.getElementById('message').value;
    let message = '';
    if (email === '') {
        message = 'please enter an email.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'please enter an password.';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'please enter an age.';
        msgbox.style.color = 'red';
    } else {
        message = 'login successful.';
        msgbox.style.color = 'green';
    }
    msgbox.innerHTML=message;
}
// Run validate when Login is clicked

document.getElementById("loginForm").onsubmit = validate;

// Real-time validation (like the screenshots)

document.getElementById("email").oninput = () => validate({ preventDefault: () => { } });

document.getElementById("password").oninput = () => validate({ preventDefault: () => { } });

document.getElementById("age").oninput = () => validate({ preventDefault: () => { } });