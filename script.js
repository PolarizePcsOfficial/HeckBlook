document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon.`);
    
    // Reset the form
    this.reset();
});
