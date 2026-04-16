document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const status = document.querySelector('.form-status');

  try {
    // CHANGE THIS LINE according to your backend port
    const response = await fetch('http://localhost:5000/send-email', {   // ←←← Change 5000 if needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully!';
      status.style.color = 'green';
      document.getElementById('contactForm').reset();
      document.getElementById('contactForm').hidden = true;

      setTimeout(() => {
        document.getElementById('contactForm').hidden = false;
        status.hidden = true;
      }, 3000);
    } else {
      status.textContent = 'Failed to send message. Please try again.';
      status.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    status.textContent = 'Cannot connect to server. Is the backend running?';
    status.style.color = 'red';
  }
});
