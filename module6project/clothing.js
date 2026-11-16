// Store name //
let storeName = "Jurassic Motors Clothing";

// Discount percent//
let discountPercent = 20;

// Dinosaur-themed code parts //
let dinoParts = ["TREX", "RAPTOR", "DINO", "FOSSIL", "JURA", "SPINO", "STEG"];

// Confetti running flag//
let confettiRunning = false;


// Discount code generation function //

document.getElementById("generateBtn").addEventListener("click", function () {

    // ⭐ Correct email validation pattern//
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let email = document.getElementById("emailInput").value;

    // Validate email//
    if (!emailPattern.test(email)) {
        document.getElementById("discountMessage").textContent =
            "Please enter a valid email address.";
        return;
    }

    // Create random code//
    let randomDino = dinoParts[Math.floor(Math.random() * dinoParts.length)];
    let randomNumber = Math.floor(Math.random() * 9000) + 1000;
    let finalCode = randomDino + "-" + randomNumber;

    // Display message//
    document.getElementById("discountMessage").textContent =
        "Thanks for signing up! Your " + discountPercent +
        "% off code is: " + finalCode;

    // Show copy button//
    let copyBtn = document.getElementById("copyBtn");
    copyBtn.style.display = "inline-block";
    copyBtn.setAttribute("data-code", finalCode);

    // Start countdown//
    startCountdown();

    // Launch confetti//
    startConfetti();
});


// code copy function//
document.getElementById("copyBtn").addEventListener("click", function () {
    let code = this.getAttribute("data-code");
    navigator.clipboard.writeText(code);
    alert("Code copied: " + code);
});


// countdown function//
function startCountdown() {
    let countdownText = document.getElementById("countdownText");

    let now = new Date();
    let expireTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    function updateCountdown() {
        let current = new Date();
        let diff = expireTime - current;

        if (diff <= 0) {
            countdownText.textContent = "Your code has expired.";
            return;
        }

        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        countdownText.textContent =
            "Code expires in: " + hours + "h " + minutes + "m";

        setTimeout(updateCountdown, 60000);
    }

    updateCountdown();
}


// Confetti function //

function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];
    confettiRunning = true;

    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 2 + 1,
            color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
        });
    }

    function draw() {
        if (!confettiRunning) return; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c) => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = c.color;
            ctx.fill();

            c.y += c.d;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();

    
    setTimeout(() => {
        confettiRunning = false; 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 10000);
}
