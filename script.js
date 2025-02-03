document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("timer");
    const messageElement = document.getElementById("message");
    const countdownContainer = document.getElementById("countdown");

    const targetDate = new Date("February 4, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownContainer.style.display = "none";
            messageElement.classList.remove("hidden");
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
