// Timer functionality

let timerPaused = false;
let currentInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Function to start the timer
function startTimer() {
    // Only start a new timer if it's not already running
    if (!currentInterval) {
        currentInterval = setInterval(() => {
            if (!timerPaused) {// Decrement time only if the timer is not paused
                timeLeft--;
                updateTimerDisplay(timeLeft);// Update the displayed time

                if (timeLeft === 0) {// Stop the timer when time reaches 0
                    clearInterval(currentInterval);// Clear the interval
                    currentInterval = null;// Reset the interval variable
                    alert("Time's up! Take a break!");// Notify the user
                }
            }
        }, 1000);// Execute every second
    }
}

// Function to update the timer display in MM:SS format
function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);// Calculate remaining minutes
    const seconds = (time % 60).toString().padStart(2, '0');// Ensure two-digit seconds format
    document.getElementById("timer").innerText = `${minutes}:${seconds}`; // Update UI

    // Change color when less than 1 min left
    if (time <= 60) {
        document.getElementById("timer").style.color = "red";
        document.getElementById("timer").style.backgroundColor = "yellow";
        document.getElementById("timer").style.borderRadius = "5px";
    } else {
        // Reset styles when more than 1 minute is left
        document.getElementById("timer").style.color = "white";
        document.getElementById("timer").style.backgroundColor = "transparent";
    }
}

// Function to pause or resume the timer
function pauseResumeTimer() {
    timerPaused = !timerPaused; // Toggle pause state
    document.querySelector(".button2").innerText = timerPaused ? "Resume" : "Pause"; // Update button text
}

// Function to stop and reset the timer
function stopTimer() {
    clearInterval(currentInterval);// Stop the interval
    currentInterval = null;// Reset interval variable
    timeLeft = 25 * 60;// Reset timer to 25 minutes
    updateTimerDisplay(timeLeft); // Update UI to show reset time
    document.querySelector(".button2").innerText = "Pause"; // Reset pause button text
    timerPaused = false;// Ensure timer is not in paused state
}

// Attach event listeners to buttons
document.querySelector(".button1").addEventListener("click", startTimer); // Start
document.querySelector(".button2").addEventListener("click", pauseResumeTimer); // Pause/Resume
document.querySelector(".button3").addEventListener("click", stopTimer); // Stop

