
const correctCode = "893767644186681892349114422349948";

function submitCode() {
    const input = document.getElementById("codeInput").value.trim();
    const response = document.getElementById("response");
    const barContainer = document.getElementById("loadingBarContainer");
    const bar = document.getElementById("loadingBar");

    response.innerHTML = "";
    barContainer.style.display = "none";
    bar.style.width = "0%";

    if (input.length !== 33) {
        response.innerHTML = "⚠️ Code must be exactly 33 digits.";
        return;
    }

    if (input === correctCode) {
        barContainer.style.display = "block";
        bar.style.width = "100%";
        setTimeout(() => {
            response.innerHTML = "<p>✅ Signal successfully sent.</p><p>📡 We received a response.</p>";
        }, 5000);
    } else {
        let incorrectCount = 0;
        for (let i = 0; i < 33; i++) {
            if (input[i] !== correctCode[i]) incorrectCount++;
        }
        const delay = Math.floor(Math.random() * (1213 - 13 + 1)) + 13;
        response.innerHTML = `<p>⚠️ A signal was sent. Some of the cubes did not get activated.</p><p>Due to low signal strength, response expected in ${delay} years.</p>`;
    }
}
