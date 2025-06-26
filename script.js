document.getElementById('start').addEventListener('click', async () => {
  const vibe = document.getElementById('vibe').value;
  const audio = document.getElementById('audio');
  audio.src = '';

  try {
    const res = await fetch(`/api/start?vibe=${vibe}`);
    const { audioUrl } = await res.json();
    audio.src = audioUrl;
    audio.play();
  } catch (e) {
    console.error('Error:', e);
    alert('Something went wrong!');
  }
  document.getElementById("start-call").addEventListener("click", async () => {
  const vibe = document.getElementById("vibe").value;
  const response = await fetch(`/api/start-call?vibe=${vibe}`);

  if (!response.ok) {
    alert("Failed to start call");
    return;
  }

  const { audioUrl } = await response.json();
  const audioPlayer = document.getElementById("audio-player");
  audioPlayer.src = audioUrl;
  audioPlayer.play();
});
});
<script src="js/main.js"></script>
</body>
