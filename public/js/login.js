const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // TODO: create new place the user can go once they've loggedin.
        document.location.replace('/user');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupPage = async (event) => {
    event.preventDefault();

    document.location.replace('/signup')
}

const loginPage = async (event) => {
    event.preventDefault();

    document.location.replace('/login')
}

const signupFormHandler = async (event) => {
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
            document.location.replace('/user');
        } else {
            alert(response.statusText);
        }
        }
    } else {
        console.alert("Passwords don't match. Please ensure passwords match to sign up")
    }
    
  };

  document.querySelector('#loginBtn').addEventListener('submit', loginFormHandler);
  document.querySelector('#signupBtn').addEventListener('submit', signupPage);
  document.querySelector('#returnLogin').addEventListener('submit', loginPage);
  document.querySelector('#newSignup').addEventListener('submit', signupFormHandler);
