const startCallBtn = document.getElementById('startCall');
const statusText = document.getElementById('status');
const personalitySelect = document.getElementById('personality');

// Example personality audio files (replace with AI calls later)
const audioSamples = {
    fun: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    naughty: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    gentle: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
};

startCallBtn.addEventListener('click', () => {
    const selectedPersonality = personalitySelect.value;
    const audio = new Audio(audioSamples[selectedPersonality]);

    statusText.textContent = "Connecting to AI Funtime...";

    setTimeout(() => {
        audio.play()
            .then(() => {
                statusText.textContent = `You're live with the ${selectedPersonality} AI!`;
            })
            .catch(err => {
                console.error(err);
                statusText.textContent = "Audio failed to play. Please check your settings.";
            });
    }, 1000);
});
