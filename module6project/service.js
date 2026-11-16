//Javascript//
function bookService(serviceName) {
    alert("🦖 Thank you for choosing Jurassic Motors!\n\nYou selected: " + serviceName + "\n\nA team member will contact you shortly.");
}

// Appointment form pop-up //
document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture user input//
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let model = document.getElementById("model").value;
    let date = document.getElementById("date").value;
    let service = document.getElementById("service").value;

    // Simple validation//
    if (!name || !year || !model || !date || service === "Select Service") {
        alert("⚠️ Please fill out all fields before submitting.");
        return;
    }

    // Confirmation pop-up//
    alert(
        "🦕 Appointment Scheduled!\n\n" +
        "Name: " + name + "\n" +
        "Vehicle: " + year + " " + model + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n\n" +
        "Thank you for trusting Jurassic Motors!"
    );

    // Clear form after submission//
    document.getElementById("appointmentForm").reset();
});
