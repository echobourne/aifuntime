import { useState } from "react";

export default function Home() {
  const [callStarted, setCallStarted] = useState(false);

  const handleStartCall = () => {
    setCallStarted(true);
    const audio = new Audio("/voice.mp3");
    audio.play();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6">AI Funtime</h1>
      {!callStarted ? (
        <button
          onClick={handleStartCall}
          className="bg-pink-500 px-6 py-3 rounded-2xl text-xl hover:bg-pink-600 transition"
        >
          Start AI Call
        </button>
      ) : (
        <div className="text-2xl">AI Call In Progress...</div>
      )}
    </main>
  );
}
