document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.querySelector('.form-status');

  // Basic validation
  if (!name || !email || !subject || !message) {
    status.textContent = 'Please fill all fields';
    status.style.color = 'red';
    return;
  }

  status.textContent = 'Sending message...';
  status.style.color = 'blue';

  try {
const response = await fetch('http://localhost:5000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, email, subject, message }),
});

    // Important: Check if response is ok before trying to parse JSON
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      data = { message: 'Invalid response from server' };
    }

    if (response.ok) {
      status.textContent = data.message || 'Message sent successfully!';
      status.style.color = 'green';

      document.getElementById('contactForm').reset();
      document.getElementById('contactForm').hidden = true;

      setTimeout(() => {
        document.getElementById('contactForm').hidden = false;
        status.textContent = '';
        status.style.color = '';
      }, 4000);
    } else {
      status.textContent = data.message || 'Failed to send message. Please try again.';
      status.style.color = 'red';
    }
  } catch (error) {
    console.error('Full Fetch Error:', error);
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);

    status.textContent = 'Cannot connect to server. Is the backend running on port 5000?';
    status.style.color = 'red';
  }
});
