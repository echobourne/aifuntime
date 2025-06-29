const startCallBtn = document.getElementById('startCall');
const statusText = document.getElementById('status');
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Temporary placeholder audio

startCallBtn.addEventListener('click', () => {
    statusText.textContent = "Connecting to AI Funtime...";
    
    // Simulate short delay for 'connection'
    setTimeout(() => {
        audio.play()
            .then(() => {
                statusText.textContent = "You're live with AI Funtime 😉";
            })
            .catch(err => {
                console.error(err);
                statusText.textContent = "Audio failed to play. Please check your settings.";
            });
    }, 1000);
});
