document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const status = document.querySelector('.form-status');
  
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
  
      if (response.ok) {
        status.textContent = 'Message sent successfully!';
        document.getElementById('contactForm').reset();
      } else {
        status.textContent = 'Failed to send message. Please try again.';
        document.getElementById('contactForm').reset();
      }
    } catch (error) {
      console.error('Error:', error);
      status.textContent = 'An error occurred. Please try again.';
    }
  });
  