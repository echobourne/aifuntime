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
});
