import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [status, setStatus] = useState("Ready to connect...");
  const [callStarted, setCallStarted] = useState(false);

  const startCall = () => {
    setStatus("AI Call in progress...");
    setCallStarted(true);

    const audio = new Audio("/voice.mp3");
    audio.play();

    audio.onended = () => {
      setStatus("Ready to connect...");
      setCallStarted(false);
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-white mb-4">AI Funtime</h1>
        <p className="text-white mb-6">
          Your customizable AI voice companion experience.
        </p>
        <button
          onClick={startCall}
          disabled={callStarted}
          className={`px-6 py-3 text-lg font-bold rounded-xl ${
            callStarted
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          } text-white`}
        >
          Start AI Call
        </button>
        <p className="mt-4 text-gray-300">{status}</p>
      </div>
    </div>
  );
}
