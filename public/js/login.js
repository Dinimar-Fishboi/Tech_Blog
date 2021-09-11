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

const newUserHandler = async (event) => {
    event.preventDefault();

    document.location.replace('/signup')
}

  document.querySelector('#loginBtn').addEventListener('submit', loginFormHandler);
  document.querySelector('#signupBtn').addEventListener('submit', newUserHandler);