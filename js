const startCallBtn = document.getElementById("startCallBtn");
const audioPlayer = document.getElementById("audioPlayer");
const vibeSelect = document.getElementById("vibeSelect");

const vibePrompts = {
  flirty: "Hey baby, I’ve been waiting to talk to you. Let’s make this moment unforgettable.",
  dominant: "You're mine now. Speak only when I say. Do you understand?",
  cute: "Hi hi! I just wanted to say you're my favorite person ever!",
  dirty: "I've been thinking about you all day. What are you wearing right now?",
};

const voice_id = "EXAVITQu4vr4xnSDxMaL"; // Rachel — default voice

startCallBtn.addEventListener("click", async () => {
  const vibe = vibeSelect.value;
  const prompt = vibePrompts[vibe] || "Hey there.";

  startCallBtn.disabled = true;
  startCallBtn.innerText = "Calling...";

  try {
    const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voice_id, {
      method: "POST",
      headers: {
        "xi-api-key": "sk_9ed0c72956f47a980d308a7d796da1caa0555a49fbdf2b5d",
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
      },
      body: JSON.stringify({
        text: prompt,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.8,
        },
      }),
    });

    if (!response.ok) throw new Error("Voice generation failed.");

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    audioPlayer.src = audioUrl;
    audioPlayer.play();
  } catch (error) {
    alert("Oops! Something went wrong.");
    console.error(error);
  }

  startCallBtn.disabled = false;
  startCallBtn.innerText = "Start Call";
});
