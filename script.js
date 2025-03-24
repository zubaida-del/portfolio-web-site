// Simple form validation (for demo purposes)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
    } else {
        alert("Please fill in all fields!");
    }
});
