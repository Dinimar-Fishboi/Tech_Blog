
async function signupFormHandler(event){
    event.preventDefault();
  
    const name = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
    const confirmPassword = document.querySelector('#signupConfirm').value.trim();
    
    if (password === confirmPassword){  
        if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
        }
    } else {
        console.log("Passwords don't match. Please ensure passwords match to sign up")
    }
    
  };

  document.querySelector('#newSignup').addEventListener('submit', signupFormHandler);
 