const correctCode = "893767644186681892349114422349948";

function submitCode() {
    const input = document.getElementById("codeInput").value.trim();
    const response = document.getElementById("response");
    const barContainer = document.getElementById("loadingBarContainer");
    const bar = document.getElementById("loadingBar");

    // Reset everything
    response.innerHTML = "";
    barContainer.style.display = "none";
    bar.style.width = "0%";
    bar.innerText = "Sending Signal...";
    bar.style.background = "#44aa66"; // Reset to green
    bar.style.color = "#fff";

    // Check length
    if (input.length !== 33) {
        response.innerHTML = "⚠️ Code must be exactly 33 digits.";
        return;
    }

    // If code is correct
    if (input === correctCode) {
        barContainer.style.display = "block";
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                // After 1 second, change bar style and message
                setTimeout(() => {
                    bar.style.background = "#b89d45"; // harmonic darkish yellow
                    bar.style.color = "#000"; // dark text for contrast
                    bar.innerText = "We received a response!";
                }, 1000);
            } else {
                width++;
                bar.style.width = width + "%";
                bar.innerText = "Sending Signal...";
            }
        }, 50);
    } else {
        // If code is incorrect
        let incorrectCount = 0;
        for (let i = 0; i < 33; i++) {
            if (input[i] !== correctCode[i]) incorrectCount++;
        }
        const delay = Math.floor(Math.random() * (1213 - 13 + 1)) + 13;
        response.innerHTML = `
            <p>⚠️ A signal was sent. Some of the cubes did not get activated.</p>
            <p>Due to low signal strength, response expected in ${delay} years.</p>
        `;
    }
}
