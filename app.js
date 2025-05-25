// app.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate a login process
            if (email === 'user@example.com' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to homepage
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    // Function to fetch movie data (placeholder)
    function fetchMovies() {
        // This function would typically make an API call to fetch movie data
        // For now, we will just log a message
        console.log('Fetching movie data...');
    }

    // Call fetchMovies on page load
    fetchMovies();
});