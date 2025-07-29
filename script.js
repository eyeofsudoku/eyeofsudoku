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
setTimeout(startFinalSequence, 1500)
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

function startFinalSequence() {
    var fade = document.getElementById("fadeToBlack");
    var blinker = document.getElementById("blinker");
    var typewriter = document.getElementById("typewriter");
    var whiteout = document.getElementById("whiteout");

    // Step 1: Fade to black
    fade.style.display = "flex";
    fade.style.flexDirection = "column";
    fade.style.justifyContent = "center";
    fade.style.alignItems = "center";

    setTimeout(function () {
        fade.style.opacity = 1;
    }, 100); // slight delay for fade-in

    // Step 2: Blinking circle after fade completes
    setTimeout(function () {
        let blinkCount = 0;
        blinker.style.opacity = 1;

        let interval = setInterval(function () {
            blinker.style.opacity = (blinker.style.opacity == 1) ? 0 : 1;
            blinkCount++;
            if (blinkCount >= 10) { // 5 blinks = 10 toggles
                clearInterval(interval);
                blinker.style.display = "none";
                showTypewriter();
            }
        }, 500); // 1 second = 2 × 500ms
    }, 4500); // wait for black to fully appear
        

    // Step 3: Typewriter text
    function showTypewriter() {
        typewriter.style.display = "block";
        const lines = ["Hello\n\n", "Hello\n\n", "Your location is identified\n\n", "We are coming to get the cubes back\n\n"];
        let lineIndex = 0;
        let charIndex = 0;
        typewriter.innerText = "";

        function typeLine() {
            if (lineIndex >= lines.length) {
                setTimeout(showWhiteout, 3000);
                return;
            }

            let current = lines[lineIndex];
            if (charIndex < current.length) {
                typewriter.textContent += current[charIndex];
                charIndex++;
                setTimeout(typeLine, 60);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 3000);
            }
        }

        typeLine();
    }

    // Step 4: Final white screen
    function showWhiteout() {
        whiteout.style.display = "flex";
    }
}