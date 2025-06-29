/* script.js */
const startButton = document.getElementById('startCall');
const statusText = document.getElementById('status');
const audioPlayer = document.getElementById('audioPlayer');

startButton.addEventListener('click', () => {
    statusText.textContent = "Connecting to AI...";

    // Simulate slight delay before audio starts
    setTimeout(() => {
        audioPlayer.play();
        statusText.textContent = "AI Call in progress...";
    }, 1000);
});
