<!-- Custom JavaScript -->
<script>
    // JavaScript code for handling form submission
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you can add code to handle the form submission,
            // such as sending an AJAX request to a server or displaying a success message.

            // For demonstration purposes, let's just log the form data to the console
            console.log('Form submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Clear the form fields after submission
            form.reset();
        });
    });
</script>
