document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let subject = document.querySelector("input[name='subject']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !subject || !message) {
            swal("Oops!", "Please fill out all fields.", "warning");
            return;
        }

        // EmailJS initialization (ensure it's included in HTML)
        emailjs.send("service_tlqg9g4", "template_bt34c2o", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }, "IvYW5rexrnI5TT6vM")
        .then(function (response) {
            swal("Success!", "Your message has been sent successfully.", "success");
            console.log("Success:", response);
            document.getElementById("contact-form").reset(); 
        })
        .catch(function (error) {
            swal("Error!", "Failed to send message. Please try again later.", "error");
            console.error("Error:", error);
        });
    });
});
