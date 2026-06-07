const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const payload = Object.fromEntries(formData.entries());

        formStatus.textContent = 'Sending...';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Unable to send message.');
            }

            formStatus.textContent = data.message;
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = error.message;
        }
    });
}
